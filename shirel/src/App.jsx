import { useState } from 'react'
// import { Browser }
import Todos from './conpponents/Todos';
import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import LogIn from './conpponents/LogIn';
import SignUp from './conpponents/SingUp';
import Posts from './conpponents/Posts';
import Info from './conpponents/Info';
import Albums from './conpponents/Albums';
import Layout from './conpponents/Layout';
// import Todos from './conpponents/Todos';




function App() {
  const[isConnected,setIsConnected] = useState(false);


  return (
    <>
          {/* <Todos userId="5"/> */}

    <Router>
      {!isConnected ?(
        <>
        <Routes>
          <Route path= "*" element={<LogIn isConnected={isConnected} setIsConnected={setIsConnected}/>}/>
          <Route path="/SignUp" element={<SignUp isConnected={isConnected} setIsConnected={setIsConnected}/>}/>
        </Routes>
        </>
      ) : (
        <>
        <NavLink>
        <Routes>
        <Route path="/" element={<Layout isConnected={isConnected} setIsConnected={setIsConnected} />}>
                                <Route path="info" element={<Info />} />
                                <Route path="albums" element={<Albums />} />
                                <Route path="todos" element={<Todos />} />
                                <Route path="posts" element={<Posts />} />
                                <Route path="*" element={<Info />} />
                            </Route>
          </Routes>
          </NavLink>
          </>
      )}
    </Router>



    </>
  );
}

export default App;