import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  rta:any;
  rta2:any;
  input:any;
  str:any;
  status:boolean=false;
  constructor( private Data:GetDataService) { }

  ngOnInit(): void {
    this.Data.getData().subscribe(data=> {
      this.rta=data;
      this.str=JSON.stringify(this.rta.about);
      this.input=this.str.replace(/"/g,"");
      console.log(this.rta);
    })
    
    this.Data.getUser().subscribe(data=> {
      this.rta2=data;
      console.log(this.rta2);
    })

  }

  editable(){
    this.status=!this.status;
    console.log('holaaaaaaaaa')
  }
  deleteE(){

  }

}
