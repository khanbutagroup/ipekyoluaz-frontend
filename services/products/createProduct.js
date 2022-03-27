import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function createProduct(article) {
    const createProductURL = `${apiUrl()}product/`
    return   axios.post(`${createProductURL}`,article).then((response) => response);

}