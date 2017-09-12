import { Component, OnInit } from '@angular/core';
import { APIService } from '../../functions/api/services';
import { Vehicle } from '../../models/models';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public cabObject: Vehicle[];
  constructor(private APIService: APIService) {
    this.cabObject = [new Vehicle('id', '', 7, 13, 'Toyota - AC', 'Preferable for large families'),
    new Vehicle('id', '', 5, 10, 'Indica - AC', 'Preferable for small families'),
    new Vehicle('id', '', 5, 10, 'Indica - Non - AC', 'Preferable for small families'),
    new Vehicle('id', '', 5, 10, 'Toyota - Non - AC', 'Preferable for small families'),
    new Vehicle('id', '', 8, 10, 'Shya - Non - AC', 'Preferable for heavy families')];

  }

  ngOnInit() {
  }

}
