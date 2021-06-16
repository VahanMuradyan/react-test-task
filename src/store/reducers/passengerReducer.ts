import {PassengerAction, PassengerActionTypes, PassengerState} from "../../types/passenger";

const initialState: PassengerState = {
    passengers: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
    maxPage: 1,
}

export const passengerReducer = (state= initialState, action: PassengerAction): PassengerState => {
    switch (action.type) {
        case PassengerActionTypes.FETCH_PASSENGERS:
            return {...state, loading: true}
        case PassengerActionTypes.FETCH_PASSENGERS_SUCCESS:
            return {...state,loading: false, passengers: action.payload, maxPage: action.maxPage}
        case PassengerActionTypes.FETCH_PASSENGERS_ERROR:
            return {...state,loading: false, error: action.payload}
        case PassengerActionTypes.SET_PASSENGER_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}