const Instructions = ({players,hasGameStarted,resetGame})=>{
return(
    <div className="instructions">
    <h3>Click the Button to Start</h3>
    <button className="startBtn">{hasGameStarted ? "New Gamey" :"Start Gamey"}</button>
    {!hasGameStarted ? <button className="ResetBtn" onClick={()=>resetGame()}>Reset Gamey</button>:<></>}
    
</div>
)
}
export default Instructions;