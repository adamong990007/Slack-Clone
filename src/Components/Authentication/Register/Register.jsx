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
const [username,setUsername] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [confirmpassword,setConfirmPassword] = useState('');

const [user,setUser] = useState(userfile);
const [error,setError] = useState(errors);



const InputHandler = (e)=>{
    setUser((currentState)=>{
        let currentUser = {...currentState};
        currentUser[e.target.name] = e.target.value;
        return currentUser;
    })
    console.log(user);

}


const checkForm =()=>{
    if(isFormEmpty()){
        setError((error)=>error.concat({message: "Please Fill all fields"}));
        return false;
    }else if(!checkPassword()){
        return false;
    }
    return true;
}

const isFormEmpty = ()=>{
    return !username.length || !email.length || !password.length || !confirmpassword.length
    //if false(where form is filled up) then should return false
} 


const checkPassword = ()=>{
    if(password.length < 8){
        console.log(password.length)
        setError((error)=>error.concat({message:"Password length must be greater than 8"}))
        return false;
    }else if(password !== confirmpassword){
        setError((error)=>error.concat({message: "Password does not match confirm password"}))
        console.log(password !== confirmpassword);
        return false;
    }
    return true;
}

const formaterrors = () =>{
    return error.map((error,index)=> <p key={index}>{error.message}</p>)
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
          type="text"
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