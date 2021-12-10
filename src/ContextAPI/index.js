export const initialState = {
    user: {
        name: "John Doe",
        email: "",
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
        // case "status/userType":
        //     const newUserTypes = state.userTypes.map(userType=>(
        //         if (state.userTypes.indexOf(userType) === action.payload) {
        //             userType.status = true
        //         } else {
        //             userType.status = false
        //         }
        //     ))
        case "status/userType":
            const newUserTypes = []
            state.userTypes.map(userType =>{
                // action.payload === state.userTypes.indexOf(userType) ?
                // userType.status = true :
                // userType.status = false
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
        default:
            return state;
            
    }
}