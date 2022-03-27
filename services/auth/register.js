import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function  register(article) {
    const registerURL = `${apiUrl()}auth/register/`
    return  axios.post(`${registerURL}`,article).then((response) => response);
}

