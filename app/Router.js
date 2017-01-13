import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers'
import HeaderCon from './containers/HeaderCon'
import Index from './routes/Index'
import Detail from './routes/Detail'
import User from './routes/User'

const body =  document.getElementsByTagName('body')[0]
body.style.backgroundColor = '#f2f3f5'
// body.style.paddingTop = '55px'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
	console.log(process.env.NODE_ENV)
    middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={HeaderCon}>
                <IndexRoute component={Index} />
                <Route path="good" component={Index} />
                <Route path="share" component={Index} />
                <Route path="ask" component={Index} />
                <Route path="job" component={Index} />
                <Route path="detail/:id" component={Detail} />
                <Route path="user/:name" component={User} />
            </Route>
        </Router>
    </Provider>
    
), document.getElementById('content'))

