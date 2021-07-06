import React, {Component} from 'react';
import Group from "./Group";
import "./index.css"
import {withRouter,RouteComponentProps} from 'react-router-dom'

class Footer extends Component<RouteComponentProps> {
    state={
        sucStatus:false,
        dateTime:1,
        flags:[{id:1,isSign:false},{id:2,isSign:false},{id:3,isSign:false}]
    }
    componentDidMount() {
       const {flags}=this.state
       const newflags= flags.map( obj => {
          if(obj.id<this.state.dateTime){
              return {...obj,isSign:true}
          }else{
              return obj
          }
       })
       this.setState({flags:newflags})
    }
    changeStatus=()=>{
        const {flags,sucStatus ,dateTime}=this.state
        let newdateTime=dateTime+1
        const newflags= flags.map( obj => {
            if(obj.id<newdateTime){
                return {...obj,isSign:true}
            }else{
                return obj
            }
        })
        if(newdateTime>3){
            newdateTime=0
        }
        this.setState({sucStatus:!sucStatus,dateTime:newdateTime,flags:newflags})
    }
    lottery=()=>{
        //this.location.history.push()
        console.log(this.props);
        this.props.history.push('/lottery')
    }
    render() {
        const {dateTime,flags}=this.state
        return (
            <div className="Footer_main">
                <Group dateTime={dateTime} flags={flags}/>
                  <button className="Footer_lotterybtn" onClick={this.lottery}>
                        <p className="Footer_lotterybtn_font">立即抽奖</p>
                    </button>

                <div className="Footer_sucStatus">{this.state.sucStatus?"已完成":"未完成"}</div>
                <button onClick={this.changeStatus} className="Footer_signbtn">
                    <span className="Footer_signbtn_text">点我签到 </span></button>
                <div className="Footer_sumDate">连签第{dateTime}天</div>
            </div>
        );
    }
}

export default withRouter(Footer)