import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function filtersBySubsub(selectedOptionListId) {
    const logoURL = `${apiUrl()}filters-by-subsub/${selectedOptionListId}`
    return   axios.get(`${logoURL}`).then((response) => response);
}