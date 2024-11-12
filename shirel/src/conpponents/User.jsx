import { useState } from "react";
import LogIn from "./LogIn";


function User(props){
    const [status, setStatus] = useState("+")
    const [player, setPlayer] = useState(null);
    console.log('player: ', player);



   
    if(status === "+")
        return <button  onClick={() => setStatus("logIn")}>+</button>

    else if(status === "logIn") 
        return <LogIn logIn={LogIn}/>
        
    
    else if(status === "game"){
        if(!props.gameStart)
            return <h1 className="font"> waiting to other players...</h1>

        else return <Game name={player.userName} handleTurn={props.handleTurn} youWin = {youWin} />
}

    else if (status === "won")
        return <h1 className="font">you win!</h1>
}

export default User;