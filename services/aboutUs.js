import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function aboutUs() {
    const aboutUsURL = `${apiUrl()}about-us/`
    return  axios.get(`${aboutUsURL}`).then((response) => response);
}

