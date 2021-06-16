import {combineReducers} from "redux";
import {passengerReducer} from "./passengerReducer";

export const rootReducer = combineReducers({
    passenger: passengerReducer
})

export type RootState = ReturnType<typeof rootReducer>