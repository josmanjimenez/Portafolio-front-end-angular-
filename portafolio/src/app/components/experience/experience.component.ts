import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  rta:any;
  constructor(private Data:GetDataService) { }

  ngOnInit(): void {
    this.Data.getData().subscribe(data=>{
      this.rta=data;
    })
  }

}
