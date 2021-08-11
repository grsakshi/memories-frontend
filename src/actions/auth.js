import * as api from "../api/index";
import { AuthActionTypes } from "../constants/actionTypes";

export const signin = (formData, history) => async(dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: AuthActionTypes.AUTH, data});

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        
        dispatch({ type: AuthActionTypes.AUTH, data });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};
