import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {useEffect, useState} from 'react'
import './App.css'
import './index.css'
import Bloglist from './Components/Bloglist'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Create from './Components/Create';
import TipCalculator from './Components/TipCalculator';
      function App() {
const [blogs,setBlogs] =useState(null);
const [inputed,setInputed] =useState('')
const[pending,setIsPending] =useState(true)

useEffect(() => {
fetch('http://localhost:8080/blogs').then(res => {
 return res.json( )
})
.then(data => {

  setBlogs(data)
  setIsPending(false)
})
},[])
  
//blogs.filter(blog =>blog.includes(value) )


  
  return (
     <Router>
     <div>
      
     {pending && <p>loading</p>}
     <Switch>
      <Route exact path='/'>
    <Home  inputed={inputed} setInputed={setInputed} blogs={blogs}  />
    </Route>
    <Route exact path='/create'>
    <Create />
    </Route>
    </Switch>
   
    
    
      
    </div>
    </Router>
    
  );
}










export default App;
