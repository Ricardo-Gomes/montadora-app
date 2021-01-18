import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MontagemRoutingModule } from './montagem-routing.module';
import { MontagemVeiculoComponent } from './montagem-veiculo/montagem-veiculo.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MontagemVeiculoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MontagemRoutingModule,
    FormsModule
  ]
})
export class MontagemModule { }
