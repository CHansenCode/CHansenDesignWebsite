import { POST_CONTACT_FORM } from "@/actions/actionTypes.js";

import * as api from "@/api/index.js";

export const postContactForm = (formData) => async (dispatch) => {
  dispatch({ type: POST_CONTACT_FORM, payload: "sending" });
  try {
    let { data } = await api.postContactForm(formData);

    dispatch({ type: POST_CONTACT_FORM, payload: "success" });
  } catch (error) {
    dispatch({ type: POST_CONTACT_FORM, payload: "failed" });
  }
};
