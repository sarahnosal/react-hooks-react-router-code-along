import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",  
}

function NavBar() {
  return (
    <div>
      <NavLink
        exact to='/'
        style={linkStyles}
        activeStyle={{
          background: 'darkblue',
        }}
      >Home</NavLink>
      <NavLink
        exact to='/about'
        style={linkStyles}
        activeStyle={{
          background: 'darkblue',
        }}>About</NavLink>
      <NavLink
        exact to='/login'
        style={linkStyles}
        activeStyle={{
          background: 'darkblue'
        }}>Login</NavLink>
      <NavLink
        exact to='/signup'
        style={linkStyles}
        activeStyle={{
          background: 'darkblue'
        }}>Sign Up</NavLink>
    </div>
  )
}
function SignUp() {
  return (
    <div>
      <h1>Signup Here!</h1>
      <form>
        <div>
          <input type='text' value='name' placeholder='Full Name Here' />
        </div>
        <div>
          <input type='text' value='race' placeholder='Desired Race to Run' />
        </div>
        <input type='submit' value='Submit Form' />
      </form>
    </div>
  )
}
function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>This is my about compomnent!</h1>
    </div>
  )

}
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type='text' name='username' placeholder='Username' />
        </div>
        <div>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>, 
  document.getElementById("root"));
