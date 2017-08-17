import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const usersState = ['@vatson_john', '@alex_1999', '@clair']
const reducer = (state=usersState, action) => {
    return state
}
const store = createStore(reducer)
window.store = store

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    App Start
                </div>
            </Provider>

        )
    }
}
