export const FETCH_LOGIN_COMPLETE = 'FETCH_LOGIN_COMPLETE';


export const handleLoginRedux = (data) => {
    return {
        type: FETCH_LOGIN_COMPLETE,
        payload: data
    };
};

