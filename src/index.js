import React from 'react';
import ReactDOM from 'react-dom/client';

class Timer extends React.Component{
  render(){
    return(
      <h2>
        it's {new Date().toLocaleTimeString()}
      </h2>
    )
  }
} 

class Hello extends React.Component{
  render(){
    return(
      <h1>hi friends</h1>
    )
  }
}

const tick = () => {
  const element = (
    <div>
      <Timer/>
      <Hello/>
    </div>
  );
  root.render(element);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
tick();
setInterval(tick, 1000);
