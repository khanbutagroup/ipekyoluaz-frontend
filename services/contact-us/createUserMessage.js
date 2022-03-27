import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function createUserMessage(article) {
    const createUserMessageURL = `${apiUrl()}user-messages/`
    return  axios.post(`${createUserMessageURL}`,article).then((response) => response);
}

