/*
    专家选择界面
 */

import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import { Card, WhiteSpace } from 'antd-mobile'

class DoctorChoice extends Component{

    constructor(props)
    {
        super(props)
    }


    handleOperation() //点击预约、挂号、在线诊疗之后的处理逻辑
    {
        //导航到具体的预约、挂号、在线诊疗页面
        this.context.router.push('');
    }


    componentDidMount(){
        
    }


    render(){

        return (
            <div>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="这是 title"
                        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<Button size="large" inline onClick={this.handleOperation.bing(this)}></Button>}
                    />
                    <Card.Body>
                        <div>这是卡片内容</div>
                    </Card.Body>
                    <Card.Footer content="这是卡尾" extra={<div>这是尾部介绍</div>} />
                </Card>

            </div>
        )
    }


}



DoctorChoice.propTypes={
    optType:PropTypes.string.isRequired //操作类型：挂号、预约、在线诊疗
}


DeptChoce.contextTypes = {
  router: React.PropTypes.object.isRequired
}



module.exports = DoctorChoice;

