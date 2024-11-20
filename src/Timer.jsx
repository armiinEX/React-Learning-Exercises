import React from "react";

var interval;

class number extends React.Component{
    constructor(){
      super();
      this.state = {
        number : 0
      }
    }

    setStart =()=>{
        interval = setInterval(() => {
            this.setState({
              number : this.state.number + 1
            })
          } ,1000)
    }
    
    // componentDidMount(){
    //     console.log("componentDidMount");

    //     interval = setInterval(() => {
    //     this.setState({
    //       number : this.state.number + 1
    //     })
    //   } ,1000)
    // }

    setStop =()=>{
        clearInterval(interval);
    }

    // componentDidUpdate(){
    //     console.log("componentDidUpdate")
        
    //     if(this.state.number === 0){
    //         clearInterval(interval);
    //     }
    // }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render(){
      
      return(
        <>
            <h2 className='timer'>
                it's {this.state.number}
            </h2>

            <button onClick={this.props.x}>
                click me
            </button>

            <button onClick={this.setStart}>
                START
            </button>

            <button onClick={this.setStop}>
                STOP
            </button>


        </>
      )
    }
  }

export default number;