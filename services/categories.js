import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function categories() {
    const logoURL = `${apiUrl()}categories/`
       return  axios.get(`${logoURL}`).then((response) => response);
}

