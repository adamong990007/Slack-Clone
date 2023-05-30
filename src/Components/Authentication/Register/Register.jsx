import React, { useEffect, useState } from 'react'
import "./Register.css"
import slackLogo from './Slack-Icon.svg';

let userfile = {
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
};
let errors =[];

const Register = () => {
const [username,setUsername] = useState(null);
const [email,setEmail] = useState(null);
const [password,setPassword] = useState(null);
const [confirmpassword,setConfirmPassword] = useState(null);

const [user,setUser] = useState(userfile);
const [error,setError] = useState(errors);



const InputHandler = (e)=>{
    setUser((currenState)=>{
        let currentUser = {...currentState};
        currentUser[e.target.username] = username;
        return currentUser;
    })

}

const checkForm =()=>{
    if(isFormEmpty()){
        setError((error)=>error.concat({message: "Please Fill all fields"}));
        return false;
    }else if(!checkPassword()){
        setError((error)=>error.concat({message: "Given Password Invalid"}));
        return false;
    }
    return true;
}

const isFormEmpty = ()=>{
    return !username.length || !email.length || !password.length || !confirmpassword.length
} 

const checkPassword = ()=>{
    if(password.length < 8){
        console.log(password.length)
        return false;
    }else if(password !== confirmpassword){
        console.log(password !== confirmpassword);
        return false;
    }
    return true;
}

const formaterrors = () =>{
    return error.map((error,index)=><p key={index}>{error.message}</p>)
}

const onSubmit = (e) =>{
    e.preventDefault();
    setError(()=>[]);
    if(checkForm()){
    }
}

  return (
    <div className="register">
      <div>
        <img src={slackLogo} alt=" slack logo" />
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="User Name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmpassword}
          placeholder="Confirm Password"
        />
        <button type='submit'>Submit</button>
      </form>
      {error.length >0 &&<div>
        <h4>Errors</h4>
        {formaterrors()}
      </div>}
    </div>
  );
}

export default Register;