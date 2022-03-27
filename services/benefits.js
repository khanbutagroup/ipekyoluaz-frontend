import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function benefits() {
    const logoURL = `${apiUrl()}benefits/`
    return   axios.get(`${logoURL}`).then((response) => response);

}