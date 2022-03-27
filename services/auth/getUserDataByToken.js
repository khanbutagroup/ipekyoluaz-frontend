import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function getUserDataByToken() {
    const getUserDataByToken = `${apiUrl()}auth/user-data/`
    let  token = localStorage.getItem('username')
    return  axios.post(`${getUserDataByToken}`, {},{ 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);
}
