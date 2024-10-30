const Instructions = ({matrix, players, hasGameStarted, resetGame, hasGameWon, isCircleNext, setHasGameStarted,setModeldisplay }) => {
    console.log("has", hasGameWon, isCircleNext, hasGameStarted);

    return (
        <div className="instructions">
            {!hasGameWon ? <>
                <h3>{!hasGameStarted ? "Click the Button to Start" :
                !matrix.includes(2)?"it's a tie":
                    isCircleNext ? players[0]["name"]+"'s turn" : players[1]["name"] +"'s turn"}</h3></>
                    :

                    <><h3> {  !isCircleNext ?players[0]["name"] + " won" : players[1]["name"] + " won"}</h3></>}

            <button className="startBtn" onClick={() => { setModeldisplay(true) }}>{hasGameStarted ? "New Gamey" : "Start Gamey"}</button>
            {hasGameStarted ? <button className="ResetBtn" onClick={() => resetGame()}>Reset Gamey</button> : <></>}

        </div>
    )
}
export default Instructions;