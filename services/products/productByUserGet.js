import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function productByUserGet(p,s,productId) {
    const productByUserURL = `${apiUrl()}product-by-user-id/`
    return   axios.get(`${productByUserURL + productId}/`).then((response) => response);

}