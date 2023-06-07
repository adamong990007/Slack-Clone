import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Register from './Components/Authentication/Register/Register';
import Login from './Components/Authentication/Login/Login'
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
      <Login/>

      {/* <Router>
        <Routes>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App
