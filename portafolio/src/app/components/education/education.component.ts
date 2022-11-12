import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  rta:any;
  constructor(private Data:GetDataService) { }

  ngOnInit(): void {
    this.Data.getData().subscribe(data=> this.rta=data);
  }

}
