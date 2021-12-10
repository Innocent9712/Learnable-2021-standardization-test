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
            return {...state,user:{...state.user,...action.payload,loggedIn: true}}
        // case "status/userType":
        //     const newUserTypes = state.userTypes.map(userType=>(
        //         if (state.userTypes.indexOf(userType) === action.payload) {
        //             userType.status = true
        //         } else {
        //             userType.status = false
        //         }
        //     ))
        default:
            return state;
            
    }
}