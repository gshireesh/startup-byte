import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {AMAPost, AmaService} from "../ama.service";

@Component({
  selector: 'app-ama-list',
  templateUrl: './ama-list.component.html',
  styleUrls: ['./ama-list.component.scss']
})
export class AmaListComponent implements OnInit{

  amaData : AMAPost[] = [];

  constructor(private route: ActivatedRoute,private amaService:AmaService){}

  ngOnInit(): void {
    let dataService : Observable<AMAPost>;
    this.route.data.subscribe(data =>{
      switch (data['type']) {
        case "trending":
          dataService = this.amaService.trending();
          break;
        case "popular":
          dataService = this.amaService.popular();
          break;
        case "recent":
        default:
          dataService = this.amaService.recent();
          break;
      }
    });
    this.amaData.splice(0,this.amaData.length);
    dataService.subscribe(item =>this.amaData.push(item))
  }

}

