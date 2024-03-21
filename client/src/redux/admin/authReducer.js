const initialState = {
    isAdminLoggedIn : false,
}

const authReducer = (state= initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                isAdminLoggedIn: true,
            };
        case 'LOGOUT':
            return{
                ...state,
                isAdminLoggedIn: false,
            };
        default:
            return state;        
    }
};

export default authReducer;