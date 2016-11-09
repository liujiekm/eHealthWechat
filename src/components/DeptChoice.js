import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

import { Tabs, WhiteSpace } from 'antd-mobile'

const TabPane = Tabs.TabPane

class DeptChoce extends Component{


    callback(key){

        console.log(key);


    }



    render(){
        
        
        return (
            <div className='dept-choice'>
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} tabBarPosition='left'> 
                    <TabPane tab="选项卡一" key="1">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100 }}>
                        选项卡一内容
                        </div>
                    </TabPane>
                    <TabPane tab="选项卡二" key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100 }}>
                        选项卡二内容
                        </div>
                    </TabPane>
                    <TabPane tab="选项卡三" key="3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100 }}>
                        选项卡三内容
                        </div>
                    </TabPane>
                </Tabs>
                <WhiteSpace />
            </div>


        )
    }


}


module.exports = DeptChoce;