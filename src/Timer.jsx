import React from "react";

var interval;
class Timer extends React.Component{
    constructor(){
      super();
      this.state = {
        time : new Date().toLocaleTimeString()
      }
    }
    componentDidMount(){
        interval = setInterval(() => {
        this.setState({
          time : new Date().toLocaleTimeString()
        })
      } ,1000)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")

        if(this.state.time === "12:32:25 AM"){
            clearInterval(interval);
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render(){
      
      return(
        <h2 className='timer'>
          it's {this.state.time}
        </h2>
      )
    }
  }

export default Timer;