import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function subscribers(body) {
    const subscribersURL = `${apiUrl()}subscribers/`
    return   axios.post(`${subscribersURL}`,body).then((response) => response);
}