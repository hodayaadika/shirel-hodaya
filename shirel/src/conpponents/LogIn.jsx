import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SingUp";

function LogIn(props){ 
    const [haveAcount, setHaveAcount] = useState(true);
   
    return (
        <>
        {haveAcount ? <div> 
            <SignIn logIn={props.logIn}/>
            <button onClick={ ()=>setHaveAcount(false)}>don't have acount? create one!</button>
        </div> :
        <SignUp logIn={props.logIn}/>}
        </>
    )
}

export default LogIn;