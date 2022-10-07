import'../index.css'
import '../App.css'
import Bloglist from "./Bloglist";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


import { useState } from "react";
import { useEffect } from "react";
import  supabase  from "../config/subabaseclient"

const Home = ({inputed,setInputed,fUrl}) => {
    

    const [smoothies, setSmoothies] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    const [orderBy, setOrderBy] = useState('created_at')
    const history = useHistory()
    const handleDelete = (id) => {
      setSmoothies(prevSmothies => {
        return smoothies.filter(sm => sm.id !== id)
    })
    }
    useEffect(() => {
        const fetchSmoothies = async () => {
          const { data, error } = await supabase
            .from('trying')
            .select()
            .order(orderBy, {ascending: false})
          
          if (error) {
            setFetchError('Could not fetch the smoothies')
            setSmoothies(null)
          }
          if (data) {
            setSmoothies(data)
            setFetchError(null)
            history.push('/')
          }
        }
    
        fetchSmoothies()
    
      }, [orderBy])
    
    return ( 
        <div>
  
  {smoothies && (

  <div >
    {/* order by button */}

   <div className="text-center grid grid-cols-1 gap-4 md:grid-cols-3 ">
   
   {smoothies.filter(smothie => {
if(inputed === '') {
return smothie
}else if(smothie.breed.toLowerCase().includes(inputed.toLowerCase())){
return smothie
}
   }).map(smothie => (
    
<Bloglist
key={smothie.id} 
smothie={smothie}
inputed={inputed}
onDelete={handleDelete}
 />
   )) }

   </div>
  </div>)}
    </div>
  )
}
 
export default Home;