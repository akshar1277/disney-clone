import React from 'react';
import firebase from 'firebase/compat/app';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  Link
} from "react-router-dom";
import Detail from './components/Detail';


function App() {
  //this is for check if user is logged in or not
  var user1 = firebase.auth().currentUser;
  var name;
  if (user1 != null) {
    name = user1.displayName;
    console.log(name + "--------------------");
 }


  return (
    <div className="App">
      <Router>
      <Header />
       
        <Routes>
          
         
                
                <Route path="/" element={<Login/>} />
              
              <Route path="/home" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
          
         
            
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
