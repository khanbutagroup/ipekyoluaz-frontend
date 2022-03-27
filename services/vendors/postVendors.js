import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function postVendors() {
    const postVendorsURL = `${apiUrl()}auth/vendors/`
    return  axios.post(`${postVendorsURL}`).then((response) => response);
}

