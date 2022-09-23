import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = ({inputed,setInputed}) => {
    const [hamburgersOpen,sethambugersOpen] =useState(false)
    const handletoggling = () => {
        sethambugersOpen(prev => !prev)

    }
    const mystyle = {
        display: hamburgersOpen ? 'flex':'none' 
    }
    return ( 

<nav className="relative container mx-auto p-6" >
    <div className="flex items-center justify-between">

    <div className=' flex items-left md:block text-2xl ml-6'>DogBreeders! </div>
    
    
    
    
    
        
    <div className ='hidden md:flex space-x-6 pt-3 '>
    <Link to="/" className="hover:text-darkGrayishBlue p-1 px-4 pt-3 text-white bg-slate-600 rounded-full baseline text-xs">Home</Link>
    <a href="bbdb"  className="hover:text-darkGrayishBlue p-1 px-4 pt-3 text-white bg-slate-600 rounded-full baseline text-xs">Gallery</a>
<a href="bbd"  className="hover:text-darkGrayishBlue p-1 px-4 pt-3 text-white bg-slate-600 rounded-full baseline text-xs">New Blog</a>
<Link to ="/create"  className="hover:text-darkGrayishBlue p-1 px-4 pt-3 text-white bg-slate-600 rounded-full baseline text-xs">Add Image</Link>
    
    <form className="max-w-sm">
        <input onChange={(e)=> setInputed(e.target.value)}
        value={inputed} 
        placeholder='Search via breed...' className="appearance-none text-1xl bg-transparent border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none "></input>
        </form>
    </div>
    

    <button className=" block hamburger md:hidden " onClick={handletoggling}>
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
         


    </button>
    </div>
    <div className=" md:hidden">
        <div  style= {mystyle} id='menu' className=" ml-64 menu absolute  flex-col items-center hidden self-end  py-6 px-3 mt-10 space-y-3 font-bold bg-black text-white sm:w-48
        sm:self-center left-6 right-6  drop-shadow-md ">
            <Link to='/' className="hover:bg-sky-700 hover:p-2" >Home</Link>
            <Link to='/' className="hover:bg-sky-700 hover:p-2" >Gallery</Link>
            <Link to='/' className="hover:bg-sky-700 hover:p-2">New Blog</Link>
            <Link to='/create' className="hover:bg-sky-700 hover:p-2">Add Image</Link>

        </div>

    </div>
    </nav>

     );
}
 
export default NavBar;