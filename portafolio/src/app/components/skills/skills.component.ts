import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  rta:any
  constructor(private Data:GetDataService) { }

  ngOnInit(): void {
    this.Data.getData().subscribe(data=>this.rta=data)
  }

}
