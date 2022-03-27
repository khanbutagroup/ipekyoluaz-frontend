import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function  verifyNumber(article) {
    const verifyNumberURL = `${apiUrl()}auth/verify-number/`
    return  axios.post(`${verifyNumberURL}`,article).then((response) => response);
}

