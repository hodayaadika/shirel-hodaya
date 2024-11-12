import { useState } from "react";
import InGamePlayers from "./InGamePlayer";

export default function EnterPlayers(props) {
  if (localStorage.getItem("Users") === null) {
    let userArray = [];

    userArray.push({
      name: "guest",
      numGame: 0,
      avgStep: 4,
    });
    localStorage.setItem("Users", JSON.stringify(userArray));
  }
  const [inputValue, setInputValue] = useState("");
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const [players, setPlayer] = useState(
    JSON.parse(localStorage.getItem("inGamePlayers"))
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("Users") || "[]"));
  let name;
  let arrUsers = [];

  const login = () => {
    arrUsers = user; //array local storage user מערך1

    // localStorage.getItem("inGamePlayers");

    name = inputValue;
    // console.log({ name });
    const oldUser = arrUsers.find((user) => user.name === name);
    // console.log(oldUser);
    if (!oldUser) {
      //sign up
      console.log("sign up");
      if (!players) {
        console.log("player1");
        let userPlayer = [];

        userPlayer.push({
          name: name,
          numGame: 0,
          avgStep: undefined,
        });
        localStorage.setItem("inGamePlayers", JSON.stringify(userPlayer));
        const tempPlayers=[...players];
        tempPlayers.push(userPlayer);
        setPlayer(tempPlayers);
        localStorage.setItem(
          "Users",
          JSON.stringify([
            ...arrUsers,
            { name: name, numGame: 0, avgStep: undefined },
          ])
        );
        setUser(arrUsers);
      } else {
        console.log("not first players");
        localStorage.setItem(
          "Users",
          JSON.stringify([
            ...arrUsers,
            { name: name, numGame: 0, avgStep: undefined },
          ])
        );
        setUser(arrUsers);
        const tempPlayers = [...players];
        tempPlayers.push({ name: name, numGame: 0, avgStep: undefined });
        setPlayer(tempPlayers);
        localStorage.setItem(
          "inGamePlayers",
          JSON.stringify([
            ...players,
            { name: name, numGame: 0, avgStep: undefined },
          ])
        )
      }
    } else {
      console.log("login");
      if (!players) {
        console.log("player1");
        let userPlayer = [];

        userPlayer.push({
          name: name,
          numGame: oldUser.numGame,
          avgStep: oldUser.avgStep,
        });
        localStorage.setItem("inGamePlayers", JSON.stringify(userPlayer));
        const tempPlayers = [...players];
        tempPlayers.push(userPlayer);
        setPlayer(tempPlayers);
        
      } else {
        console.log("not first players");
        console.log(props);
        localStorage.setItem(
          "inGamePlayers",
          JSON.stringify([
            ...players,
            { name: name, numGame: oldUser.numGame, avgStep: oldUser.avgStep },
          ])
        );
        const tempPlayers = [...players];
        tempPlayers.push(userPlayer);
        setPlayer(tempPlayers);
        console.log({
          name: name,
          numGame: oldUser.numGame,
          avgStep: oldUser.avgStep,
        });
      }
    }
    console.log("arrPlayers6: ", players);
  };
  // players = JSON.parse(localStorage.getItem("inGamePlayers"));
  console.log("arrPlayers5: ", players);

  return (
    <>
      <InGamePlayers players={players} />
      <input type="text" onChange={getInputValue} />
      <button onClick={login}>add user</button>
      <h1>You've entered enter Players page</h1>
      <button onClick={props.changePage}>Start game</button>
    </>
  );
}

// export default function (props) {
//   return (
//     <>

//     </>
//   );
// }
