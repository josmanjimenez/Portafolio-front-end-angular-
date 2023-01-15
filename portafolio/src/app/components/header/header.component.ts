import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Address } from '../models/address';
import { DtoUser } from '../models/DTO/userDto';
import { User } from '../models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rta2:User[]=[]
 
  status:boolean=false;
   city:string="";
   contry:string="";
   id:number=0;
  img_user:string="";
  img_1:string="";
  img_2:string="";
  name:string="";
  last_name:string="";
  email:string="";
  trade:string="";
  number:string="";
  rta3:Address={
    id_addres: 0,
    contry: '',
    city: '',
    location: ''
  }
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

  constructor(private Data: GetDataService) { }

  ngOnInit(): void {

    this.Data.getUser().subscribe(data=>{
      this.rta2=data;
   
      this.img_user=data[0].image_user;
      this.name=data[0].name_user;
      this.last_name=data[0].lastName_user;
      this.email=data[0].email;
      this.trade=data[0].trade_profession;
      this.number=data[0].phone_number

      this.id=data[0].id_user;
      this.dataUser.image_user=data[0].image_user;
      this.dataUser.description_user=data[0].description_user;
      this.dataUser.name_user=data[0].name_user;
      this.dataUser.lastName_user=data[0].lastName_user;
      this.dataUser.email=data[0].email;
      this.dataUser.last_profession=data[0].last_profession;
      this.dataUser.trade_profession=data[0].trade_profession;
      this.dataUser.user_password=data[0].user_password;
      this.dataUser.phone_number=data[0].phone_number;}
      
      )
      this.Data.getEducations().subscribe(data=>{
        this.img_1=data[0].image_education;
        this.img_2=data[1].image_education;
      })

      this.Data.getAddress(1).subscribe(data=>{
        this.city=data.city;
        this.contry=data.contry;
        this.rta3.city=data.city;
        this.rta3.contry=data.contry;
        console.log(data)
      })
  }
  editable(id:number){
    this.status=!this.status;
   console.log(id);

  }

  updateData(){
    this.dataUser.image_user= this.img_user;
    this.dataUser.name_user= this.name;
    this.dataUser.lastName_user =this.last_name;
    this.dataUser.email=  this.email;
    this.dataUser.trade_profession= this.trade;
    this.dataUser.phone_number= this.number;
    this.rta3.city=this.city;
    this.rta3.contry=this.contry;
    this.Data.updateUser(this.id,this.dataUser);
    this.Data.updateAddress(this.id,this.rta3)
    setTimeout(() =>location.reload(), 500);
  }

}
