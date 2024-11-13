import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout({ isConnected, setIsConnected }) {
  return (
    <>
      <Header isConnected={isConnected} setIsConnected={setIsConnected} />
      <Outlet />
      {/* <Footer/> */}
    </>
  );
}

export default Layout;
