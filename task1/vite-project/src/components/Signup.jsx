import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="container Signup">
    <div className="row"> 
        <h1>Signup Form</h1>
        <form action="">
        <label htmlFor="user">User Name</label>
        <input type="text" id="user"/>
        <br></br>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"/>
        <br></br>
        <label htmlFor="pwd">Possword</label>
        <input type="possword" id="pwd" /><br></br>
        <label htmlFor="pwd">Confirm Possword</label>
        <input type="possword" id="pwd" /><br></br>
        <button>Sign up</button>
        </form>
      </div> 
  </div>
  )
}
export default Signup