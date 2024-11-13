import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LogIn({isConnected, setIsConnected}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users?username=${userName}&&website=${password}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("sorry!,There is a problem");
        }return response
      })
      .then((response) => response.json())
      .then(localStorage.setItem("currentUser", JSON.stringify({userName: userName , password: password})))
      .then(setIsConnected(true))
      .catch((error) =>{
        alert(`Error: ${error.message}`)
      })
      .then((json) => console.log(json));
  };
  return(
    <>
     <h3 className="font">Log In</h3> 
     <form onSubmit={(handelSubmit)}>    
        <div>
            <label className="font"><b>Username:&ensp;</b></label> 
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required /><br /><br/>

            <label className="font"><b>Password:&ensp;</b></label> 
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br/>

            
            {/* <p>{valid}</p> */}
            <button>Login</button><br /><br /><br />
        </div>
        <NavLink to="/SignUp"></NavLink>
        </form> 
    </>
)
}



export default LogIn;
