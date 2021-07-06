import React, {Component} from 'react';
import "./index.css"
import imgUrl2 from "../../../pictures/组 1@2x.png"
import imgUrl3 from "../../../pictures/图层 7@2x.png"
import imgUrl4 from "../../../pictures/图层 7 拷贝 2@2x.png"
interface Datatype{
    dateTime:number;
    flags:any;
}
interface Arr{
    [index:number]:number;
}
class Group extends Component<Datatype,Arr> {
    state={
        sumDate:this.props.dateTime,
        score:[100,200,300],
        flags:this.props.flags
    }

    render() {
        var score:Arr=[100,200,300];
        const flags=this.props
        return (
            <div>
                <img className="Group_main" src={imgUrl2} alt="组"/>
                <div className="Group_item1"><img src={imgUrl3} alt="图层71"/>
                </div><p className="Group_item1_text">+{score[0]}</p>
                <div className="Group_item2"><img src={imgUrl4} alt="图层72"/>
                </div><p className="Group_item2_text">+{this.state.score[1]}</p>
                <div className="Group_item3"><img src={imgUrl4} alt="图层73"/>
                </div><p className="Group_item3_text">+{this.state.score[2]}</p>
            </div>
        );
    }
}

export default Group;