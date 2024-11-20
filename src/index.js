import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      time : new Date().toLocaleTimeString()
    }
  }
  render(){
    setInterval(() => {
      this.setState({
        time : new Date().toLocaleTimeString()
      })
    } ,1000)
    return(
      <h2 className='timer'>
        it's {this.state.time}
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
    <div className='main'>
      <Hello/>
      <Timer/>
    </div>
  );
  root.render(element);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
tick();
setInterval(tick, 1000);
