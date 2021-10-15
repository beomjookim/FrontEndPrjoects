# Personal Front-End Projects - JS, CSS, HTML

## 1. [Guess My Number](https://github.com/beomjookim/JSprojects/tree/main/project1)

- About:  
  A random number is given and the player(you) guesses the number. Every turn you throw your guess and if it's not correct, the program gives you a hint - ups or downs. You have 20 chances and your point decreases by one as you fail to guess each turn. If you get the number right, the point that you have at the moment is your final point. If it's higher than existing highest point, it replaces.

  랜덤한 숫자가 주어지고 플레이어는 이 숫자를 추측합니다. 플레이어는 매 턴마다 추측한 숫자를 체크하고, 프로그램은 up과 down을 통해 타겟 숫자와의 관계를 알려줍니다. 총 20번의 기회가 주어지고, 틀릴 때마다 1점씩 감점이 됩니다. 옳은 숫자를 추측하게 되면, 해당 시점의 점수가 최종 점수가 되며, 기존의 최고 점수보다 높을 경우 최고 점수를 갈아치웁니다.

- What I Learned:
  My first personal project done using HTML, CSS, JS. Learned about DOM and how to manipulate DOM while working on this project. Also learned multiple ways to connect JS with HTML and CSS, along with a number of JS grammars(such as document.querySelector) frequently used.
  
  HTML, CSS, JS를 활용한 첫 번째 프로그램입니다. DOM이 무엇인지, DOM 조작은 어떻게 하는지에 대해 공부할 수 있었습니다. 또한 JS와 HTML, CSS가 각각의 모듈 형태로 어떻게 어우러지는지를 확인할 수 있었습니다. 그 과정에서 document.querySelector과 같은 자주 쓰이는 JS 문법도 활용할 수 있게 되었습니다.

- Used Languages: <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" align="center" height="20">

- DEMO:  
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/133076536-e4aee95d-fe4a-47b1-a97d-1a8dd7557043.gif" width="70%">
</div>
  
<br><br><br><br><br>  
## 2. [Modal Windows](https://github.com/beomjookim/FrontEndPrjoects/tree/main/project2)

- About:  
  A simple modal window operator. We have 3 buttons that lead to open modal windows. To close, you can either 1. hit the ESC button, 2. click the X, 3. click the overlay field. 
  
  간단한 모달 창입니다. 모달 창을 띄울 수 있는 세 개의 버튼이 있습니다. 띄운 모달 창을 닫기 위해서, 1. ESC 버튼을 누르거나 2. X 버튼을 클릭하거나 3. overlay부분을 클릭할 수 있습니다.
  
- What I Learned:  
  Such a simple program, but very important to understand the backgrounds regarding modal window operating systems. Was able to understand the relationships and division of roles between HTML, CSS and JS. Got a better understanding about the perks of class-based FE programming.
  
  아주 간단한 프로그램이지만, 모달창을 띄우고 내리는 것이 어떻게 돌아가는지 아는 것은 아주 중요합니다. HTML, CSS 그리고 JS가 어떻게 역할 분담을 하여 서로 어우러지는지를 공부할 수 있었고, 클래스 기반 프로그래밍의 좋은 점을 확실히 느낄 수 있었습니다.
  
- Used Languages: <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" align="center" height="20">

- DEMO:
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/133104474-52b85227-2690-4416-863f-d105d9135ba3.gif" width="70%">
</div>

<br><br><br><br><br>  

## 3. [Pig Game](https://github.com/beomjookim/FrontEndPrjoects/tree/main/project3)

