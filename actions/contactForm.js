import { POST_CONTACT_FORM } from "@/actions/actionTypes.js";

import * as api from "@/api/index.js";

export const postContactForm = (formData) => async (dispatch) => {
  try {
    let res = await api.postContactForm(formData);

    dispatch({ type: POST_CONTACT_FORM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
