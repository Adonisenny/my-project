import { useState } from "react";

const TipCalculator = () => {
    const [inputed,setInputed] =useState(0)
    const [count,setCount] =useState(1)
    
//if count is not greater than one return;    
let inputed2 = Number(inputed * 0.1) 
let Total =  (Number(inputed) + Number(inputed2)) * Number(count) 

    const handleChange = ((e) => {
        setInputed(e.target.value)
        e.preventDefault();
    })
    const handleClick =(e) => {
        setCount(prev => prev + 1)
        e.preventDefault();
    }
    const handleClick2 =(e) => {
        setCount(prev => prev-1)
        e.preventDefault();
    }

  
    
    
    
    return ( 
<div>
    <form  className="bg-slate-600 mt-36">
        <h3>Price</h3>
        <input type='text' className="calculator"
            value={Number(inputed)}
            onChange={handleChange}

/>




<br />
<br />
<h3>Tip</h3>
 <input className="calculator"
    type='text'
    value={inputed2}
    onChange={handleChange}
    
></input>
<br/>
<h3>Number of Persons</h3>
<div className="btn">

<button disabled= {count < 2 ? true: false} onClick={handleClick2}>-</button>

<p className="para">{count}</p>
<button   onClick={handleClick}>+</button>

</div>


<h3>Total</h3>
<div className="lastinput">
<input className="calculator3"
    type='text'
    value={Total}
    onChange={handleChange}
></input>
</div>
</form>


</div>



     );
}
 
export default TipCalculator;