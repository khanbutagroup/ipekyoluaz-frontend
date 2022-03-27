import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function updateProduct(productId) {
    const updateProductURL = `${apiUrl()}product/`
    return   axios.patch(`${updateProductURL + productId}`).then((response) => response);

}