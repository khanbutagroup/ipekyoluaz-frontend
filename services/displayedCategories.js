import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function displayedCategories() {
    const logoURL = `${apiUrl()}displayed-categories/`
    return   axios.get(`${logoURL}`).then((response) => response);
}