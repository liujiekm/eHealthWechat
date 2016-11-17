/*
    医生选择界面，单个医生的呈现项目
 */



import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import { Card, WhiteSpace } from 'antd-mobile'


class DoctorChoiceItem extends Component{
    render(){

        let{name,face,title,dept,hospital,expertIn,operation} = this.props;
        return (
            <div>
                <WhiteSpace size="lg" />
                <Card full>
                <Card.Header
                    title={
                        <div>
                            <span>{name}</span>
                            <span>{title} {dept}</span>
                            <span>{hospital}</span>
                        </div>
                    }
                    thumb={face}
                    extra={<Button size="small" inline>{operation=='register'?'挂号':operation=='appointment'?'预约':'在线诊疗'}</Button>}
                />
                <Card.Body>
                    <div>{expertIn}</div>
                </Card.Body>
                <Card.Footer content="" extra={<div></div>} />
                </Card>
            </div>



        )
    }


}

DoctorChoiceItem.propTypes={
    name:PropTypes.string.isRequired,//医生姓名
    face:PropTypes.string.isRequired,//医生照片地址
    title:PropTypes.string.isRequired,//医生职称
    dept:PropTypes.string.isRequired,//医生科室
    hospital:PropTypes.string.isRequired,//医院名称
    expertIn:PropTypes.string.isRequired,//医生擅长
    operation:PropTypes.oneOf(['register', 'appointment','online'])//操作行为：挂号、预约、在线诊疗

}




module.exports = DoctorChoiceItem;