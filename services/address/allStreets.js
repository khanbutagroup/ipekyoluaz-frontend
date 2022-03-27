import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function allStreets() {
    const logoURL = `${apiUrl()}auth/streets/`
    return   axios.get(`${logoURL}`).then((response) => response);

}