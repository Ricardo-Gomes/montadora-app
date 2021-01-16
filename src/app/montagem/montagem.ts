import { Chasi } from "./chasi";
import { Cor } from "./cor";
import { Motor } from "./motor";
import { Pneu } from "./pneu";

export class MontagemVeiculo{
    id!: number;
    idChasi!: number;
    idCor!: number;
    idMotor!: number;
    idPneu!: number;
    chasi!: Chasi;
    cor!: Cor;
    motor!: Motor;
    pneu!: Pneu;

    }