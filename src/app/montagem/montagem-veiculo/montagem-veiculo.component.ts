import { MotorService } from './../../motor.service';
import { PneuService } from './../../pneu.service';
import { CorService } from './../../cor.service';
import { ChasiService } from './../../chasi.service';
import { MontagemService } from './../../montagem.service';
import { MontagemVeiculo } from './../montagem';
import { Component, OnInit } from '@angular/core';
import { Chasi } from '../chasi';
import { Cor } from '../cor';
import { Motor } from '../motor';
import { Pneu } from '../pneu';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-montagem-veiculo',
  templateUrl: './montagem-veiculo.component.html',
  styleUrls: ['./montagem-veiculo.component.css']
})
export class MontagemVeiculoComponent implements OnInit{


  montagemVeiculos: MontagemVeiculo [] = [];
  montagemVeiculo: MontagemVeiculo;
  chasis: Chasi [] = [];
  cores: Cor [] = [];
  motores: Motor [] = [];
  pneus: Pneu [] = [];
  success?: boolean = false;
  mensagemErro?: string;
  valorMontagem? : any;
  
  constructor(
    private service : MontagemService,
    private chasiService: ChasiService,
    private corService: CorService,
    private motorService: MotorService,
    private pneuService: PneuService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { 
    this.montagemVeiculo = new MontagemVeiculo();
  }

  ngOnInit(){
    this.carregarChasis();
    this.carregarCores();
    this.carregarMotores();
    this.carregarPneus();

  }
  
  carregarChasis(){
    this.chasiService.getChasis()
      .subscribe( chasisDaApi => {
        this.chasis = chasisDaApi;       
      })
  }

  carregarCores(){
    this.corService.getCores()
    .subscribe( coresDaApi => {
      this.cores = coresDaApi;
    })
  }

  carregarMotores(){
    this.motorService.getMotores().subscribe( motoresDaApi => {
      this.motores = motoresDaApi;
    })
  }

  carregarPneus(){
    this.pneuService.getPneus().subscribe( pneusDaApi => {
      this.pneus = pneusDaApi;
    })
  }

  calcularMontagem(){
    //console.log(this.montagemVeiculo)
    this.service.realizarMontagem(this.montagemVeiculo)
                .subscribe( 
                  valorMontagem => {
                    this.success = true;
                    this.valorMontagem = valorMontagem;
                  },erro => this.mensagemErro = 'O Motor e Chasi precisam ser do mesmo Fabricante.'
                  )
    return this.valorMontagem;
  }
  }
