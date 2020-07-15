import { ReservationItem } from "../models/reservation-item.models";
import { ReservationAction, ReservationActionTypes } from "../actions/reservation.action";


export interface ReservationState {
    list:ReservationItem[],
    loading:boolean,
    error: Error
}

const initialState = {
    list:[],
    loading:false,
    error:undefined
}

export function ReservationReducer(state:ReservationState = initialState,action:ReservationAction) {
    switch(action.type) {
        case ReservationActionTypes.LOAD_RESERVATION:
            return {
                ...state,
                loading:true
            }
        case ReservationActionTypes.LOAD_RESERVATION_SUCCESS:
            return {
                ...state,
                list:action.payload,
                loading:false
            }
        /*case ReservationActionTypes.LOAD_RESERVATION_FAILURE:
            return {
                ...state,
                error:action.payload,
                loading:false
            }*/
        case ReservationActionTypes.ADD_RESERVATION:
            return {
                ...state,
                loading:true
            }
        case ReservationActionTypes.ADD_RESERVATION_SUCCESS:
            return {
                ...state,
                list:[...state.list,action.payload],
                loading:false
            }
        /*case ReservationActionTypes.ADD_RESERVATION_FAILURE:
            return {
                ...state,
                error:action.payload,
                loading:false
            }*/
        case ReservationActionTypes.DELETE_RESERVATION:
            return {
                ...state,
                loading:true
            }
        case ReservationActionTypes.DELETE_RESERVATION_SUCCESS:
            return {
                ...state,
                list:state.list.filter(item => item.id !== action.payload),
                loading:false
            }
        case ReservationActionTypes.LOAD_RESERVATION_FAILURE:
        case ReservationActionTypes.ADD_RESERVATION_FAILURE:
        case ReservationActionTypes.DELETE_RESERVATION_FAILURE:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        default:
            return state;
    }
}