import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmaRoutingModule } from './ama-routing.module';
import { AmaComponent } from './ama/ama.component';
import {AmaListComponent} from "./ama-list/ama-list.component";
import {AmaService} from "./ama.service";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    AmaRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AmaComponent,
    AmaListComponent
  ],
  providers :[AmaService]
})
export class AmaModule { }
