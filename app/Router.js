import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './app'
import Index from './routes/Index'
import Detail from './routes/Detail'
import { getThenShow } from './actions'

const body =  document.getElementById('content')
body.style.backgroundColor = '#f2f3f5'
// body.style.paddingTop = '55px'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
	console.log(process.env.NODE_ENV)
    middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
store.dispatch(getThenShow())

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="/detail/:id" component={Detail} />
            </Route>
            
        </Router>
    </Provider>
    
), document.getElementById('content'))

