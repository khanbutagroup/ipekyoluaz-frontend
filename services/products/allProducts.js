import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function allProducts(page,size) {
    let allProductsURL
    if (page,size){
         allProductsURL = `${apiUrl()}products/?p=${page}&page_size=${size}`
    } else {
         allProductsURL = `${apiUrl()}products/`
    }

    return   axios.get(`${allProductsURL}`).then((response) => response);

}