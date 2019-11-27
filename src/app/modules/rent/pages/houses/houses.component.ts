import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  homes: any[];
  constructor(private rentService: RentService) {
   }

  ngOnInit() {
    this.rentService.getHomes().subscribe((res) => {
      this.homes = res;
      console.log(res);
    });
  
  }

}