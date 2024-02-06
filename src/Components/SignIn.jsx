import React, { useState } from "react";
import "../App.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userName,
        password
      );
      const user = userCredential.user;
      console.log("Signin Success");
      console.log(user);
    } catch (err) {
      console.error(err);
      alert("Please fill correct username and password");
    }
  };

  return (
    <>
      <div className="loginPage">
        <div className="loginCard">
          <p>Login</p>
          <input
            type="email"
            
            className="inputField"
            placeholder="Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className="inputField"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signInUser} className="custom-button">Login</button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
