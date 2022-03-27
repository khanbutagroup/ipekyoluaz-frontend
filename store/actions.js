import * as types from './types';
import {login} from "../services/auth/login";

export const setQuote = (payload) => ({ type: types.SET_QUOTE, payload });

// GET QUOTE OF THE DAY
export const getQuote = (e) => (dispatch, getState) => {
    dispatch(setQuote({ quote: contents.quote, author: contents.author }));
};

// INCREMENT COUNTER BY 1
export const incrementCount = (e) => ({
    type: types.INCREMENT, payload:e });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });



//home product filter
export const homeProductFilter  = (e) => ({
    type: types.HOMEPRODUCTFILTER, payload:e });

//home product filter
export const addToCardMain = (e) => ({
    type: types.ADDTOCARDDATA, payload:e });