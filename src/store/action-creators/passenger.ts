import axios from "axios";
import {PassengerAction, PassengerActionTypes} from "../../types/passenger";
import {Dispatch} from "redux";

export const fetchPassengers = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PassengerAction>) => {
        try {
            dispatch({ type: PassengerActionTypes.FETCH_PASSENGERS } )
            const response = await axios.get('https://api.instantwebtools.net/v1/passenger',
                {
                    params: {
                        page,
                        size: limit
                    }
                })
            dispatch({ type: PassengerActionTypes.FETCH_PASSENGERS_SUCCESS, payload: response.data.data, maxPage:response.data.totalPages })
        }catch (e){
            dispatch({
                type: PassengerActionTypes.FETCH_PASSENGERS_ERROR,
                payload: 'Error [passenger.ts] function fetchPassengers'
            })
        }
    }
}

export function setPassengerPage(page: number): PassengerAction {
    return {
        type: PassengerActionTypes.SET_PASSENGER_PAGE, payload: page
    }
}