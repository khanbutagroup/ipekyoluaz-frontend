import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function  logo() {
    const partnersURL = `${apiUrl()}logo/`
    return  axios.get(`${partnersURL}`).then((response) => response);
}

