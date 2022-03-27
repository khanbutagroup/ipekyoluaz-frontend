import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function subCategories() {
    const logoURL = `${apiUrl()}sub-categories/`
    return   axios.get(`${logoURL}`).then((response) => response);
}