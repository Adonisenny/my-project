import Bloglist from "./Bloglist";

import NavBar from "./NavBar";

const Home = ({inputed,setInputed,blogs}) => {
    return ( 
        <div>
    <NavBar inputed={inputed} setInputed={setInputed}/>
    <h2 className='hidden md:block'>Gallery</h2>
    <hr className='bg-slate-600'></hr>
    <br />
    {blogs &&<Bloglist blogs={blogs} inputed={inputed}/>}
        </div>
     );
}
 
export default Home;