import React from 'react'
import "./Login.css"
import slackLogo from "./Slack-Icon.svg";
import { useState } from 'react';

let userfile = {
  email: "",
  password: "",
};
let errors = [];

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

 
console.log(email, password);

const [user, setUser] = useState(userfile);
const [error, setError] = useState(errors);

const checkForm = () => {
  if (isFormEmpty()) {
    setError((error) => error.concat({ message: "Please Fill all fields" }));
    return false;
  } 
  return true;
};

const isFormEmpty = () => {
  return (
    !email.length ||
    !password.length
  );
  //if false(where form is filled up) then should return false
};



const formaterrors = () => {
  return error.map((error, index) => <p key={index}>{error.message}</p>);
};

const onSubmit = (e) => {
  e.preventDefault();
  setError(() => []);
  setUser((currentState) => {
    let currentUser = { ...currentState };
    currentUser.username = username;
    currentUser.email = email;
    currentUser.password = password;
    currentUser.confirmpassword = confirmpassword;

    return currentUser;
  });

  if (checkForm()) {
  }
};
console.log(user);

  return (
    <>
      <div className="login">
        <div>
          <img src={slackLogo} alt=" slack logo" />
        </div>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />

          <button type="submit">Login</button>
        </form>
        {error.length > 0 && (
          <div>
            <h4>Errors</h4>
            {formaterrors()}
          </div>
        )}
        <div>
          {/* <p>
            Already a User?
            <link to="/login"> Login</link>
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Login