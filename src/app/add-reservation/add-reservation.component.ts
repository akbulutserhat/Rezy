import { Component, OnInit } from '@angular/core';
import { ReservationItem } from '../store/models/reservation-item.models';
import { v4 as uuid} from 'uuid';
import { AppState } from '../store/models/app-state.models';
import { Store } from '@ngrx/store';
import { AddReservationAction } from '../store/actions/reservation.action';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {
  newReservationItem:ReservationItem = 
  { id:'',title:'',type:'',goingDate:null,
  goingHour:'',returnDate:null,returnHour:'',to:'',from:'',price:null};

  constructor(private store:Store<AppState>,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmitClicked(form:NgForm) {
    this.newReservationItem.id = uuid();

    this.store.dispatch(new AddReservationAction(this.newReservationItem));

    form.reset();
    form.resetForm();

    this.snackBar.open('Reservation Added Succesfully!', 'X',{
      duration:2000,
      panelClass:['snackbar-class']
    });
   
  }

}
