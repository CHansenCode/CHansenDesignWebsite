import { POPULATE_LIGHTBOX, DEPOPULATE_LIGHTBOX } from "../actions/actionTypes";

const LightboxModal = (lightboxModal = {}, action) => {
  switch (action.type) {
    case POPULATE_LIGHTBOX:
      return action.payload;
    case DEPOPULATE_LIGHTBOX:
      return {};
    default:
      return lightboxModal;
  }
};

export default LightboxModal;
