import {useState} from 'react'
const Header = ()=>{
    const [num , setNum] = useState(20)
    function counter()
    {  
        let i = num;
        i = i+1;
        setNum(i);
    }
    return(
       <>
        <h2>this is header elemet</h2>
        <p>this is the value of num {num}</p>
        <button onClick = {counter} >change value</button>
          
       </>
    )
}
export default Header
