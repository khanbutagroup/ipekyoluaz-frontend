import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";


export function storeOrders(id) {
    const storeOrdersURL = `${apiUrl()}store-orders/`
    return   axios.get(`${storeOrdersURL}`,{id:id}).then((response) => response);
}