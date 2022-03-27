import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function deleteProduct(productId) {
    const deleteProductURL = `${apiUrl()}product/`
    let  token = localStorage.getItem('username')
    return   axios.delete(`${deleteProductURL + productId}`,{ 'headers': { 'Authorization': `Bearer ${token}` }}).then((response) => response);

}