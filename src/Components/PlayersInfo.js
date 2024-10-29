const playersInfo = ({players})=>{
return(
    <div className="playersInfo">
    <div className="player1Info">
        <img style={{ width: "1.5rem" }} src={require('./Images/cross.png')} alt="cross"></img>
        <span >{players[0].name}</span>:
        <span>{players[0].score}</span>
    </div>
    <div className="player2Info">
        <img style={{ width: "1.5rem" }} src={require('./Images/circle.png')} alt="cross"></img>
        <span>{players[1].name}</span>:
        <span>{players[1].score}</span>
    </div>
</div>
)
}
export default playersInfo;