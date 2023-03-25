import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DtoExperience } from '../components/models/DTO/experienceDto';
import { DtoEducation } from '../components/models/DTO/educationDto';
import { DtoProject } from '../components/models/DTO/projectDto';
import { DtoSkill } from '../components/models/DTO/skillDto';
import { DtoUser } from '../components/models/DTO/userDto';
import { DtoAddress } from '../components/models/DTO/addressDto';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private data: HttpClient) { }

updateUser(id:number, obj:DtoUser){
  this.data.post<DtoUser>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/updateUser/${id}`,obj).subscribe(res=>console.log(res))
}

getUser():Observable<any>{
  return this.data.get<any>('https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/users',{
    headers: {
      'Content-Type': 'application/json'
    }})
}

/////////////////eduaction//////////////////////



getEducation(id:number):Observable<any>{
  return this.data.get<any>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/education/${id}`,{
    headers: {
      'Content-Type': 'application/json'
    }})
}
getEducations():Observable<any>{
  return this.data.get<any>('https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/educations',{
    headers: {
      'Content-Type': 'application/json'
    }})
}


createEducation(id:number,obj:DtoEducation):void{
  this.data.post<DtoEducation>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/new/education/${id}`,obj).subscribe(res=>{
    console.log(res);
  });
}

updateEducation(id:number, obj:DtoEducation){
  this.data.post<DtoEducation>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/updateEducation/${id}`, obj).subscribe(res=>{
    console.log(res);
  })
}

deleteEducation(id:number){
console.log(id)
 this.data.delete(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/delete/education/${id}`).subscribe(res=>{
  console.log(res);
});
}



////////////////experience/////////////////////////

getExperiences():Observable<any>{
  return this.data.get<any>('https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/experiences',{
    headers: {
      'Content-Type': 'application/json'
    }})
}
getExperience(id:number):Observable<any>{
  return this.data.get<any>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/experience/${id}`,{
    headers: {
      'Content-Type': 'application/json'
    }})
}


createExperience(id:number,obj:DtoExperience):void{
  this.data.post<DtoExperience>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/new/experience/${id}`,obj).subscribe(res=>{
    console.log(res);
  });
}

updateExperience(id:number, obj:DtoExperience){
  this.data.post<DtoExperience>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/updateExperience/${id}`, obj).subscribe(res=>{
    console.log(res);
  })
}

deleteExperience(id:number){
console.log(id)
 this.data.delete(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/delete/experience/${id}`).subscribe(res=>{
  console.log(res);
});
}


/////////////proyect ////////


getProjects():Observable<any>{
  return this.data.get<any>('https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/projects',{
    headers: {
      'Content-Type': 'application/json'
    }})
}


getProject(id:number):Observable<any>{
  return this.data.get<any>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/project/${id}`,{
    headers: {
      'Content-Type': 'application/json'
    }})
}


createProject(id:number,obj:DtoProject):void{
  this.data.post<DtoProject>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/new/project/${id}`,obj).subscribe(res=>{
    console.log(res);
  });
}

updateProject(id:number, obj:DtoProject){
  this.data.post<DtoProject>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/updateProject/${id}`, obj).subscribe(res=>{
    console.log(res);
  })
}

deleteProject(id:number){
console.log(id)
 this.data.delete(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/delete/project/${id}`).subscribe(res=>{
  console.log(res);
});
}



/////////////////// skill////////

getSkills():Observable<any>{
  return this.data.get<any>('https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/skills',{
    headers: {
      'Content-Type': 'application/json'
    }})
}

getSkill(id:number):Observable<any>{
  return this.data.get<any>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/skill/${id}`,{
    headers: {
      'Content-Type': 'application/json'
    }})
}


createSkill(id:number,obj:DtoSkill):void{
  this.data.post<DtoSkill>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/new/skill/${id}`,obj).subscribe(res=>{
    console.log(res);
  });
}

updateSkill(id:number, obj:DtoSkill){
  this.data.post<DtoSkill>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/updateSkill/${id}`, obj).subscribe(res=>{
    console.log(res);
  })
}

deleteSkill(id:number){
console.log(id)
 this.data.delete(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/delete/skill/${id}`).subscribe(res=>{
  console.log(res);
});
}

///////////////////////address/////////////////////
updateAddress(id:number,obj:DtoAddress){
this.data.post<DtoAddress>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/updateAddress/${id}`,obj).subscribe(res=>console.log(res))
}
getAddress(id:number):Observable<any>{
  return this.data.get<any>(`https://porfolio-yoprogramo-josmanjimenez.koyeb.app/find/address/${id}`,{
    headers: {
      'Content-Type': 'application/json'
    }})
}
//   "start": "ng serve --proxy-config proxy.conf.json"
}

