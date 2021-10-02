import { combineReducers } from "redux";

import LightboxModal from "./LightboxModal";
import errorHandler from "./errorHandler";

export const reducers = combineReducers({ LightboxModal, errorHandler });
