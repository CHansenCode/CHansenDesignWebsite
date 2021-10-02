import { POST_CONTACT_FORM } from "../actions/actionTypes";

const errorHandler = (errors = initState, action) => {
  switch (action.type) {
    case POST_CONTACT_FORM:
      return { ...errors, contactForm: action.payload };
    default:
      return errors;
  }
};

export default errorHandler;

const initState = {
  contactForm: "",
};
