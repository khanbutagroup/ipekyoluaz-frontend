import React from "react";
import axios from "axios";
import { apiUrl } from "../apiUrl/apiUrl";

export function vendors() {
  const vendorsURL = `${apiUrl()}auth/vendors/`;
  return axios.get(`${vendorsURL}`).then((response) => response);
}

export function vendor(id) {
  const vendorURL = `${apiUrl()}auth/vendors/${id}`;
  return axios.get(`${vendorURL}`).then((response) => response);
}


