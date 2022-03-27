import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function productByUser(productId,body) {
    const productByUserURL = `${apiUrl()}product-by-user-id/`
    return   axios.post(`${productByUserURL + productId}/`,body).then((response) => response);

}