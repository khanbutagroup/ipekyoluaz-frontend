import React from "react";
import axios from "axios";
import {apiUrl} from "./apiUrl/apiUrl";

export function subBySubsub(id) {
    const subByCategoryURL = `${apiUrl()}sub-by-subsub/` + id
    return   axios.get(`${subByCategoryURL}`).then((response) => response);
}