- About:  
  2 players play the game. Player1 starts first. Player roll the dice which has sides of 1~6, and the values are cumulatively added to be the player's point. If 1 is up, the player's point resets and turn goes to the opponent. If the player click the hold button, points til the moment adds up to the player's cumulative point, and turn goes to the opponent. The one gets to 100 points first wins.

  두 사람이 진행하는 게임입니다. player 1이 먼저 시작합니다. 1~6의 면이 있는 주사위를 굴려서 나오는 수들을 더한 값이 본인의 점수가 됩니다. 이때 1이 나오면 해당 턴의 점수는 모두 리셋되고, 차례는 상대에게 돌아갑니다. 충분히 모았다 싶을 때 hold 버튼을 누르면 기존 본인의 점수에 추가되고, 역시 상대에게 차례가 돌아갑니다. 먼저 100점을 모으는 쪽이 승리합니다.

- What I Learned:  
  Learned quite a lot of techniques. Learned how to program CSS, JS to make the game played by 2 or more players. I used new JS methods such as eval, getElementById. Also I learned how to inactivate the whole window but New Game key when the winner is chosen, and initialize the program when New Game button was hit.
  
  꽤 많은 테크닉을 배울 수 있었던 프로젝트입니다. 두 명 이상이 번갈아가며 플레이 할 수 있게 프로그래밍 하는 데 필요한 CSS, JS 작업을 공부하였습니다. 또한, eval, getElementById 등의 새로운 메소드를 활용하였습니다. 승자가 나왔을 때 화면이 멈추고 New Game 키만 활성화시키는 것과, New Game을 눌렀을 때 초기화가 되게끔 만드는 방법을 배웠습니다.

- Used Languages: <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" align="center" height="20">

- DEMO:
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/133234134-11ae0023-2168-4b4e-be6d-8b6e7f01aa00.gif" width="70%">
  <br>
  If 1 comes up, the turn is revoked and turn goes to the opponent.<br>
  1이 나오면 해당 턴에 모은 점수는 무효화되고, 상대에게 턴이 넘어갑니다.
</div>
<br><br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/133234431-a87c8eff-3eac-43c6-898b-7c995ea99de4.gif" width="70%">
  <br>
  If a player hits 100 points first, he/she wins! New Game button leads to new game(The goal was 20 instead of 100 in this example).<br>
  100점을 먼저 모은 쪽이 승리합니다! New Game 버튼을 누르면 초기화면으로 안내합니다(예시에서는 100점 대신 20점을 기준으로 했습니다).  
</div>

<br><br><br><br><br>  

## 4. [Banking App](https://github.com/beomjookim/smallFrontEndPrjoects/tree/main/project4)

- About:  
  An online banking web application that users can have transactions on, loan money from the bank, check balance and transaction histories. Customized timeline and money notation is applied(exchange rate is not applied) for each user. If the user doesn't have any further movements such as log-out, transfer, loan, delete account, the user will automatically logged out for security reasons just like real banking apps do.  
  
  앱에 가입한 유저들끼리 금전적인 거래를 하고, 은행으로부터 돈을 빌리고, 잔고를 확인할 수 있는, 또한 거래내역을 확인 및 요약하여 보여주는 앱입니다. 각 유저의 locale에 따른 시간대와 금액 표기 방법이 맞춤형으로 제시됩니다. 실제 은행 앱들처럼 로그인 후 로그아웃 없이 입금, 대출, 계정 삭제 등의 기능을 사용 안 한지 5분이 지나면 자동으로 로그아웃 됩니다.

