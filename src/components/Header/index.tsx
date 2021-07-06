import React, {Component} from 'react';
import imgUrl from '../../pictures/提交图片@2x.png'
import './index.css'
class Header extends Component {
    state={
        text_left:"每日下拉连签领积分 抽好礼",
        text_right:"我的积分：",
        integral:29999
    }
    render() {
        const {text_left,text_right,integral}=this.state
        return (
            <div className="Header_main">
                <img className="background_image" src={imgUrl} alt="提交图片"/>
                <div className="content_left">{text_left}</div>
                <div className="content_right">{text_right}{integral}</div>
            </div>
        );
    }
}

export default Header;