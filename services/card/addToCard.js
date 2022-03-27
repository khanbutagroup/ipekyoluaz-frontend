import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function addToCard(data) {
    const userProductsURL = `${apiUrl()}add-to-cart/`
    let  token = localStorage.getItem('username')
    return  axios.post(`${userProductsURL}`,data, { 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);
}