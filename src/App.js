
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#032d4e';
      showAlert('Dark mode has been enabled','success');
      document.title="TextUtils - Dark Mode";
      // setInterval(() =>{
      //   document.title="TextUtils is amazing mode";
      // },2000);
      // setInterval(() =>{
      //   document.title="Install TextUtils Now";
      // },1500);
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>   
    {/* <Navbar title='Blog' aboutText='About us'/> */}
    {/* <Router> */}
    
    <Navbar aboutText='About us' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    {/* <Routes> */}
    <div className="container my-3">
    <Textform showAlert={showAlert} heading='Enter the text to analyze below' mode={mode}/>
  
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading='Enter the text to analyze below' mode={mode}/>}/> */}
         
    </div>
    {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
