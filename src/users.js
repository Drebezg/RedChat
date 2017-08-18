import React, {Component} from 'react'
import faker from 'faker'

export default class Users extends Component {
    render() {
        const rndUsername = `@${faker.internet.userName().toLowerCase()}`
        return (
            <div className="users">
                <h3 className="users__title">Online users:</h3>
                <ul>
                    {this.props.users.map(u => {
                        return <li key={u}>{u}</li>
                    })}
                </ul>
                <button onClick={() => this.props.addNewUser(rndUsername)}>
                    Add new User
                </button>
            </div>
        )
    }
}
