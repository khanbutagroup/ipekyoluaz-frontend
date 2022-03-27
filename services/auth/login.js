import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function  login(article) {
    const loginURL = `${apiUrl()}auth/login/`
    return  axios.post(`${loginURL}`,article).then((response) => response);
}

