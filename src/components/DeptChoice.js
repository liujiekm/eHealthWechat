import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

import { Menu } from 'antd-mobile';
import 'whatwg-fetch';

import Global from '../Global'

const data = [
  {
    value: '1',
    label: '全部分类',
    isLeaf: true,
  }, {
    value: '2',
    label: '美食',
    children: [
      {
        label: '全部美食',
        value: '22',
        
      },
      {
        label: '中餐',
        value: '21',
      }, {
        label: '火锅',
        value: '23',
      }, {
        label: '自助餐',
        value: '24',
      }, {
        label: '快餐',
        value: '25',
      }, {
        label: '小吃',
        value: '26',
      }, {
        label: '面包甜点',
        value: '27',
      }, {
        label: '生鲜水果',
        value: '28',
      }, {
        label: '面食',
        value: '29',
      }, {
        label: '休闲食品',
        value: '210',
      }, {
        label: '日韩料理',
        value: '211',
      }, {
        label: '咖啡',
        value: '212',
      }, {
        label: '粤菜',
        value: '213',
      }],
  }, {
    value: '3',
    label: '超市',
    children: [
      {
        label: '全部超市',
        value: '31',
      }, {
        label: '超市',
        value: '32',
        
      }, {
        label: '便利店',
        value: '33',
      }, {
        label: '个人护理',
        value: '34',
      }],
  }, {
    value: '4',
    label: '丽人',
    children: [
      {
        label: '全部丽人',
        value: '41',
      }, {
        label: '美发',
        value: '42',
        
      }, {
        label: '美容',
        value: '43',
      }, {
        label: '美甲',
        value: '44',
      }],
  }, {
    value: '5',
    label: '休闲娱乐',
    children: [
      {
        label: '全部休闲娱乐',
        value: '51',
      }, {
        label: '咖啡',
        value: '52',
        
      }, {
        label: '酒吧',
        value: '53',
      }, {
        label: '足疗养生洗浴',
        value: '54',
      }, {
        label: '保健/休闲养生',
        value: '55',
      }, {
        label: '棋牌休闲',
        value: '56',
      }, {
        label: 'KTV及其它',
        value: '57',
      }],
  },
];


class DeptChoce extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            Dept:[]
        }
    }

    onChange(value) {
        let label = '';
        data.forEach((el) => {
        if (el.value === value[0]) {
            if (el.isLeaf) {
            label = el.label;
            } else {
            el.children.forEach((el2) => {
                if (el2.value === value[1]) {
                label = el2.label;
                }
            });
            }
        }
        });
        console.log(`选中了 ${label},${value}`);
  }


    componentDidMount()
    {
        //获取科室信息
        fetch('/api/Hospital/AllDep/1')
        .then(Global.checkStatus)
        .then(Global.parseJSON)
        .then(function(json) {
            console.info(json);
            // that.setState({Dept:[]});
        }).catch(function(error) {
            console.log('request failed', error)
        })

        
    }
    render(){
        
        
        return (
             <Menu data={data} onChange={this.onChange.bind(this)} />
        )
    }


}

DeptChoce.contextTypes = {
  router: React.PropTypes.object.isRequired
}


module.exports = DeptChoce;