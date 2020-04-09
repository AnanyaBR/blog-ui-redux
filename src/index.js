import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configuresStore'
import {Provider} from 'react-redux'
import { startGetUsers } from './actions/usersAction'
import {startGetPosts} from './actions/postsAction'
import {startGetComments} from './actions/commentsAction'


const store = configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

//handle page reloads
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())

const ele =(
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'))