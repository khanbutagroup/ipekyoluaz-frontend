import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function subByCategory(id) {
    const subByCategoryURL = `${apiUrl()}sub-by-category/` + id
    return   axios.get(`${subByCategoryURL}`).then((response) => response);
}