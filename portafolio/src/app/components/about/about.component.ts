import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { DtoUser } from '../models/DTO/userDto';

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
  id:number=0;
  dataUser:DtoUser={
    image_user: '',
    description_user: '',
    name_user: '',
    lastName_user: '',
    email: '',
    last_profession: '',
    trade_profession: '',
    user_password: '',
    phone_number: ''
  }


  constructor( private Data:GetDataService) { }

  ngOnInit(): void {
    this.Data.getData().subscribe(data=> {
      this.rta=data;
      this.str=JSON.stringify(this.rta.about);
      this.input=this.str.replace(/"/g,"");
     
    })
    
      this.Data.getUser().subscribe(data=> {
      this.rta2=data;
      this.str=JSON.stringify(this.rta2[0].description_user);
      this.input=this.str.replace(/"/g,"");
      this.id=data[0].id_user;
      this.dataUser.image_user=data[0].image_user;
      this.dataUser.description_user=data[0].description_user;
      this.dataUser.name_user=data[0].name_user;
      this.dataUser.lastName_user=data[0].lastName_user;
      this.dataUser.email=data[0].email;
      this.dataUser.last_profession=data[0].last_profession;
      this.dataUser.trade_profession=data[0].trade_profession;
      this.dataUser.user_password=data[0].user_password;
      this.dataUser.phone_number=data[0].phone_number;
    
    })

  }
editable(){
    this.status=!this.status;
  }
  updateData(){
    this.dataUser.description_user=this.input;
    this.Data.updateUser(this.id,this.dataUser)
    setTimeout(()=>location.reload(),500)
  }
    
    
}
  

