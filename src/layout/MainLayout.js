import React, { Component, PropTypes } from 'react'



class MainLayout extends Component{



    render(){


        return (

            <div id='root'>
                {this.props.children}
            </div>


        )
    }
}

module.exports = MainLayout;