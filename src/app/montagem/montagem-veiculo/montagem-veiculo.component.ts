import { MontagemService } from './../../montagem.service';
import { MontagemVeiculo } from './../montagem';
import { Component, OnInit } from '@angular/core';
import { Chasi } from '../chasi';
import { Cor } from '../cor';
import { Motor } from '../motor';
import { Pneu } from '../pneu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-montagem-veiculo',
  templateUrl: './montagem-veiculo.component.html',
  styleUrls: ['./montagem-veiculo.component.css']
})
export class MontagemVeiculoComponent implements OnInit {

  montagemVeiculo: MontagemVeiculo;
  montagemVeiculos : MontagemVeiculo[] = [];
  chasi: Chasi;
  cor: Cor;
  motor: Motor;
  pneu: Pneu;
  success: boolean = false;
  errors?: String[];
  
  constructor(
    private service : MontagemService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { 
    this.montagemVeiculo = new MontagemVeiculo();
    this.chasi = new Chasi();
    this.cor = new Cor();
    this.motor = new Motor();
    this.pneu = new Pneu();
  }

  ngOnInit(): void {
  }

  calcularMontagem(){
    this.service.realizarMontagem
  }
}
