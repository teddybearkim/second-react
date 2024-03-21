import { useState } from 'react';
import './App.css';
import Box from "./component/Box";
import RockImg from "./images/rock.jpg"
import ScissorsImg from "./images/scissors.jpg"
import PaperImg from "./images/paper.jpg"
// 1. 박스 2개
// 2. 타이틀
// 3. 사진정보
// 4. 결과값
// 5. 가위바위보 버튼이 존재
// 6. 버튼을 클릭하면 박스에 보임
// 7. 컴퓨터는 아이템을 랜덤한게 선택한다
// 5,6,7 결과를 따지고 결과값을 보여준다
// 승패결과에 따라 테투리 색상이 변한다(이기면 초록, 지면 빨강, 비기면 검정)
const choice = {
  rock: {
    name: "Rock",
    img: RockImg
  },
  paper: {
    name: "Paper",
    img: PaperImg
  },
  scissors: {
    name: "Scissors",
    img: ScissorsImg
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  }

  const judgement = (user, computer) => {
    // user == computer tie
    // user == rock, computer == scissors user win
    // user == rock, computer == paper   user lose
    // user == scissors, computer == paper   user win
    // user == scissors, computer == rock   user lose
    // user == paper, computer == rock   user win
    // user == paper, computer == scissors   user lose
    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose"
  }
    const randomChoice = () => {
      let itemArray = Object.keys(choice);
      let randomItem = Math.floor(Math.random() * itemArray.length);
      let final = itemArray[randomItem]
      return choice[final];

    }
    return (
      <div>
        <div className="main">
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </div>
        <div className="main">
          <button onClick={() => play("rock")}>✊</button>
          <button onClick={() => play("scissors")}>✌️</button>
          <button onClick={() => play("paper")}>✋</button>
        </div>
      </div>
    );
  }

  export default App;
