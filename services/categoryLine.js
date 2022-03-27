import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function categoryLine() {
    const logoURL = `${apiUrl()}category-line/`
    return   axios.get(`${logoURL}`).then((response) => response);

}