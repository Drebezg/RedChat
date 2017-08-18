const usersState = ['@vatson_john', '@alex_1999', '@clair']

const reducer = (state=usersState, action) => {
    if(action.type === 'ADD_NEW_USER') {
        return state.concat(action.username)
    }
    return state
}

export default reducer
