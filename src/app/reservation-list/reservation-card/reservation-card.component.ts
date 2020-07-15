import { Component, OnInit, Input } from '@angular/core';
import { ReservationItem } from 'src/app/store/models/reservation-item.models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.models';
import { DeleteReservationAction } from 'src/app/store/actions/reservation.action';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss']
})
export class ReservationCardComponent implements OnInit {
  @Input() reservation:ReservationItem;
  constructor(private store:Store<AppState>,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  deleteCard() {
    this.store.dispatch(new DeleteReservationAction(this.reservation.id));

    this.snackBar.open('Reservation Deleted Succesfully!', 'X',{
      duration:2000,
      panelClass:['snackbar-class']
    });
  }

}
