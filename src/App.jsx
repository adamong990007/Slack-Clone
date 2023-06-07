import { useState } from 'react'
import './App.css'
import Register from './Components/Authentication/Register/Register';
import Login from './Components/Authentication/Login/Login'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0)
const [loginDetails, setLoginDetails] = useState(null);
const [loginData, setLoginData] = useState(null);
   console.log(loginDetails, loginData);


  return (
    <div>
      <Register />
      <Login
        passLoginDetails={(loginDetails) => setLoginDetails(loginDetails)}
        passLoginData={(loginData) => setLoginData(loginData)}
      />
      {/* <NavigationBar /> */}
   

      {/* <Router>
        <Routes>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App
