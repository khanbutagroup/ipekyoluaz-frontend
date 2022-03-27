import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function removeFromWishlist(data) {
    const userIdURL = `${apiUrl()}remove-from-wishlist/`
    return   axios.post(`${userIdURL}`,data).then((response) => response);

}