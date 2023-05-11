import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http"
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  exports: [
       // WE MUST ADD A ROUTE MODULE LIBRARY IN ORDER TO USE IT IN OUR HTML HomePage
    RouterModule

  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  providers: [RickAndMortyService]
})
export class SharedModule { }