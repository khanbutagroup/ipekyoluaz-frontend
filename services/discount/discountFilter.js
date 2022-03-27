import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function discountFilter(body) {
    const logoURL =`${apiUrl()}discounts/`
    return  axios.post(`${logoURL}`,body).then((response) => response);
}

