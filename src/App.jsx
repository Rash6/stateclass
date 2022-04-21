
import './App.css';
import React from "react"
import { useState } from "react"

function App() {
  const [counter,setcounter]=useState(0)
  const handler=(value)=>{
    if(counter>=10 ){
      return
    }
    setcounter(counter+value)
  }
  const handlerS=(value)=>{
    if(counter===0 ){
      return
    }
    setcounter(counter+value)
    
  }
  if(counter>=10){
    return <h1>Ur crossing limit</h1>
  }
  const double=(value)=>{
    setcounter(counter*value)
  }
  return (
    <>
    <div className="App">
      <h1>counter</h1>
      <h1>{counter}</h1>
      <button  onClick={()=>{handler(1)}}>Add</button>
      <button onClick={()=>{handlerS(-1)}}>Sub</button>
      <button onClick={()=>{double(2)}}>Double</button>

    </div>
    <div className={counter%2===0?'green':'red'}>{counter}</div>
    </>
  );
}

export default App;