- What I Learned:  
  Assuming we got users' data from API(used dummy data instead), I leanred how to implement log-in and log-out functions using them. I used inserAdjacentHTML, the upgraded version of querySelector, to dynamically add HTML codes. I used higher-order functions and arrow function. Functions like Log-in, deposit, loan, deleting account are implemented using event handlers. preventDefault() was easy to forget, but crucial. I renewed UI after each event. Also, I used Intl API to customize the user's timezone and money notation. Lastly, I used setInterval instead of setTimeOut to show 'time to be automatically logged out' in real time as well as the auto logout function.  
  
  API에서 사용자 데이터를 가져왔다고 가정하고, 더미 데이터로 로그인을 하고, 로그아웃을 하는 동작을 구현할 수 있게 되었습니다. 기존의 querySelector에서 더 나아가서, insertAdjacentHTML을 활용하여 HTML을 동적으로 추가하는 방법을 사용하였습니다. 고차함수를 활용하려 노력했고, 화살표 함수도 활용하였습니다. 로그인, 입금, 대출, 계정 삭제 등의 기능들을 이벤트 핸들러를 통해 구현하였습니다. preventDefault()의 중요성을 파악했습니다. 각각의 이벤트가 끝나면 해당 이벤트의 내용에 따라 UI를 갱신해주었습니다. 또한, Intl API를 활용하여 각 유저의 현재 위치한 locale의 시간대와 금액 표기법을 따랐습니다. 마지막으로, setTimeOut 대신 setInterval을 활용하여 자동으로 로그아웃 되는 시간을 카운트다운하고 자동 로그아웃을 시켰습니다.

- Used Languages: <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" align="center" height="20">

- DEMO:  
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/137443411-0f000144-c389-405f-b408-43277e0d38d7.gif" width="70%">
  <br>  
  Log-in interface. Unenrolled account cannot sign in. Alert shows up. I will use the account of Jonah Silverman, a virtual Portugese. As I log in, I can see whose ID that I am logged-in, transaction history, balance, and there are Transfer, Loan, Account Delete buttons. The timeline at upper-left side shows my locale(which is Seoul, Korea) and currency, notations are in Portugese way. I see auto log-out time left at lower-right side.
    
  로그인 화면입니다. 등록되지 않은 계정은 로그인이 안 됩니다. 알림창이 뜹니다. Jonah Silverman이라는 가상의 포르투갈인으로 들어가보겠습니다. 입장 후 화면입니다. 누구의 계정으로 입장했는지, 거래내역, 잔액을 확인할 수 있고, 이체, 대출, 계정 삭제 등의 버튼이 보입니다. 타임라인은 현재 개발자 본인의 locale(한국 서울)에 따른 표기법으로 되어 있고, 돈의 단위 및 표기법은 모두 유저(포르투갈 유저 계정으로 들어옴)에 맞춰져 있습니다. 우하단에 자동 로그아웃 시간도 표시되어 있습니다.
</div>
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/137443577-8d1bf03b-0059-401f-880f-ab3b5762f595.gif" width="70%">
  <br>  
  If I click sort button, the transaction history is sorted by the amount of money.
  
  중하단의 sort 버튼을 누르면 금액의 크기에 따라 내림차순으로 정렬됩니다.
</div>  
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/137443595-3cad223a-76c3-41ad-bab8-7fbe6c853458.gif" width="70%">
  <br>  
  Transfer money button enables to send money to another user, as long as the amount is within my balance. I send 1200 to jd, who is an american. Then I log-out, and log in as jd. All the interfaces are changed for this American user, and I see 1200 is right there at transaction history. I didn't consider Exchange Rate, but it can be fixed sooner or later.
  
  Transfer money를 통해 다른 유저에게 송금이 가능합니다. 물론 현재 잔액 이하의 금액만 보낼 수 있습니다. jd에게 1200을 보내보겠습니다. 그리고 로그아웃 후 jd의 계정으로 입장하면, 모든 인터페이스는 미국인에 맞게 바뀌고, 방금 js한테서 받은 1200이 찍혀있는 걸 확인할 수 있습니다. 환율 상의 문제는 있으나, 프로그램은 의도대로 실행되는 것을 확인할 수 있습니다.
</div>
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/137443611-6746571f-bdc8-4266-9f3a-96c86b7ae079.gif" width="70%">
  <br>  
  With the Loan button, you can burrow the amount of money less than 10% of the balance.  
  
  Loan입니다. 설정한 한도(현재 본인의 잔액의 10% 이하)에 맞는 금액만을 받을 수 있습니다.
</div>
