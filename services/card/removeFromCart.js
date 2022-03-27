import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function removeFromCart(data) {
    const userProductsURL = `${apiUrl()}remove-from-cart/`
    let  token = localStorage.getItem('username')
    return  axios.post(`${userProductsURL}`,data, { 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);
}