import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import Hello from './Hello';
import TimeList from './TimeList';
import { TestContext } from './testContext';


const App =()=>{
  const [title, setTitle] = useState("سلام دوستان عزیز");
  const [light, setLight] = useState(false);
  const [timeArr, setTimeArr] = useState(["00:05:45"])
  
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
    <TestContext.Provider value={{
      timeArr : timeArr,
      setTimeArr : setTimeArr
      }}>
      <div className="main" style={{background: light ? "white" : "black"}}>
        <Hello title={title}/>
        <Timer light={light}
        handelSetTitle={handelSetTitle}
        handelSetLight={handelSetLight}
        />
        
      </div>
    // </TestContext.Provider>
  );

}

export default App;

