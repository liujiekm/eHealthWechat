/*
    专家选择界面
 */

import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import { Card, WhiteSpace } from 'antd-mobile'
import DoctorChoiceItem from './DoctorChoiceItem'
import _ from 'lodash'

class DoctorChoice extends Component{

    constructor(props)
    {
        super(props)
        this.state={

            doctors:[
                {
                    name:'',
                    face:'',
                    title:'',
                    dept:'',
                    hospital:'',
                    expertIn:'',
                    operation:''
                },
                {

                }
            ]
        }
    }


    handleOperation() //点击预约、挂号、在线诊疗之后的处理逻辑
    {
        //导航到具体的预约、挂号、在线诊疗页面
        this.context.router.push('');
    }


    componentDidMount(){
        
        //获取科室下医生信息
        fetch('/api/Hospital/AllDep/1')
        .then(Global.checkStatus)
        .then(Global.parseJSON)
        .then(function(json) {
            
            that.setState({doctors:json});
        }).catch(function(error) {
            console.log('request failed', error)
        })
    }


    render(){

        var items = [];
       
        _(this.state.doctors).forEach(function(doctor) {
            items.push(<DoctorChoiceItem {...doctor}/>);
        })

        return (
            <div>
                {itmes}
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

