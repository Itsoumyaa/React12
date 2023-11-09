// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alerts from './components/Alerts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000); // 3000= 3 sec

  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showalert("dark mode enabled", "success");
      document.title = 'TextUtils - Dark Mode'; // jab bhi change kroge mode toh side ki joh main title h on the web page jaha pr pehele react app likha hua tha like on the extreme top or basically BRAVE ka jaha pr new tab dikhata h waha pr likha hua aa jaega
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (

    <> <Router>
      <Navbar title="iCoder" mode={mode} togglemode={togglemode} />
      <Alerts alert={alert} />
      

      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform showalert={showalert} heading="Enter the text" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
