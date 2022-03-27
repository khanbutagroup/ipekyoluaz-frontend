import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function getUserWishlist(userId) {
    const userIdURL = `${apiUrl()}wishlist/${userId} `
    return   axios.get(`${userIdURL}`).then((response) => response);

}