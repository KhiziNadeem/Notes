//import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    // <Router>
    <>
    {/* <Switch>
      <Route exact path="/"> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm heading="Enter your text to Analyze" mode={mode}/>
        </div>
      {/* </Route> */}

      {/* <Route path="/About"> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3">
          <About/> */}
          {/* </div> */}
          {/* </Route>
      </Switch> */}
      
    </>
    // </Router>
  );
}

export default App;
