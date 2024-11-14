import { NavLink } from "react-router-dom";

export default function Header({isConnected, setIsConnected}){
    const logout = () =>{
        setIsConnected(false)
        localStorage.clear();
    }
    return(
        <>
        <div className="Header" >
            <p>heyyy {JSON.parse(localStorage.getItem("currentUser")).userName} , how are you today?</p>
            <button onClick={logout}>log out</button>

            <nav>
                <div id="nav">
                <NavLink to="Info" className={"nav"}>info</NavLink>
                <NavLink to="posts" className={"nav"}>posts</NavLink>
                <NavLink to="albums" className={"nav"}>album</NavLink>
                <NavLink to="todos" className={"nav"}>todo</NavLink>
                </div>
            </nav>
        </div>
        </>
    )
}