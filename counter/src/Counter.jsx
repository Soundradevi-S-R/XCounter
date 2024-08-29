import React,{useState} from "react";

function Counter(){

    let [count,setCount]= useState(0);

    const updateCount=(e)=>{
        if(e.target.name === "increment"){
            setCount((prevCount)=>prevCount+1);
        }else{
            setCount((prevCount)=>prevCount-1);
        }
        
    }

    return (
        <div style={{marginLeft:"30px"}}>
        <h1>Counter App</h1>
        <p>Count:  {count}</p>
        <button name="increment" onClick={updateCount} style={{width:"100px", padding:"10px"}}>Increment</button>
        <button name="decrement" onClick={updateCount} style={{width:"100px", padding:"10px"}}>Decrement</button>
        </div>
      );
}
export default Counter;