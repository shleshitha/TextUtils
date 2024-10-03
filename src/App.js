// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// import About from './components/About';
function App() {
  const [mode,setMode]= useState('light');
  const [alert, setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  const changeMode=(idx)=>{
    if(idx===1){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("DarkMode has been enabled", "success");
    }
    else if(idx===2){
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been enabled", "success");
    }
    else if(idx===3){
      setMode("danger");
      document.body.style.backgroundColor='#F06543';
      showAlert("DangerMode has been enabled", "success");
    }
    else{
      setMode("warning");
      document.body.style.backgroundColor='#F4D35E';
      showAlert("WarningMode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} changeMode={changeMode}/>
    <Alert alert={alert} />
    <div className='container my-3'>
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />} />
      </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />
    </div> 
    {/* </Router> */}
    </>
  );
}

export default App;
