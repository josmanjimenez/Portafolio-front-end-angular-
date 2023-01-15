import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { DtoProject } from '../models/DTO/projectDto';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  rta:any;
  rta2:any;
  status:boolean=false;
  status2:boolean=false;
  status3:boolean=false
  input:any;
  id:any;
  id_user:any;
  
  id_project:number=0;
  name_project:string="";
  image_project:string="";
  description_project:string="";
  url_project:string="";
  
   dataPro:DtoProject= {
    "name_project":"",
    "image_project":"",
    "description_project":"",
    "url_project":"",
}

 constructor(private Data:GetDataService) { }

  ngOnInit(): void {
   
    this.Data.getProjects().subscribe(data=>{
      this.rta2=data;
    })

    this.Data.getUser().subscribe(data=>{
      this.id_user=data[0].id_user;
  })
}

  editable(id:number){
    this.status=!this.status;
    this.id_user=id;
  }

  async editable2(id:number):Promise<void>{
    this.status2=!this.status2;
    console.log(this.status2);
  await this.Data.getProject(id).subscribe(data=>{
      this.id_project = data.id_project;
      this.name_project = data.name_project;
      this.image_project = data.image_project;
      this.description_project = data.description_project;
      this.url_project = data.url_project;
      this.id=data.id_project;
      })
    }
  
    editable3(id:number){
    this.status3=!this.status3;
    this.name_project="";      
    this.image_project="";    
    this.description_project="";
    this.url_project="";       
     }

  deleteItem(id:number){
   this.Data.deleteProject(id);
   setTimeout(()=> location.reload(),500);
  }

  updateDta(id:number,obj:DtoProject){
    if(!this.name_project) this.name_project = this.name_project;
    if(!this.image_project) this.image_project = this.image_project;
    if(!this.description_project) this.description_project = this.description_project;
    if(!this.url_project) this.url_project = this.url_project;
  
  this.dataPro = {
    "name_project": this.name_project,
    "image_project": this.image_project,
    "description_project": this.description_project,
    "url_project": this.url_project
    }
    this.Data.updateProject(this.id,this.dataPro);
     setTimeout(()=> location.reload(),500);
    }
    
    createDta(obj:DtoProject){
      this.dataPro.name_project = this.name_project;
      this.dataPro.image_project = this.image_project;
      this.dataPro.description_project = this.description_project;
      this.dataPro.url_project = this.url_project;
      
      this.Data.createProject(this.id_user,obj);
      setTimeout(()=> location.reload(),500);
        
    }
   
  }

