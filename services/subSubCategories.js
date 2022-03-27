import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function subSubCategories() {
    const logoURL = `${apiUrl()}sub-sub-categories/`
    return   axios.get(`${logoURL}`).then((response) => response);
}