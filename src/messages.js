import React, {Component} from 'react'

export default class Messages extends Component {
    render() {
        return (
            <div className="chat">
                <p className="message">
                    <span className="message__data">09/02 12:22</span>
                    <span className="message__author">Evgenia: </span>
                    <span>Paphos message!</span>
                </p>
                <p className="message">
                    <span className="message__data">09/02 12:25</span>
                    <span className="message__author">Inga: </span>
                    <span>Alloha!</span>
                </p>
                <input type="text" className="chat__input"></input>
            </div>
        )
    }
}
