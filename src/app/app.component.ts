import { Component, OnInit, OnChanges } from '@angular/core';
import {  Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDashboard : boolean;
  

  constructor(private router:Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          (event.url == '/')?this.isDashboard = true:this.isDashboard=false;
      }
   });
  }

  ngOnInit() {

  }

}
