import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function  sliders() {
    const logoURL = `${apiUrl()}sliders/`
    return  axios.get(`${logoURL}`).then((response) => response);
}

