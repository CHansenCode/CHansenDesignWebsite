import axios from "axios";

import { baseUrl } from "../config";

//contact form
const contactAPI = `${baseUrl}contact`;
export const postContactForm = (formData) => axios.post(contactAPI, formData);
