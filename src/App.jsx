import React, { Component } from 'react';
import Timer from './Timer';
import Hello from './Hello';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            title : "سلام دوستان عزیز"
        }
    }

    handelSetState =()=>{
        this.setState({
            title : "به react خوش آمدید"
        })
    }
  render() {
    return (
      <div className="main">
        <Hello title={this.state.title}/>
        <Timer x={this.handelSetState}/>
      </div>
    );
  }
}

export default App;



// import React from "react";
// import Timer from './Timer';
// import Hello from './Hello';
// import ReactDOM from 'react-dom/client';

// const App = () => {
//     const element = (
//       <div className='main'>
//         <Hello/>
//         <Timer/>
//       </div>
//     );
//     root.render(element);
//   };
//   const root = ReactDOM.createRoot(document.getElementById('root'));

// export default App;