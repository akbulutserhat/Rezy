import { Action } from '@ngrx/store';
import { ReservationItem } from '../models/reservation-item.models';


export enum ReservationActionTypes {
    LOAD_RESERVATION = '[RESERVATION] Load Reservation',
    LOAD_RESERVATION_SUCCESS = '[RESERVATION] Load Reservation Success',
    LOAD_RESERVATION_FAILURE = '[RESERVATION] Load Reservation Failure',
    ADD_RESERVATION = '[RESERVATION] Add Reservation',
    ADD_RESERVATION_SUCCESS = '[RESERVATION] Add Reservation Success',
    ADD_RESERVATION_FAILURE = '[RESERVATION] Add Reservation Failure',
    DELETE_RESERVATION = '[RESERVATION] Delete Reservation',
    DELETE_RESERVATION_SUCCESS = '[RESERVATION] Delete Reservation Success',
    DELETE_RESERVATION_FAILURE = '[RESERVATION] Delete Reservation Failure'
}

export class LoadReservationAction implements Action {
    readonly type = ReservationActionTypes.LOAD_RESERVATION;
}

export class LoadReservationSuccessAction implements Action {
    readonly type = ReservationActionTypes.LOAD_RESERVATION_SUCCESS;

    constructor(public payload:Array<ReservationItem>) {}
}

export class LoadReservationFailureAction implements Action {
    readonly type = ReservationActionTypes.LOAD_RESERVATION_FAILURE;

    constructor(public payload: Error) {}
}

export class AddReservationAction implements Action {
    readonly type = ReservationActionTypes.ADD_RESERVATION;

    constructor(public payload:ReservationItem){}
}

export class AddReservationSuccessAction implements Action {
    readonly type = ReservationActionTypes.ADD_RESERVATION_SUCCESS;

    constructor(public payload:ReservationItem) {}
}

export class AddReservationFailureAction implements Action {
    readonly type = ReservationActionTypes.ADD_RESERVATION_FAILURE;

    constructor(public payload:Error) {}
}

export class DeleteReservationAction implements Action {
    readonly type = ReservationActionTypes.DELETE_RESERVATION;

    constructor(public payload: string) { }
}

export class DeleteReservationSuccessAction implements Action {
    readonly type = ReservationActionTypes.DELETE_RESERVATION_SUCCESS;

    constructor(public payload:string) {} // id of reservation item
}

export class DeleteReservationFailureAction implements Action {
    readonly type = ReservationActionTypes.DELETE_RESERVATION_FAILURE;

    constructor(public payload:Error) {}
}

export type ReservationAction = LoadReservationAction |
                                AddReservationAction |
                                DeleteReservationAction |
                                LoadReservationSuccessAction |
                                LoadReservationFailureAction |
                                AddReservationSuccessAction |
                                AddReservationFailureAction |
                                DeleteReservationSuccessAction |
                                DeleteReservationFailureAction