import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationItem } from './store/models/reservation-item.models';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private BACKEND_RESERVATION_URL: string = "http://localhost:3000/reservation";

  constructor(private http:HttpClient) { }

  getReservationItems() {
    return this.http.get<ReservationItem[]>(this.BACKEND_RESERVATION_URL).pipe(delay(500));
  }

  addReservationItem(newItem:ReservationItem) {
    return this.http.post(this.BACKEND_RESERVATION_URL,newItem).pipe(delay(500));
  }

  deleteReservationItem(id:string) {
    return this.http.delete(`${this.BACKEND_RESERVATION_URL}/${id}`).pipe(delay(500));
  }
}
