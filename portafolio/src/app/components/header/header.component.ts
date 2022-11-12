import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    rta:any;
  constructor(private Data: GetDataService) { }

  ngOnInit(): void {
    this.Data.getData().subscribe(data=> {
      this.rta=data;
      console.log (data)
    });
  }

}
