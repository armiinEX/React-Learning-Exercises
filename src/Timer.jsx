import React from "react";
import TimeList from "./TimeList";
import { TestContext } from "./testContext";

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

    static contextType = TestContext;

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
        this.context.setTimeArr([...this.context.timeArr, newTime])
    }
    
    render(){
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.secound;
      
      return(
        <div className="flex justify-center flex-col items-center">
            <h2 className='timer' onClick={this.handelSaveTime} style={{color: this.context}}>
                it's {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
            </h2>

            <div className="m-5 p-5">
                <button className="m-3 p-3" onClick={this.props.handelSetTitle} style={{background: this.props.light ? "black" : "white", color: this.props.light ? "white" : "black"}}>
                    click me
                </button>
                
                <button className="m-3 p-3" onClick={this.resetInterval} style={{background: this.props.light ? "black" : "white", color: this.props.light ? "white" : "black"}}>
                    RESET
                </button>

                <button className="m-3 p-3" onClick={this.startInterval} style={{background: this.props.light ? "black" : "white", color: this.props.light ? "white" : "black"}}>
                    START
                </button>

                <button className="m-3 p-3" onClick={this.stopInterval} style={{background: this.props.light ? "black" : "white", color: this.props.light ? "white" : "black"}}>
                    STOP
                </button>

                <button className="m-3 p-3" onClick={this.props.handelSetLight} style={{background: this.props.light ? "black" : "white", color: this.props.light ? "white" : "black"}}>
                    LIGHT
                </button>
            </div>

            <TimeList>
                {this.context.timeArr}
            </TimeList>

        </div>
      )
    }
  }

export default number;