import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rentService: RentService) {
    
  }
  home: any;
  houseID : string;

  ngOnInit() {
    this.houseID = this.route.snapshot.params.id;
    console.log(this.houseID);

    this.rentService.getHome(this.houseID).subscribe((res) => {
      [this.home] = res;
      console.log(this.home);
    });

    
  }

}
