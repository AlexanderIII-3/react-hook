
import { FETCH_LOGIN_COMPLETE } from '../action/userAction';
const INITIAL_STATE = {
    //login
    account: {
        acess_token: '',
        refresh_token: '',
        username: '',
        image: '',
        role: ''
    },
    isLogin: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOGIN_COMPLETE:
            let data = action?.payload?.DT
            return {
                ...state, account: {
                    acess_token: data?.access_token,
                    refresh_token: data?.refresh_token,
                    username: data?.username,
                    image: data?.image,
                    role: data?.role
                },
                isLogin: true

            };


        default: return state;
    }
};

export default userReducer;