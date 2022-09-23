
const Bloglist = ({blogs,inputed}) => {
const    newElements =blogs.filter(blog => {
    if(inputed === ''){
        return blog;
    }else if(blog.Title.toLowerCase().includes(inputed.toLowerCase())){
            return blog
        }
    
}).map((blog) => (
        <div className=''key={blog.id}>
            <div  >
                        <img src={blog.Image} className='' alt ='dog'/>
                        </div>
<h2 className=" sm:text-center">{blog.Title}</h2>
<hr className='secondHr'/>
    
      <p className="md:text-center"> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{blog.Description}</p>  
        </div>
    
    )) 
    
    return ( 
        <div className=" text-center grid grid-cols-1 gap-4 md:grid-cols-3">
 
{newElements}


        </div>
       



    );

} 
export default Bloglist;

