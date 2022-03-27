import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function socilaLinks() {
    const socilaLinksURL = `${apiUrl()}socila-links`
    return   axios.get(`${socilaLinksURL}`).then((response) => response);
}