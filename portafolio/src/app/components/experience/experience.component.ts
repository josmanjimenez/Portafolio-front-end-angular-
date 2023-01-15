import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { DtoExperience } from '../models/DTO/experienceDto';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  rta2:any;
  status:boolean=false;
  status2:boolean=false;
  status3:boolean=false
  id:any;
  id_user:number=0;

  comp_name:string="";
  position:string="";
  imag:string="";
  start:Date|string=new Date();
  end:Date|string=new Date();
  desc:string="";

  dataExp:DtoExperience= {
    "company_name": "",
    "position": "",
    "image_logo": "",
    "start_date_experience":"",
    "ending_date_experience": "",
    "description_experience": ""
}


  constructor(private Data:GetDataService) { }

  ngOnInit(): void {
 
    this.Data.getExperiences().subscribe(data=>{
      this.rta2=data;
    })

    this.Data.getUser().subscribe(data=>{
      this.id_user=data[0].id_user;
  })
}

  editable(id:number){
    this.status=!this.status;
  

  }

  async editable2(id:number):Promise<void>{
    this.status2=!this.status2;
    console.log(id);
  await this.Data.getExperience(id).subscribe(data=>{
      this.comp_name=data.company_name;
      this.imag=data.image_logo;
      this.start=data.start_date_experience;
      this.end=data.ending_date_experience;
      this.desc=data.description_experience;
      this.position=data.position;
      this.id=data.id_experience;
     
    
    })

  }
  editable3(id:number){
    this.status3=!this.status3;
  this.comp_name="";
  this.position="";
  this.imag="";
  this.start="";
  this.end="";
  this.desc="";
    
  }

  deleteItem(id:number){
    this.Data.deleteExperience(id);
    setTimeout(()=> location.reload(),500);
  }

  updateDta(id:number,obj:DtoExperience){
    if(!this.comp_name) this.comp_name = this.comp_name;
    if(!this.position) this.position = this.position;
    if(!this.imag) this.imag = this.imag;
    if(!this.start) this.start = this.start;
    if(!this.end) this.end = this.end;
    if(!this.desc) this.desc = this.desc;
      this.dataExp= {
      "company_name": this.comp_name,
      "position": this.position,
      "image_logo": this.imag,
      "start_date_experience": this.start,
      "ending_date_experience": this.end,
      "description_experience": this.desc
      
  }
      
      this.Data.updateExperience(this.id,this.dataExp);
       setTimeout(()=> location.reload(),500);
  }

   createDta(obj:DtoExperience){
  
    this.dataExp.company_name = this.comp_name;
    this.dataExp.position = this.position;
    this.dataExp.image_logo = this.imag;
    this.dataExp.start_date_experience = this.start;
    this.dataExp.ending_date_experience = this.end;
    this.dataExp.description_experience = this.desc;
 
    
     
    this.Data.createExperience(this.id_user,this.dataExp);
    setTimeout(()=> location.reload(),500);
  }

  
}
