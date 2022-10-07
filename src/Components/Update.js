import { useParams } from "react-router-dom/cjs/react-router-dom.min"; 


import { useState } from "react";
import { useEffect } from "react";
import supabase from "../config/subabaseclient";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Update = () => {
    const {id} = useParams()
    const history = useHistory()
    const[breed,setBreed] =useState('')
const[description,setDescription] = useState('')
const [image,setImage] = useState(null)
const [formError,setFormError] = useState('')
const handleSubmit = async (e) => {
    e.preventDefault()

if(!breed || !description){
        setFormError('fill it all')
    return

}
const {data,error} = await supabase
.from('trying')
.update({breed,description})
.eq('id',id)
if (error){
setFormError('fill it all')
console.log(error)
}
if(data) {
    console.log(data)
    history.push('/')
    setFormError(null)
}

}
useEffect(() => {
const fetchSmoothies = async () => {
    const {data,error} = await supabase
    .from('trying')
    .select()
    .eq('id',id)
    .single()
    if(error){
        history('/',{replace:true})
    }
    if(data){
        setBreed(data.breed)
        setDescription(data.description)
        setImage(data.avatar_url)
    
    }
}
fetchSmoothies()

},[id,history])
    return (
        <div>
{ <form className='createForm' onSubmit={handleSubmit} >

<label htmlFor="title"> Breed</label>
      <input 
        type="text" 
        id="title"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />

      <label htmlFor="description">Description:</label>
      <input 
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        accept='image/png,image/jpeg'
      />



<button className="buts">Update Form</button>
</form> }

        </div>
      );
}
 
export default Update;