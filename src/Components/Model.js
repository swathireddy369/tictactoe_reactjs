const Model = ({ players, setPlayers, setHasGameStarted, setModeldisplay, resetGame }) => {
    const handleChange = (e, flag) => {
        let newPlayers = [...players]
        if (flag) {
            players[0]["name"] = e.target.value;
            players[0]["score"] = 0;

        } else {
            players[1]["name"] = e.target.value;
            players[1]["score"] = 0;
        }
        setPlayers(newPlayers)
    }
    const handleClick = (e) => {
        e.preventDefault();
      setModeldisplay(false);
        setHasGameStarted(true);
        resetGame();
    }
    return (
        <div className="modal">
            <div className="modal-container">

                <form onSubmit={(e) => handleClick(e)} className="modalform">
                    <h2>Enter Players Name</h2>
                    <input className="player1" placeholder="Player1 Name" name="player1" onChange={(e) => handleChange(e, true)} required></input>
                    <input className="player2" placeholder="Player2 Name" name="player2" onChange={(e) => handleChange(e, false)} required></input>
                    <input className="submitBtn" type="submit" ></input>
                </form>
            </div>
        </div>
    )

}
export default Model;