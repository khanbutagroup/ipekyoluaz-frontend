import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function allUserMessages() {
    const allUserMessagesURL = `${apiUrl()}user-messages/`
    return  axios.post(`${allUserMessagesURL}`).then((response) => response);
}

