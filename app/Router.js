import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './app'

import Latest from './components/Latest'
import Hottest from './components/Hottest'

const body =  document.getElementById('content')
body.style.backgroundColor = '#f2f3f5'
body.style.paddingTop = '55px'
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Hottest}/>
            <Route path="/latest" component={Latest}/>
            <Route path="/nodelist" component={NodeList}/>
        </Route>
    </Router>
), document.getElementById('content'));