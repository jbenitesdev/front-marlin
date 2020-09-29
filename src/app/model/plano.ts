import { Operadora } from './operadora';
import { FatorModerador } from './fatorModerador';
import { Acomodacao } from './acomodacao';
import { TipoContratacao } from './tipoContratacao';
import { Cobertura } from './cobertura';
import { AbrangeciaGeografica } from './abrangenciaGeografica';
import { AreaAtuacao } from './areaAtuacao';

export class Plano{

    id : number;
    nome : string;
    codigoANS : string;
    
    tipoContratacao: TipoContratacao;
    acomodacao: Acomodacao;
    fatorModerador: FatorModerador;
    cobertura: Cobertura;
    abrangenciaGeografica: AbrangeciaGeografica;
    areaAtuacao: AreaAtuacao;
    operadora: Operadora;

    adicionais: number;
    formacaoDePreco: number;
    quantidadeVidas: number;
    valorTotal: number;
    valorTotalTabela: number;
    recorrenciaPromocaoMeses: number;
    indPromocional: number;
    indPossuiOpcional: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}