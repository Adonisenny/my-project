import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {useEffect, useState} from 'react'
import './App.css'
import './index.css'
import Bloglist from './Components/Bloglist'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Create from './Components/Create';
import supabase from './config/subabaseclient';
import Profile from './Components/form2';
import Update from './Components/Update';

      function App({url}) {

const [inputed,setInputed] =useState('')


  
  return (
     <Router>
     <>
      <NavBar inputed={inputed} setInputed={setInputed}/>
      
     
     
      
     <Switch>
      <Route exact path='/'>
    <Home  inputed={inputed} setInputed={setInputed}  />
    </Route>
    <Route exact path='/create'>
    <Create />
    </Route>
    <Route  path='/form2'>
    <Profile />
    </Route>
    <Route path='/:id'>
    <Update />
    </Route>
    </Switch>
   
    
    
      
    </>
    </Router>
    
  );
}










export default App;
