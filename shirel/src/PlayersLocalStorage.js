let nextID = 0;
function newPlayer(userName, password){
    nextID++;
    return {userName, password, score: 0, games: 0, ID: nextID};
}


const defP1 = newPlayer("defP1", "");
const defP2 = newPlayer("defP2", "");
const defP3 = newPlayer("defP3", "");


const player1 = newPlayer("chana", "123");
const player2 = newPlayer("shirel", "123");
//setPlayers([player1, player2, newPlayer("", "")]);


function setPlayers(players){ 
    window.localStorage.setItem("players", JSON.stringify(players));
}
function getPlayers(){ 
    return JSON.parse(window.localStorage.getItem("players"));
}

function getPlayerByUserName(userName){ 
    const players = getPlayers();
    for(let player of players){
        if(player.userName === userName) return player;
        console.log('player: ', player);
    }
    return null;
}

function getPlayerIndexByUserName(userName){
    const players = getPlayers();
    for(let i in players){
        if(players[i].userName === userName) return i;
    }
    return null;
}

export function addPlayer(userName, password){ 
    if(getPlayerByUserName(userName))  return {result: "username already exist"};
    const player = newPlayer(userName, password);
    setPlayers([...getPlayers(),player]);
    return {result: "player added", player};
}

export function getPlayer(userName, password){
    const player = getPlayerByUserName(userName);
    if(!player)     return {result: "user name not found"};
    if(player.password === password)
        return {result: "player found", player};
    
    return {result: "password incorrect"};
}

function setScore(scores){ 
    window.localStorage.setItem("scores", JSON.stringify(scores));
}
function getScores(){ 
    return JSON.parse(window.localStorage.getItem("scores"));
}

export function updateScore(userName, newScore){
    const player = getPlayerByUserName(userName);
    if(!player) return {result: "user name not found"};
    const updatedScore = (player.games * player.score + newScore)/(player.games+1);
    player.score = updatedScore;
    const players = getPlayers();
    players[getPlayerIndexByUserName(userName)] = player;
    setPlayers(players);
}

export function getTopScores(){
    let players = getPlayers();
    players.sort((p1, p2) => (p1.score - p2.score));
    if(players.length<3)    players = [...players, defP1, defP2, defP3];
    return players.slice(0,3);
}




export function doSomething(){
    
}