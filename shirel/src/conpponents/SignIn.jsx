import { addPlayer, getPlayer } from "../PlayersLocalStorage";
import { useState } from "react";

function SignIn(props){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState("");

    function signIn(){ //working
        const player = getPlayer(userName, password);
        setValid(player.result);
        if(player.result == "player found")  props.logIn(player.player); 
     }

    return (
        <>
        <h3 className="font">Log In</h3>      
        <div>
            <label className="font"><b>Username:&ensp;</b></label> 
            <input type="text" placeholder="Enter Username" name="uname" required 
            onChange={(event) => setUserName(event.target.value)}/><br /><br/>

            <label className="font"><b>Password:&ensp;</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required
            onChange={(event) => setPassword(event.target.value)}/><br /><br />
            
            <p>{valid}</p>
            <button onClick={() => signIn()}>Login</button><br /><br /><br />
        </div>

        
        </>
    )
}

export default SignIn;