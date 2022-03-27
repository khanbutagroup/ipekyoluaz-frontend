import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function phoneNumber() {
    const phoneNumberURL = `${apiUrl()}number/`
    return   axios.get(`${phoneNumberURL}`).then((response) => response);
}