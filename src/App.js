import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
      setAlert({        
        msg : message,
        typ : type
      }

      )
      setTimeout(() => {
        setAlert(null)
      }, 1200);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }
  return (
    <>
         {/* <Router>  */}
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/> 
    <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about"> 
                  <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm heading="Enter The Text To Analyze Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
            {/* </Route>
          </Switch> 
        <About />  */}
    </div>
        {/* </Router> */}
    </> 
  );
}
export default App;