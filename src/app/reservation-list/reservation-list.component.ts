import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationItem } from '../store/models/reservation-item.models';
import { AppState } from '../store/models/app-state.models';
import { Store } from '@ngrx/store';
import { LoadReservationAction } from '../store/actions/reservation.action';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservationItems$: Observable<Array<ReservationItem>>;
  loading$:Observable<Boolean>;
  error$:Observable<Error>;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.reservationItems$=this.store.select(store => store.reservation.list);
    this.loading$=this.store.select(store => store.reservation.loading);
    this.error$=this.store.select(store => store.reservation.error);

    this.store.dispatch(new LoadReservationAction());
  }

}
