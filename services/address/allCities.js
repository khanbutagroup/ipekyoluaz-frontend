import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function allCities() {
    const logoURL = `${apiUrl()}auth/cities/`
    return   axios.get(`${logoURL}`).then((response) => response);

}