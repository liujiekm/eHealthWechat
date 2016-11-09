import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import Routes from './route/index'

import './content/css/style.css'


render(<Routes history={browserHistory} />,
document.getElementById('app'));