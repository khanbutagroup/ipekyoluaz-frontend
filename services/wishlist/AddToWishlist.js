import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function addToWishlist(data) {
    const userIdURL = `${apiUrl()}add-to-wishlist/ `
    return   axios.post(`${userIdURL}`,data).then((response) => response);

}