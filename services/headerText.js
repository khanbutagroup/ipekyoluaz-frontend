import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function  headerText() {
    const partnersURL = `${apiUrl()}header-text/`
    return  axios.get(`${partnersURL}`).then((response) => response);
}

