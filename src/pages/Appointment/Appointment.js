import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import { Icon} from 'antd-mobile';

import DeptChoice from '../../components/DeptChoice'




class Appointment extends Component{
    render(){

        return (

            <div>
                <div className='top-bar'>
                    
                    <span style={{ width: '100%',textAlign: 'center',display: 'block'}}>
                        <Icon type="environment-o" />
                        上海市第一人民医院
                    </span>
                </div>

                <DeptChoice />
            </div>
        )
    }
}


module.exports = Appointment;