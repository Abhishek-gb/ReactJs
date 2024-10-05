import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container Login">
      <div className="row"> 
          <h1>Login Form</h1>
          <form action="">
          <label htmlFor="user">User Name</label>
          <input type="text" id="user"/>
          <br></br>
          <label htmlFor="pwd">Possword</label>
          <input type="possword" id="pwd" /><br></br>
          <button>Login</button>
          </form>
        </div> 
    </div>
  );
}
export default Login;
