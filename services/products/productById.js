import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function productById(productId) {
    const userProductsURL =`${apiUrl()}products/`
    return  axios.get(`${userProductsURL+ productId}`).then((response) => response);
}