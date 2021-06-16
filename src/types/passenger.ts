export interface PassengerState {
    passengers: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    maxPage: number;
}

export enum PassengerActionTypes {
    FETCH_PASSENGERS = 'FETCH_PASSENGERS',
    FETCH_PASSENGERS_SUCCESS = 'FETCH_PASSENGERS_SUCCESS',
    FETCH_PASSENGERS_ERROR = 'FETCH_PASSENGERS_ERROR',
    SET_PASSENGER_PAGE = 'SET_PASSENGER_PAGE',
}

interface FetchPassengerAction {
    type: PassengerActionTypes.FETCH_PASSENGERS;
}
interface FetchPassengerSuccessAction {
    type: PassengerActionTypes.FETCH_PASSENGERS_SUCCESS;
    payload: any[];
    maxPage: number;
}
interface FetchPassengerErrorAction {
    type: PassengerActionTypes.FETCH_PASSENGERS_ERROR;
    payload: string
}
interface SetPassengerPage {
    type: PassengerActionTypes.SET_PASSENGER_PAGE;
    payload: number;
}

export type PassengerAction =
    FetchPassengerAction
    | FetchPassengerSuccessAction
    | FetchPassengerErrorAction
    | SetPassengerPage