import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmaListComponent} from "./ama-list/ama-list.component";
import {AmaComponent} from "./ama/ama.component";

const routes: Routes = [
  {
    path: "",
    component: AmaComponent,
    children :[
      {
        path : "recent",
        data : {type : "recent"},
        component : AmaListComponent
      },
      {
        path : "popular",
        data : {type : "popular"},
        component : AmaListComponent
      },
      {
        path : "trending",
        data : {type : "trending"},
        component : AmaListComponent
      },
      { path: '**', redirectTo: "recent" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AmaRoutingModule { }
