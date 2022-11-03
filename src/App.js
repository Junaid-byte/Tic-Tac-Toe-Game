import { React, useState } from "react";
import "./App.css";
import Board from "./Components/Board";
import Scoreboard from "./Components/Scoreboard";
import {ResetBtn} from "./Components/ResetBtn";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [XPlaying, SetXPlaying] = useState(true);

  const[scores,setScores] = useState(
    {
      XScore:0,
      OScore:0,
    }
  )

  const[gameOver,setgameOver] = useState(false);

  const Win_Conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleboxClick = (boxIndex) => {
    const UpdatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return XPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

     const Winner =  CheckWinner(UpdatedBoard);

     if(Winner)
     {
      if(Winner === "O")
      {
        let {OScore} = scores;
        OScore += 1;
        setScores({ ...scores,OScore});
      }
      else 
      {
        let {XScore} = scores;
        XScore += 1;
        setScores({ ...scores,XScore});
      }
     }

     



    setBoard(UpdatedBoard); //ye Grid ki index values ko update krrha hai aur jb tk ye method call nhi hoga toh ye X aur O ki values ko display nhi krwayega!

    SetXPlaying(!XPlaying); //agr ye false hai toh dosra player "O" print krwadega game mei!
  };




  const CheckWinner = (board) =>
  {
    for (var i = 0; i < Win_Conditions.length; i++)
    {
      const[x,y,z] = Win_Conditions[i];
      
      if(board[x] && board[x] === board[y] && board[y] === board[z])
      {
        setgameOver(true);
        return board[x]
        
      }
    }
  }

  const resetBoard = () =>
  {
    setgameOver(false);
    setBoard(Array(9).fill(null));
  }




  return (
    <div className="App">
      <Scoreboard Scores = {scores} xPlaying = {XPlaying}/>
      <Board board={board} Click={gameOver ? resetBoard : handleboxClick} />
      <ResetBtn resetBoard = {resetBoard}/>
    </div>
  );
}

export default App;
