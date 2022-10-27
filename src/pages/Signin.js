import React, { useEffect } from "react";
import { clearJWT } from "../auth/authHelper";
import Login from "../components/Login";
import "./pageStyle.css";

export default function Signin({setIsVerified}) {
  useEffect(() => {
    clearJWT()
  })
  return (
    <div>
      <div className="home-container">
        <Login setIsVerified={setIsVerified}/>
      </div>
    </div>
  );
}
