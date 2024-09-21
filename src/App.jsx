
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, { useState } from 'react';



function App() {
  //darkMode
  const [mode, setmode] = useState('light');
  //changing mode;
  function changemode(){
    if(mode === "dark"){
      setmode( "light");
      document.body.style.backgroundColor ='white';
      document.body.style.color='black';
      showAlert("Hooray!!! Enjoy Light Mode", "success");
      document.title ="Light Mode"
    }else{
      setmode('dark');
      document.body.style.backgroundColor = '#082122';
      document.body.style.color='white';
      showAlert("Hooray!!! Enjoy Dark Mode", "success");
      document.title="Dark Mode";
    } 
  }

  //alert
  const [alert, setalert] = useState(null);

  const showAlert = (msg,type)=>{
    setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  //const  router = createBrowserRouter([
    //{path:"/",
    //element: (
    
    //)
  //},
    //{path:'/about',
    //element: (
    //  <>
    //<Navbar title="Feroz's" first ="Home" showAlert={showAlert}
    //second="About" mode={mode} changemode={changemode}/>
    //<Alert alert={alert}/>
    //<About/>
    //</>
  //)}
//]);

  return (
    //<RouterProvider router={router} />
    <>
      <Navbar title="Feroz's" first ="Home" showAlert={showAlert}
      second="About" mode={mode} changemode={changemode}/>
      <Alert alert={alert}/>
      <div className='container'>
        <TextBox text="" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}
export default App;
