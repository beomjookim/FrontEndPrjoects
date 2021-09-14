# Personal Front-End Projects - JS, CSS, HTML

## 1. [Guess My Number](https://github.com/beomjookim/JSprojects/tree/main/project1)

- About:  
  A random number is given and the player(you) guesses the number. Every turn you throw your guess and if it's not correct, the program gives you a hint - ups or downs. You have 20 chances and your point decreases by one as you fail to guess each turn. If you get the number right, the point that you have at the moment is your final point. If it's higher than existing highest point, it replaces.
  
  랜덤한 숫자가 주어지고 플레이어는 이 숫자를 추측합니다. 플레이어는 매 턴마다 추측한 숫자를 체크하고, 프로그램은 up과 down을 통해 타겟 숫자와의 관계를 알려줍니다. 총 20번의 기회가 주어지고, 틀릴 때마다 1점씩 감점이 됩니다. 옳은 숫자를 추측하게 되면, 해당 시점의 점수가 최종 점수가 되며, 기존의 최고 점수보다 높을 경우 최고 점수를 갈아치웁니다.

- Notes:  
  My first personal project done using HTML, CSS, JS. Learned about DOM and how to manipulate DOM while working on this project. Also learned multiple ways to connect JS with HTML and CSS, along with a number of JS grammars(such as document.querySelector) frequently used.
  
  HTML, CSS, JS를 활용한 첫 번째 프로그램입니다. DOM이 무엇인지, DOM 조작은 어떻게 하는지에 대해 공부할 수 있었습니다. 또한 JS와 HTML, CSS가 각각의 모듈 형태로 어떻게 어우러지는지를 확인할 수 있었습니다. 그 과정에서 document.querySelector과 같은 자주 쓰이는 JS 문법도 활용할 수 있게 되었습니다.

- Used Languages: <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" align="center" height="20">

- DEMO:  
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/133076536-e4aee95d-fe4a-47b1-a97d-1a8dd7557043.gif" width="70%">
</div>
  
  
## 2. [Modal Windows](https://github.com/beomjookim/FrontEndPrjoects/tree/main/project2)

- About:  
  A simple modal window operator. We have 3 buttons that lead to open modal windows. To close, you can either 1. hit the ESC button, 2. click the X, 3. click the overlay field. 
  
  간단한 모달 창입니다. 모달 창을 띄울 수 있는 세 개의 버튼이 있습니다. 띄운 모달 창을 닫기 위해서, 1. ESC 버튼을 누르거나 2. X 버튼을 클릭하거나 3. overlay부분을 클릭할 수 있습니다.
  
- Notes:  
  Such a simple program, but very important to understand the backgrounds regarding modal window operating systems. Was able to understand the relationships and division of roles between HTML, CSS and JS. Got a better understanding about the perks of class-based FE programming.
  
  아주 간단한 프로그램이지만, 모달창을 띄우고 내리는 것이 어떻게 돌아가는지 아는 것은 아주 중요합니다. HTML, CSS 그리고 JS가 어떻게 역할 분담을 하여 서로 어우러지는지를 공부할 수 있었고, 클래스 기반 프로그래밍의 좋은 점을 확실히 느낄 수 있었습니다.
  
- Used Languages: <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" align="center" height="20">

- DEMO:
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/133104474-52b85227-2690-4416-863f-d105d9135ba3.gif" width="70%">
</div>


## 3. Pig Game

- About:
  2 players play the game. Player1 starts first. Player roll the dice which has sides of 1~6, and the values are cumulatively added to be the player's point. If 1 is up, the player's point resets and turn goes to the opponent. If the player click the hold button, points til the moment adds up to the player's cumulative point, and turn goes to the opponent. The one gets to 100 points first wins.

  두 사람이 진행하는 게임입니다. player 1이 먼저 시작합니다. 1~6의 면이 있는 주사위를 굴려서 나오는 수들을 더한 값이 본인의 점수가 됩니다. 이때 1이 나오면 해당 턴의 점수는 모두 리셋되고, 차례는 상대에게 돌아갑니다. 충분히 모았다 싶을 때 hold 버튼을 누르면 기존 본인의 점수에 추가되고, 역시 상대에게 차례가 돌아갑니다. 먼저 100점을 모으는 쪽이 승리합니다.

- Notes:
  Learned quite a lot of techniques. Learned how to program CSS, JS to make the game played by 2 or more players. I used new JS methods such as eval, getElementById. Also I learned how to inactivate the whole window but New Game key when the winner is chosen, and initialize the program when New Game button was hit.
  
  꽤 많은 테크닉을 배울 수 있었던 프로젝트입니다. 두 명 이상이 번갈아가며 플레이 할 수 있게 프로그래밍 하는 데 필요한 CSS, JS 작업을 공부하였습니다. 또한, eval, getElementById 등의 새로운 메소드를 활용하였습니다. 승자가 나왔을 때 화면이 멈추고 New Game 키만 활성화시키는 것과, New Game을 눌렀을 때 초기화가 되게끔 만드는 방법을 배웠습니다.

- Used Languages: <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" height="20"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" align="center" height="20">

- DEMO:
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/133234134-11ae0023-2168-4b4e-be6d-8b6e7f01aa00.gif" width="70%">
  <br>
  If 1 comes up, the turn is revoked and turn goes to the opponent.<br>
  1이 나오면 해당 턴은 무효화되고, 상대에게 턴이 넘어갑니다.
</div>
<br><br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/29809668/133234431-a87c8eff-3eac-43c6-898b-7c995ea99de4.gif" width="70%">
  <br>
  If a player hits 100 points first, he/she wins! New Game button leads to new game(The goal was 20 instead of 100 in this example).<br>
  100점을 먼저 모은 쪽이 승리합니다! New Game 버튼을 누르면 초기화면으로 안내합니다(예시에서는 100점 대신 20점을 기준으로 했습니다).  
</div>

