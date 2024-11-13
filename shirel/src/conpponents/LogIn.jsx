import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LogIn({ isConnected, setIsConnected }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [id , setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:3000/users?username=${userName}&&website=${password}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("sorry!, There is a problem");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response from server:", data);
        if (data.length > 0) {
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ userName: userName, password: password , id: data[0].id})
          );
          setIsConnected(true);
        } else {
          alert("User not found or incorrect credentials");
        }
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <>
      <h3 className="font">Log In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="font">
            <b>Username:&ensp;</b>
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <br />
          <br />

          <label className="font">
            <b>Password:&ensp;</b>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />

          <button>Login</button>
          <br />
          <br />
          <br />
        </div>
        <NavLink to="/SignUp">Sign Up</NavLink>
      </form>
    </>
  );
}

export default LogIn;
