/**
 * Created by master on 6/3/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "ama",
    loadChildren: 'app/ama/ama.module#AmaModule'
  },
  { path: '**', redirectTo: "ama" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations :[],
  providers: []
})
export class AppRoutingModule { }
