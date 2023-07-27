
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
/* import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; */

function App() {
  const[alert,setalert]=useState(null)
  const showalert=(message,type)=>
  {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
      
    }, 1500);
  
  }

  const[mode,setmode]=useState('light')
  const togglemode=()=>
  {
    if(mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert('dark mode has been enabled','success')
    }
    else
    {
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert('light mode has been enabled','success')
    }
  }
  return (
<>

    <Navbar title="Text Counter" about="About Us" mode={mode} togglemode={togglemode}>
</Navbar>
<Alert alert={alert}></Alert>
<div className='container my-3'>
 <TextForm showalert={showalert} heading="Enter the text to Analyze" mode={mode}/> 
</div>

{/* <Router>
<>

<Navbar title="Text Counter" about="about" mode={mode} togglemode={togglemode}>
</Navbar>
<Alert alert={alert}></Alert>
<div className='container my-3'>
<Switch>
       
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showalert={showalert} heading="Enter the text to Analyze" mode={mode}/> 
          </Route>
        </Switch>
</div>
</></Router> */}
</>
  );
}

export default App;
