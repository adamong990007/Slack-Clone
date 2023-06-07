import React from 'react'
import { useState } from 'react'
import "./Register.css";
import slackLogo from "./Slack-Icon.svg";


const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        passwordConfirm:''
    });

    console.log(user);
    const [error, setError] = useState("");

    const register = async (user)=>{

        const response = await fetch("http://206.189.91.54/api/v1/auth",{
        method: "POST",
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
        });

        if(response.status === 200){
            Navigate("/");
            setError(response.status);
        }else{
            const data = await response.json();
            const error = data.errors.full_messages;
            setError(error);
        }
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        setError("");

        if(user.password !== user.passwordConfirm){
            setError("Passwords do not match");
        }
        if(!user.password.length||!user.email.length||!user.passwordConfirm.length){
            setError("Please fill in all fields");
        }
        if(!user.password > 6 || !user.passwordConfirm > 6){
            setError("Password must be greater than 6");
        }
        else{
            register(user);
        }
        
        }


  return (
    <div className="register">
      <div>
        <img src={slackLogo} alt=" slack logo" />
      </div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          onChange={(e) => setUser({...user, email: e.target.value})}
          value={user.email}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          onChange={(e) => setUser({...user, password: e.target.value})}
          value={user.password}
          placeholder="Password"
        />
        <input
          name="confirmpassword"
          type="password"
          onChange={(e) => setUser({...user, passwordConfirm: e.target.value})}
          value={user.passwordConfirm}
          placeholder="Confirm Password"
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
        <p>
          Already a User?
        </p>
      </div>
    </div>
  )
}

export default Register