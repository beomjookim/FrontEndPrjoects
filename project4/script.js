'use strict';

/////////////////////////////////////////////////
// Beomjoo's BANKIST APP

// Arbitrary Data - API에서 데이터를 받아왔다고 가정.
const account1 = {
  owner: 'Jonah Silverman',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-09-11T23:36:17.929Z',
    '2021-10-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // 포르투갈(유로)
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2021-10-02T18:49:59.371Z',
    '2021-10-13T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US', // 미국
};
const accounts = [account1, account2];

// transfer를 위해 환율 API를 사용! nodejs가 아니기 때문에 node-fetch 불필요!
// import fetch from 'node-fetch';
let API_KEY = '';

// HTML과의 연결고리. 모두 document.querySelector 활용.
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// 프로그램 실행 시작 시각 기록.
const now = new Date();

// 프로그램 실행 시마다 유저들 이름 데이터 기반으로 아이디 자동 생성
// ex) Jonah Silverman -> js
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
  });
};
createUsernames(accounts);

// 활동이 없으면 5분 뒤 자동 로그아웃 되는 기능 구현.
const logOutTimer = function () {
  let time = 300;
  const tick = function () {
    labelTimer.textContent =
      `${String(Math.floor(time / 60)).padStart(2, 0)}` +
      ':' +
      `${String(time % 60).padStart(2, 0)}`;

    if (!time) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  tick();
  return (timer = setInterval(tick, 1000));
};

//
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// Intl API 활용해 거래내역의 날짜 포맷 작성
const formatMovements = function (date, locale) {
  const dif = Math.round((now - date) / (1000 * 3600 * 24));
  if (!dif) return 'TODAY';
  if (dif == 1) return 'YESTERDAY';
  if (dif < 8) return String(dif) + ' days ago';
  return new Intl.DateTimeFormat(locale).format(date);
};

// 거래 내역 띄우기
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const displayDate = formatMovements(
      new Date(acc.movementsDates[i]),
      acc.locale
    );

    containerMovements.insertAdjacentHTML(
      'afterbegin',
      `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
        i + 1 // 마음에 안 듬. 나중에 바꾸자!
      } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formatCur(
        mov,
        acc.locale,
        acc.currency
      )}</div>
    </div>`
    );
  });
};

// 현재 잔고 띄우기
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// 페이지가 새로고침될 때마다!
const renewUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// 현재 캐시 플로우 요약 띄우기
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = formatCur(outcomes, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

// global로 설정할 필요 있는 변수들은 global로 설정.
let currentAccount, timer;

// 로그인 화면 관련
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (!currentAccount);
  else {
    // alert('Wrong log-in info!');
    if (currentAccount.pin === Number(inputLoginPin.value)) {
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginUsername.blur();
      inputLoginPin.blur();

      if (timer) clearInterval(timer);
      timer = logOutTimer();
      renewUI(currentAccount);
    }
  }
  // intl API!

  // const options = {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   weekday: 'long',
  // };

  // const locale = navigator.language;
  // labelDate.textContent = new Intl.DateTimeFormat(
  //   currentAccount.locale,
  //   options
  // ).format(now);
});

// 현금 보내기/ 받기
btnTransfer.addEventListener('click', async e => {
  e.preventDefault();

  let receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (!receiverAcc || receiverAcc === currentAccount) {
    // alert('Not a valid ID');
  } else {
    let amount = Number(inputTransferAmount.value);
    if (amount <= 0 || currentAccount.balance < amount) {
      alert('Not a valid amount of money');
    } else {
      let exRate = 1;
      if (currentAccount.currency != receiverAcc.currency) {
        API_KEY = currentAccount.currency + receiverAcc.currency;
        const response = await fetch(
          `https://exchange.jaeheon.kr:23490/query/${API_KEY}`
        )
          .then(res => res.json())
          .catch(e => {
            console.error({ message: 'error!', error: e });
          });
        exRate = response[API_KEY][0];
      }
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount * exRate);
      currentAccount.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date().toISOString());
      clearInterval(timer);
      timer = logOutTimer();
      renewUI(currentAccount);
    }
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(v => v >= 0.1 * amount)) {
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    renewUI(currentAccount);
    clearInterval(timer);
    timer = logOutTimer();
  }
  // else
  // {alert('Sorry, you are not eligible for loan!')};
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (currentAccount.username !== inputCloseUsername.value)
    alert('Not a valid ID');
  else if (Number(inputClosePin.value) !== currentAccount.pin)
    alert('Not a valid pin');
  else {
    alert('Your account is successfully deleted!');
    accounts.splice(
      accounts.findIndex(acc => acc === currentAccount),
      1
    );
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputCloseUsername.blur();
  inputClosePin.blur();
});

let sortOrNo = false;

// sort 버튼. 여기서도, sort 누르면 버튼 모양이 바뀌어야 하는데, 이거 손대자.
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sortOrNo = !sortOrNo;
  displayMovements(currentAccount, sortOrNo);
});
