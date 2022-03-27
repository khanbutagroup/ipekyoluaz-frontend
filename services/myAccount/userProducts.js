import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function userProducts() {
    const userProductsURL =`${apiUrl()}product-by-user/`
    let  token = localStorage.getItem('username')
    return  axios.get(`${userProductsURL}`, { 'headers': { 'Authorization': `Bearer ${token}` } }
   ).then((response) => response);
}

