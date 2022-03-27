import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function  refresh(token) {
    const refreshURL = `${apiUrl()}auth/login/refresh/`
    return  axios.post(`${refreshURL}`,null, { 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);
}

