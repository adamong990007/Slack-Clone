import React, { useEffect, useState } from 'react'
import "./Register.css"
import slackLogo from './Slack-Icon.svg';
import { useNavigate } from "react-router-dom";


// import firebase from '../../../server/firebase';


const Register = () => {
let userfile = {
  // username: "",
  email: "",
  password: "",
  confirmpassword: "",
};
let errors = [];


const [username,setUsername] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [confirmpassword,setConfirmPassword] = useState('');

console.log(username,email,password,confirmpassword)

const [user,setUser] = useState(userfile);
const [error,setError] = useState(errors);


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

const formatErrors = () =>{
    return error.map((error,index)=> <p key={index}>{error.message}</p>)
}

const onSubmit = (e) =>{
    e.preventDefault();
    setError(()=>[]);
    setUser((currentState) => {
      let currentUser = { ...currentState };
      // currentUser.username = username;
      currentUser.email = email;
      currentUser.password = password;
      currentUser.confirmpassword = confirmpassword;

      return currentUser;
    });


    if(checkForm()){
      register(user)

    }
}
console.log(user);
//Note: Refer to Part 4 of YT for firebase stuff. 

const register = async(user) =>{
  console.log(user);
  const response = await fetch("http://206.189.91.54/api/v1/auth/",{
    method: "POST",
    headers: {
		"Content-Type": "application/json",
	},
  body: JSON.stringify(user)
  });
  if(response.status === 200){
    Navigate("/");
  }else{
    const data = await response.json();
    const error = data.errors['full_messages'][0];
    setError(error);
  }
}




  return (
    <div className="register">
      <div>
        <img src={slackLogo} alt=" slack logo" />
      </div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="User Name"
        />
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
        <input
          name="confirmpassword"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmpassword}
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>
      {error.length > 0 && (
        <div>
          <h4>Errors</h4>
          {formatErrors()}
        </div>
      )}
      <div>
        <p>
          Already a User?
        </p>
      </div>
    </div>
  );
}

export default Register;