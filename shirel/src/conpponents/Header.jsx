import { NavLink } from "react-router-dom";

export default function Header({isConnected, setIsConnected}){
    const logout = () =>{
        setIsConnected(false)
        localStorage.clear();
    }
    return(
        <>
        <div>
            <p>heyyy {JSON.parse(localStorage.getItem("currentUser")).userName} , how are you today?</p>
            <button onClick={logout}>log out</button>

            <nav>
                <NavLink to="info">info</NavLink>
                <NavLink to="posts">posts</NavLink>
                <NavLink to="album">album</NavLink>
                <NavLink to="todo">todo</NavLink>
            </nav>
        </div>
        </>
    )
}