import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";


export function savaChangeVendorAccount(id) {
    const getUserDataByToken = `${apiUrl()}auth/user/${id}`
    let  token = localStorage.getItem('username')
    return  axios.patch(`${getUserDataByToken}`, {},{ 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);


}


