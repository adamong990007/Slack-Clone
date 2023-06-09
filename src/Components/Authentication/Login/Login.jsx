import React, { useCallback, useEffect } from 'react'
import "./Login.css"
import slackLogo from "./Slack-Icon.svg";
import { useState } from 'react';

const Login = (props) => {

const [user, setUser] = useState({
      email: "",
      password: ""
    });

const [error, setError] = useState("");
const [loginDetails, setLoginDetails] = useState(null);
const [loginData, setLoginData] = useState(null);

const signInSlack = async () =>{
  const response = await fetch("http://206.189.91.54/api/v1/auth/sign_in",{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)

  });
  if(response.status === 200){
    setError("Success");
    const token = {
      "access-token": response.headers.get("access-token"),
      client: response.headers.get("client"),
      expiry: response.headers.get("expiry"),
      uid: response.headers.get("uid"),
    };
    setLoginDetails(token);

    const data = await response.json();
    setLoginData(data);
    storeLoginDataAndDetails(token, data);
  }
} 

console.log(loginData,loginDetails);

const storeLoginDataAndDetails = (token, data)=>{
  localStorage.setItem("loginData",JSON.stringify(data));
  localStorage.setItem("loginDetails",JSON.stringify(token));
  props.passLoginData(data);
  props.passLoginDetails(token);
}

  const onSubmit = (e) => {
    e.preventDefault();
    signInSlack();
    


  };
  return (
    <div className="login">
      <div>
        <img src={slackLogo} alt=" slack logo" />
      </div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      {error.length > 0 && (
        <div>
          <h4>Errors</h4>
          {error}
        </div>
      )}
      <div>
        <p>Already a User?</p>
      </div>
    </div>
  );
}

export default Login