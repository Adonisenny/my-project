import  useState  from "react"
import '../index.css'

import supabase from "../config/subabaseclient"

const Form1 = ({title,description,setTitle,formError,setDescription,handleSubmit}) => {
  
  
    return (
    
    <form  className='createForm' onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <input 
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

<button className="buts" >add dogs</button>    

      </form>
    
    
  )
}

export default Form1