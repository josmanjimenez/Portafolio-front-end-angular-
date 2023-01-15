import { Component, OnInit, Renderer2 } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { GetDataService } from 'src/app/services/get-data.service';
import { DtoSkill } from '../models/DTO/skillDto';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  rta:any
  rta2:any
  status:boolean=false;
  status2:boolean=false;
  status3:boolean=false
  input:any;
  id:any;
  id_user:any;



  id_skill:number|string='';
  skill_name1:string='';
  domain_skill1:number|string='';
  color_user:string="";
  

  
  
  dataSkill:DtoSkill= {
    skill_name: '',
    domain_skill: '',
    color_skill: ''
  }
  
  constructor(private Data:GetDataService,
    private renderer: Renderer2) { }

  
  ngOnInit(): void {
    this.Data.getData().subscribe(data=>{
      this.rta=data;
    })
    this.Data.getSkills().subscribe(data=>{
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
    this.id=id;
  await this.Data.getSkill(id).subscribe(data=>{
       this.skill_name1= data.skill_name;
        this.domain_skill1 = data.domain_skill;
        this.color_user = data.color_skill;
      })

    }
 
    editable3(id:number){
    this.status3=!this.status3;
    this.skill_name1 = "";
    this.domain_skill1 = "";
    this.color_user = "";
    }

  deleteItem(id:number){
    this.Data.deleteSkill(id);
    setTimeout(()=> location.reload(),500);
    }

  updateDta(id:number,obj:DtoSkill){
    if(!this.skill_name1) this.skill_name1 = this.skill_name1;
    if(!this.domain_skill1) this.domain_skill1 = this.domain_skill1;
    if(!this.color_user) this.color_user = this.color_user;

    this.dataSkill = {
        "skill_name": this.skill_name1,
        "domain_skill": this.domain_skill1,
        "color_skill":this.color_user
    }
  
    this.Data.updateSkill(this.id,this.dataSkill);
    console.log(this.dataSkill)
    setTimeout(()=> location.reload(),500);
    }
      
createDta(obj:DtoSkill){
    this.dataSkill.skill_name = this.skill_name1;
    this.dataSkill.domain_skill = this.domain_skill1;
    this.dataSkill.color_skill = this.color_user;

    this.Data.createSkill(this.id_user,this.dataSkill);
    setTimeout(()=> location.reload(),500);
    }
 
    

}


  

  
 



  





 
  
  
