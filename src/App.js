import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

import { WhiteSpace, WingBlank, Flex, Carousel } from 'antd-mobile'



class App extends Component{
  getInitialState() {
    return {
      current: 2,
    };
  }

  beforeSlide(from, to) {
    console.log(`slide from ${from} to ${to}`);
  }

  slideTo(index) {
    console.log('slide to', index);
  }

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      selectedIndex: this.state.current,
      beforeChange: this.beforeSlide,
      afterChange: this.slideTo,
    };
    return (
      <div>
        <div className="pagination-container" >
          <WingBlank>
            <Carousel {...settings}>
              <Flex
                justify="center"
                className="flex-container-justify"
              >
                <h3>Carousel 1</h3>
              </Flex>
              <Flex
                justify="center"
                className="flex-container-justify"
              >
                <h3>Carousel 2</h3>
              </Flex>
              <Flex
                justify="center"
                className="flex-container-justify"
              >
                <h3>Carousel 3</h3>
              </Flex>
            </Carousel>
          </WingBlank>
          <WhiteSpace size="lg" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));