/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import * as types from './types';

// HOME PRODUCT FILTER
const productReducer = (state =[], { type,payload }) => {
    switch (type) {
        case types.HOMEPRODUCTFILTER:
            return payload ;
        default:
            return state;
    }
};
// ADD TO CARD DATA
const addToCardDataReducer = (state =[], { type,payload }) => {
    switch (type) {
        case types.ADDTOCARDDATA:
            return payload ;
        default:
            return state;
    }
};

// COUNTER REDUCER
const counterReducer = (state =[], { type,payload }) => {

    switch (type) {
        case types.INCREMENT:
            return payload ;
        default:
            return state;
    }
};

// QUOTE OF THE DAY
const quoteOfTheDayReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case types.SET_QUOTE:
            return {
                quote: payload,
                author: payload,
            };
        default:
            return state;
    }
};

// COMBINED REDUCERS
const reducers = {
    counter: counterReducer,
    quoteOfTheDay: quoteOfTheDayReducer,

    addToCardData:addToCardDataReducer,
    productHome:productReducer
};

export default combineReducers(reducers);