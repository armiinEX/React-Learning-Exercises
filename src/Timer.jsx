import React from "react";
import TimeList from "./TimeList";

var interval;

class number extends React.Component{
    constructor(){
      super();
      this.state = {
        hour:0,
        minute:0,
        secound:0,
        isStart:false
    }   
    }

    startInterval =()=>{
        if (this.state.isStart === false){
            this.setState({
                isStart: true
            })
            interval = setInterval(() => {
                this.setState({
                  secound : this.state.secound + 1
                })
                if (this.state.secound === 60){
                    this.setState({
                        secound: 0,
                        minute: this.state.minute + 1
                    })
                }
                if (this.state.minute === 60){
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1
                    })
                }
                } ,1000)
        }
    }

    stopInterval =()=>{
        this.setState({
            isStart: false
        })
        clearInterval(interval);
    }

    resetInterval =()=>{
        this.stopInterval();
        this.setState({
            secound: 0,
            minute: 0,
            hour: 0
        })
    }

    handelSaveTime =()=>{
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.secound;
        let newTime = `${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`
        this.props.setTimeArr([...this.props.timeArr, newTime])
    }
    
    render(){
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.secound;
      
      return(
        <div>
            <h2 className='timer' onClick={this.handelSaveTime}>
                it's {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
            </h2>

            <button className="m-3 p-3" onClick={this.props.handelSetTitle}>
                click me
            </button>
            
            <button className="m-3 p-3" onClick={this.resetInterval}>
                RESET
            </button>

            <button className="m-3 p-3" onClick={this.startInterval}>
                START
            </button>

            <button className="m-3 p-3" onClick={this.stopInterval}>
                STOP
            </button>

            <button className="m-3 p-3" onClick={this.props.handelSetLight} style={{background: this.props.light ? "black" : "white", color: this.props.light ? "white" : "black"}}>
                LIGHT
            </button>

            <TimeList>
                {this.props.timeArr}
            </TimeList>




        </div>
      )
    }
  }

export default number;