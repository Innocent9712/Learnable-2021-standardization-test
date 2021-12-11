export const initialState = {
    user: {
        name: "John Doe",
        email: "chukwuemeka140@gmail.com",
        password: "",
        loggedIn: false
    },
    userTypes: [
        {
            type: "Talent Manager",
            status: true
        },
        {
            type: "Employee",
            status: false
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "auth/signIn":
            return {...state,user:{...state.user,email: action.payload.email,password: action.payload.password,loggedIn: true}}
        case "status/userType":
            const newUserTypes = []
            state.userTypes.map(userType =>{
                if (action.payload === state.userTypes.indexOf(userType)) {
                    userType.status = true
                } else {
                   userType.status = false
                }
                return newUserTypes.push(userType)
             } )
             console.log(newUserTypes)
             return ({...state, userTypes: newUserTypes})
        case "auth/logout":
            return {...initialState}
        case "auth/changePassword":
            return {...state,user:{...state.user,password: action.payload}}
        default:
            return state;
            
    }
}