import axios from "axios";

import { api } from "../config";

//contact form
const contactAPI = `${api}contact`;
export const postContactForm = (formData) => axios.post(contactAPI, formData);
