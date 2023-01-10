import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  rta:any;
  status:boolean=false;
  status2:boolean=false;
  status3:boolean=false
  input:any;
  id:any;
  
  constructor(private Data:GetDataService) { }
  ngOnInit(): void {
    this.Data.getData().subscribe(data=>this.rta=data)
  }

  editable(id:number){
    this.status=!this.status;
   console.log(id);

  }

  editable2(id:number){
    this.status2=!this.status2;
    console.log(id);
  }
  editable3(id:number){
    this.status3=!this.status3;
    console.log(id);
  }

  deleteItem(id:number){
    
  }
}
