import { useState } from "react";
import "./CSS/style.css"
import PlayersInfo from "./PlayersInfo";
import Grid from "./Grid";
import Instructions from "./Instructions";
const Game = () => {
    let [players, setPlayers] = useState([{ name: "player1", score: 0 },
    { name: "player2", score: 0 }
    ]);
    let [matrix, setMatrix] = useState([2, 2, 2, 2, 2, 2, 2, 2, 2])
   
    let [hasGameStarted, setHasGameStarted] = useState(false);
    let [isCircleNext,setIsCircleNext] = useState(true);
    let [hasGameWon,setHasGameWon] = useState(false);
    let [count,setCount] = useState(0);
    console.log("hasGameWon",hasGameWon);
   const resetGame = ()=>{
    console.log("rest");
    setCount(0);
    setIsCircleNext(true);
    setHasGameWon(false);
    matrix.fill(2);
    setMatrix(matrix);
   }
    return (
        <>
            <PlayersInfo players={players} />
            <Grid matrix={matrix} setMatrix={setMatrix} isCircleNext={isCircleNext} setIsCircleNext={setIsCircleNext} hasGameWon={hasGameWon} setHasGameWon={setHasGameWon}
           count={count} setCount={setCount} players={players} setPlayers={setPlayers}
            />
            <Instructions players={players} hasGameStarted={hasGameStarted} resetGame={resetGame}/>
        </>
    )
}
export default Game;