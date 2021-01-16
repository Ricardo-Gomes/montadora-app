import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MontagemRoutingModule } from './montagem-routing.module';
import { MontagemVeiculoComponent } from './montagem-veiculo/montagem-veiculo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MontagemVeiculoComponent],
  imports: [
    CommonModule,
    MontagemRoutingModule,
    FormsModule
  ]
})
export class MontagemModule { }
