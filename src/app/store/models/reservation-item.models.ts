export interface ReservationItem {
    id?:string,
    title:string,
    type:string,
    goingDate:Date,
    goingHour:string,
    returnDate?:Date,
    returnHour?:string,
    price:number,
    from:string,
    to:string
}