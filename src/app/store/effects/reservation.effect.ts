import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ReservationService } from '../../reservation.service';
import { LoadReservationAction, ReservationActionTypes, LoadReservationSuccessAction, LoadReservationFailureAction, AddReservationAction, AddReservationSuccessAction, AddReservationFailureAction, DeleteReservationAction, DeleteReservationSuccessAction, DeleteReservationFailureAction } from '../actions/reservation.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ReservationEffect {
    constructor(
        private actions$:Actions,
        private reservationService:ReservationService
    ) {}

    @Effect() loadReservation$ = this.actions$.pipe(
        ofType<LoadReservationAction>(ReservationActionTypes.LOAD_RESERVATION),
        mergeMap(
            () => this.reservationService.getReservationItems()
            .pipe(
                map(data =>{
                    return new LoadReservationSuccessAction(data)
                }),
                catchError(error => of(new LoadReservationFailureAction(error)))
            )
        )
    );

    @Effect() addReservation$ = this.actions$.pipe(
        ofType<AddReservationAction>(ReservationActionTypes.ADD_RESERVATION),
        mergeMap(
            (data) => this.reservationService.addReservationItem(data.payload)
            .pipe(
                map( () => new AddReservationSuccessAction(data.payload)),
                catchError(error => of(new AddReservationFailureAction(error)))
            )
        )
    );

    @Effect() deleteReservation$ = this.actions$.pipe(
        ofType<DeleteReservationAction>(ReservationActionTypes.DELETE_RESERVATION),
        mergeMap(
            (data) => this.reservationService.deleteReservationItem(data.payload)
            .pipe(
                map( () =>new DeleteReservationSuccessAction(data.payload)),
                catchError(error => of(new DeleteReservationFailureAction(error)))
            )
        )
    );



}