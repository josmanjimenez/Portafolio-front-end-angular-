import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { DtoEducation } from '../models/DTO/educationDto';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
 
  rta2:any;
  status:boolean=false;
  status2:boolean=false;
  status3:boolean=false
  input:any;
  id:any;
  id_user:any;


  id_education:string="";         
  institution:string="";           
  image_education:string="";       
  title:string="";                
  start_date_education:Date|string= new Date (); 
  ending_date_education:Date|string=  new Date (); 
  finish:boolean|string=false;  
  
  dataEdu:DtoEducation={
    "institution": '',
    "image_education": '',
    "title": '',
    "start_date_education": '',
    "ending_date_education": '',
    "finish": ''
  }
  
  
  constructor(private Data:GetDataService) { }

  ngOnInit(): void {
   

    this.Data.getEducations().subscribe(data=>{
      this.rta2=data;
      console.log(data);
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
    this.id=id;
   
  await this.Data.getEducation(id).subscribe(data=>{
  this.id_education=data.id_education;         
  this.institution=data.institution;           
  this.image_education=data.image_education;       
  this.title=data.title;                
  this.start_date_education=data.start_date_education; 
  this.ending_date_education=data.ending_date_education; 
  this.finish=data.finish;  
   })

  }
  editable3(id:number){
    this.status3=!this.status3;
    this.id_education="";         
    this.institution="";           
    this.image_education="";       
    this.title="";                
    this.start_date_education=''; 
    this.ending_date_education=''; 
    this.finish='';
    
  }

  deleteItem(id:number){
    this.Data.deleteEducation(id);
    setTimeout(()=> location.reload(),500);
 
  }

  updateDta(id:number,obj:DtoEducation){
    if(!this.institution) this.institution = this.institution;
    if(!this.image_education) this.image_education = this.image_education;
    if(!this.title) this.title = this.title;
    if(!this.start_date_education) this.start_date_education = this.start_date_education;
    if(!this.ending_date_education) this.ending_date_education = this.ending_date_education;
    if(!this.finish) this.finish = this.finish;
      
      this.dataEdu={        
      "institution":this.institution,           
      "image_education":this.image_education,       
      "title":this.title,                
      "start_date_education":this.start_date_education, 
      "ending_date_education":this.ending_date_education, 
      "finish":this.finish, 
     }
     this.Data.updateEducation(this.id,this.dataEdu);
     setTimeout(()=> location.reload(),500);
  }
  
  createDta(obj:DtoEducation){
    this.dataEdu.institution = this.institution;
    this.dataEdu.image_education = this.image_education;
    this.dataEdu.title = this.title;
    this.dataEdu.start_date_education = this.start_date_education;
    this.dataEdu.ending_date_education = this.ending_date_education;
    this.dataEdu.finish = this.finish;
  
    
    this.Data.createEducation(this.id_user,this.dataEdu);
    setTimeout(()=> location.reload(),500);
  }
}

 



