import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <Login />
        </div>
        <div className="col-lg-6 col-sm-12">
          <Signup />
        </div>
      </div>
    </div>
    </>
  );
}
