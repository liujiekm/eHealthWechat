import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'


import {Flex, NavBar, Icon,List,WingBlank,Grid } from 'antd-mobile';


class Home extends Component{




    handleNav(el, index)
    {
        this.context.router.push(el.nav);
    }



    render(){


        const data1 = Array.from(new Array(4)).map((_val, i) => ({
            img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
            text: `名字${i}`,
            subText:'describe',
            nav:'Choice'
        }));


        return (
                <Flex direction="column">

                    <div className='top-bar'>
                        <span style={{ display: 'inline',left: '40%',position: 'relative'}}>医院主页</span>
                        <Icon key='0' type="star-o" style={{'float':'right', paddingRight: '10px'}}/>
                    </div>

                    <img src='../src/content/img/untitled.png' width='100%' height='200px' />

                    <div className='hospital-indicate'>
                        <div className='hospital-main'>
                            <span>上海市第一人民医院</span>
                            <span>三级甲等</span>
                        </div>
                         <div className='hospital-focus'>
                            <span style={{paddingLeft: '20px'}}>8</span>
                            <span>关注</span>
                        </div>
                    </div>
                    
                    <div className='hospital-address'>
                        <Icon type="environment-o" style={{paddingLeft:'10px'}}/>
                         <span>   上海市虹桥区海宁路100号</span>
                        <Icon type="phone" style={{'float':'right',paddingRight:'10px'}}/>
                    </div>

                   <div className='function-menu'>
                        <Grid data={data1} columnNum={2} hasLine={true} onClick={this.handleNav.bind(this)}
                            renderItem={(dataItem, index) => (
                            <div style={{ margin: '10px', background: '#f7f7f7', textAlign: 'center' }}>
                                <img src={dataItem.img} style={{ width: '20%', margin: '5px',float:'left' }} />
                                <div style={{ width: '54%', padding: '8px',float:'left' }}>
                                    <span>{dataItem.text}</span>
                                    <span>{dataItem.subText}</span>
                                </div>
                                
                            </div>
                            )}
                        />

                   </div>
                   <WingBlank size="lg"/>

                   <div className='hospital-info'>
                    <span style={{color:'green'}}>医院简介:</span>
                    <span>上海交通大学附属第一人民医院原名公济医院</span>
                    <br/>
                    <span style={{color:'green'}}>公共交通:</span>
                    <span>地铁9号线</span>
                   </div>
                </Flex>
        )
    }



}




Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}



module.exports = Home