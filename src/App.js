import React, { useMemo, useState } from 'react'
import './App.css'
const App = () => {
  const [color,setcolor] = useState("")
  const [count,setcount] = useState(0)

  const delay=(num)=>{
    console.log("delay function is running");
    for(let i = 0;i<100000;i++){
    }
    return num;

  }
  
  // delay(0)
  useMemo(()=>delay(color),[count]);
    return (
    <div>
      <h1 style={{'color':color}}>Color Change</h1>
      <button onClick={()=>color == "red" ? setcolor("blue") : setcolor("green")}>Test Color</button>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={()=>setcount(count-1)}>-</button>
    </div>
  )
}

export default App
