import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function faq() {
    const faqURL = `${apiUrl()}faq/`
    return  axios.get(`${faqURL}`).then((response) => response);
}

