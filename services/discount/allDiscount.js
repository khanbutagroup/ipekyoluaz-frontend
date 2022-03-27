import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function allDiscount() {
    const logoURL =`${apiUrl()}discounts/`
    return  axios.get(`${logoURL}`).then((response) => response);
}

