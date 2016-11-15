/*
    医生详情组件，包含排班信息，可以进行 预约、挂号、在线问诊操作
 */

import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import { Result } from 'antd-mobile'


class DoctorDetail extends Component{

    render(){

        return (

            <div>
                <Result
                    imgUrl="https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png"
                    title="支付成功"
                    message={<div><div style={{ fontSize: '0.72rem', color: '#000', lineHeight: 1 }}>998.00</div><del>1098元</del></div>}
                />


                <div>
                </div>

                <div>
                </div>


                <div>
                </div>


                <div>
                </div>


                <div>
                </div>





            </div>

        )
    }


}



module.exports = DoctorDetail;

