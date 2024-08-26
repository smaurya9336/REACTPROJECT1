import { useState } from "react";

function init(){
    console.log("init was executed");
    return Math.random();
}
export default function Counter(){
    const [count, setCount] = useState(init);
    console.log("component was re-rendered");
   
   let inCount =() =>{
    setCount((currCount) =>{
        return currCount + 1;
    });

   }
    return(
        <>
        <h3> Count= {count} </h3>
        <button onClick={inCount}>Increase Count</button>
        </>
    );
}