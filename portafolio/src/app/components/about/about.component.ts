import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  rta:any;
  constructor( private Data:GetDataService) { }

  ngOnInit(): void {
    this.Data.getData().subscribe(data=> {
      this.rta=data
    })
  }

}
