import { useState } from "react";
import "./App.css";
import User from "./conpponents/User";

fetch("")
  .then((response) => response.json())
  .then((json) => console.log(json));

function App() {
  const [users, setUsers] = useState([{}]);

  function addUsers(users) {
    setUsers((prevUser) => {
      let newArr = [...prevUser.slice(0, -1), { player, hasWon: false }, {}];
      if (prevPlayers.length == 1) newArr = [{ player, hasWon: false }, {}];

      return newArr;
    });
  }

  console.log("hii");

  return (
    <>
      <div>
        <div className="userContainer">
          {users.map((item, index) => (
            <div key={"user" + index.toString()} className="user">
              <User id={"user" + index} user={item} addUsers={addUsers} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;