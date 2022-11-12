import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  rta:any;
  
  constructor(private Data:GetDataService) { }
  ngOnInit(): void {
    this.Data.getData().subscribe(data=>this.rta=data)
  }

}
