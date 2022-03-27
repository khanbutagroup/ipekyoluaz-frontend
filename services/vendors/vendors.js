import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function vendors() {
    const vendorsURL = `${apiUrl()}auth/vendors/`
    return  axios.get(`${vendorsURL}`).then((response) => response);
}

