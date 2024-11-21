import React, { useState } from 'react';
import Timer from './Timer';
import Hello from './Hello';


const App =()=>{
  const[title, setTitle] = useState("سلام دوستان عزیز")
  const handelSetState =()=>{
    setTitle("به react خوش آمدید")
  }

  return (
    <div className="main">
      <Hello title={title}/>
      <Timer x={handelSetState}/>
    </div>
  );

}



// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             title : "سلام دوستان عزیز"
//         }
//     }

//     handelSetState =()=>{
//         this.setState({
//             title : "به react خوش آمدید"
//         })
//     }
//   render() {
//     return (
//       <div className="main">
//         <Hello title={this.state.title}/>
//         <Timer x={this.handelSetState}/>
//       </div>
//     );
//   }
// }

export default App;

