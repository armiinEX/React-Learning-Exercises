import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import Hello from './Hello';


const App =()=>{
  const [title, setTitle] = useState("سلام دوستان عزیز");
  const [light, setLight] = useState(false);
  
  const handelSetTitle =()=>{
    setTitle("به react خوش آمدید")
  }
  const handelSetLight =()=>{
    setLight(!light)
  }
  useEffect(()=>{
    console.log("useEffect")
  },[light])

  return (
    <div className="main" style={{background: light ? "white" : "black"}}>
      <Hello title={title}/>
      <Timer light={light} handelSetTitle={handelSetTitle} handelSetLight={handelSetLight}/>
    </div>
  );

}

export default App;

