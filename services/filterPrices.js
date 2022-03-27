import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function filterPrices() {
    const productFilterURL = `${apiUrl()}filter-prices/`
    return   axios.get(`${productFilterURL}`).then((response) => response);
}