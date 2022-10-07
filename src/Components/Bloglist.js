import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import supabase from "../config/subabaseclient";
const Bloglist = ({smothie,inputed, onDelete}) => {
   const handleDelete = async () =>{
      const {data,error} = await supabase
      .from('trying')
      .delete()
      .eq('id',smothie.id)
   
   if(error){
      console.log(error)

   }
   if(data){
      console.log(data)
      onDelete(smothie.id)
   }
}
    


    
    return ( 
       <div className= 'blog-output'>
         

<div>
<img src={`https://sgjdsfuxwunsjdjebgmq.supabase.co/storage/v1/object/public/${smothie.avatar_url}`} alt='hope' />
</div>
<h2 className=" sm:text-center">{smothie.breed}</h2>
<hr className='secondHr'/>
    
      <p className="md:text-center"> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{smothie.description}</p>
      <div className="buttons">
        
         <Link to= {'/' + smothie.id} >

         <i className="material-icons">edit</i>
        
         </Link>
         <i onClick={handleDelete} className='material-icons'>delete</i>
         </div>  
        </div>
      

        


  
     );
}
 
export default Bloglist;