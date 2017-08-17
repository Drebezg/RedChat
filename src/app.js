import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Chat from './chat'

const usersState = ['@vatson_john', '@alex_1999', '@clair']
const reducer = (state=usersState, action) => {
    if(action.type === 'ADD_NEW_USER') {
        console.log(action)
        return state.concat('@newuser_' + Date.now())
    }
    return state
}
const store = createStore(reducer)
window.store = store
// store.subscribe(() => {
//     console.error('store has been changed')
// })

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Chat />
                </div>
            </Provider>

        )
    }
}
