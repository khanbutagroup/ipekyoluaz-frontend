import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function productFilter(body) {
    const productFilterURL = `${apiUrl()}product-filter/`
    return   axios.post(`${productFilterURL}`,body).then((response) => response);
}