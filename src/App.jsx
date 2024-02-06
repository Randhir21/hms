import { useState,useEffect } from "react";

import "./App.css";
import Header from "./Components/Header";
import NavDrawer from "./Components/NavDrawer";
import { Outlet } from "react-router-dom";
import SignIn from "./Components/SignIn";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
const auth=getAuth(app);
function App() {
  const [isSideDrawerOpen, setSideDrawerOpen] = useState(true);
  const [user,setUser] = useState(null)
  useEffect(() => {
    
    onAuthStateChanged(auth,(user) => {
      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
    })
  }, []);

 
  const toggleSideDrawer = () => {
    setSideDrawerOpen(!isSideDrawerOpen);
  };
  if(!user){
    return <SignIn />
    
  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header onMenuClick={toggleSideDrawer} />
        <div style={{ display: "flex" }}>
          <NavDrawer isOpen={isSideDrawerOpen} onClose={toggleSideDrawer} />
          <div style={{padding:"20px"}}>
          <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
