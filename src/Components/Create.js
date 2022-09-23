import supabase from "../config/subabaseclient"
import { useState } from "react";
import '../index.css'


import Form1 from "./form1";
import Avatar from "./form2";
import NavBar from "./NavBar";

const Create = () => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [formError,setFormError] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !description){
      setFormError('Fill it all')
      return
    }
const {data,error} = await supabase
.from('Profile')
.insert([{title,description}])
if(error){
  console.log(error)
  setFormError('Fill it all')
}
if(data){
  console.log(data)
  setFormError(null)

}
  }

  return (  
<>
<NavBar />

<hr></hr>

<Form1 setDescription={setDescription} description={description} title={title} handleSubmit={handleSubmit} setTitle={setTitle} formError={formError} setFormError={setFormError}/>


{formError && <p className="error">{formError}</p>}
</>

  );
}
 
export default Create;

