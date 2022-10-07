import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import  supabase  from "../config/subabaseclient"
import Home from './Home'
  const Profile = () => {
 const [image,setImage] =useState(null)
const[avatarUrl,setAvatarUrl] =useState('')
const [message,setMessage] =useState('')
const[fUrl,setFUrl] = useState(null)
const [fetchError,setFetchError] = useState(null)

const[breed,setBreed] =useState('')
const[description,setDescription] = useState('')
const history = useHistory()





    
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      if(!breed || !description){
        console.log('fill in all the fields')
      }
    
      let avatarUrl = ''
      
      if(image){
        const {data,error} = await supabase.storage.from('avatars').upload(`${Date.now()}_${image.name}`,image)
        
        if(error){
          console.log(error)
        }
        if(data){
setAvatarUrl(data.Key)
avatarUrl = data.Key
        }
      }
const {data,error} =await supabase.from('trying').upsert({
  
  breed:breed,
  description:description,
  avatar_url : avatarUrl
})
if(error){
  console.log(error)
}

if(data){
setMessage('profile updaated')
console.log('updated')
history.push('/')
}

    }
    
     useEffect(()=> {
      const fetchUrl = async () =>{
        const {data,error} = await supabase
      .from('trying')
      .select()
    if(error){
setFetchError('error plenty')
    }
      if(data){
        
        
  setFUrl(data)
 

  
  setFetchError(null)
  
      }
      
    
    }
      fetchUrl()
      

     },[]) 
  
     
      
    return ( 

<>

<p>{message}</p>
  
  <form className='createForm' onSubmit={handleSubmit} >

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


<input 
type='file'

onChange={e => setImage(e.target.files[0])}
/>
<button className="buts">submit</button>
  </form>

</>
     );
  }
   
  export default Profile;