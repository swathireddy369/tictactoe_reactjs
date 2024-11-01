import { useState } from "react";
const Grid = ({hasGameStarted, matrix,setMatrix,isCircleNext, setIsCircleNext, hasGameWon, setHasGameWon,setCount,count,players,setPlayers}) => {
    let [scenarios, setScenarios] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ])
    const handleClick = (index) => {
        let newMatrix = [...matrix]
        if (isCircleNext) {
            newMatrix[index] = 0
            setIsCircleNext(false);
        } else {
            newMatrix[index] = 1
            setIsCircleNext(true);
        }
        setMatrix(newMatrix)
        checkToWin(newMatrix)
    }
    const checkToWin = (newMatrix) => {
        scenarios.map((scenario) => {
            if (newMatrix[scenario[0]] !== 2) {
                if (newMatrix[scenario[1]] === newMatrix[scenario[0]] && newMatrix[scenario[2]] === newMatrix[scenario[1]]) {
                    setHasGameWon(true)
                    count++;
                    if(isCircleNext){
                      players[0]["score"] = players[0]["score"] +count; 
                    }else{
                      players[1]["score"] = players[1]["score"] +count;
                    }
                    setPlayers(players);
                    setCount(count)

                }

            }

        })

    }
   return (
        <div className="game" style={{
            
            pointerEvents: !hasGameStarted ? "none" : hasGameWon? "none": "auto"   ,
            // opacity: "0.7"
        }}>
            {matrix.map((item, index) => {
                return <>{item === 2 ?
                    <div key={index} id={`square${index + 1}`} className="square" onClick={(e) => { handleClick(index) }}> </div>
                    : <>
                        {item === 0 ? <div key={index} id={`square${index + 1}`} className="square cross" ></div>
                            :
                            <div key={index} id={`square${index + 1}`} className="square circle" > </div>}
                    </>}</>
            })}
        </div>
    )
}
export default Grid;