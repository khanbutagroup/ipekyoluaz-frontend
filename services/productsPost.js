import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function  productsPost(body) {
    const productsPost = `${apiUrl()}products/`
    return  axios.post(`${productsPost}`,body).then((response) => response);
}

