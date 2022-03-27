import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function allAvenues() {
    const logoURL = `${apiUrl()}auth/avenues/`
    return   axios.get(`${logoURL}`).then((response) => response);

}