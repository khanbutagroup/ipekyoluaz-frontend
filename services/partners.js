import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function  partners() {
    const partnersURL = `${apiUrl()}partners/`
    return  axios.get(`${partnersURL}`).then((response) => response);
}

