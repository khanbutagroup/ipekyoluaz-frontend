import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function cartByUserID(userId) {
    const cartByUserIDURL = `${apiUrl()}user-cart/${userId}`
    return   axios.get(`${cartByUserIDURL}`).then((response) => response);
   

}