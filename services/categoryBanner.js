import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function categoryBanner() {
    const logoURL = `${apiUrl()}category-banner/`
    return   axios.get(`${logoURL}`).then((response) => response);

}