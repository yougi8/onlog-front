import { combineReducers } from "redux";
import LoginReducer from "./login";
import ProfileReducer from "./profile";
import ColorReducer from "./color";
import CardReducer from "./card";
import CateReducer from "./category";

const RootReducer = combineReducers({
    // login: LoginReducer,
    profile: ProfileReducer,
    color: ColorReducer,
    cards: CardReducer,
    category: CateReducer
})

export default RootReducer