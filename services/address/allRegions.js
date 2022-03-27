import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function allRegions() {
    const logoURL = `${apiUrl()}auth/regions/`
    return   axios.get(`${logoURL}`).then((response) => response);

}