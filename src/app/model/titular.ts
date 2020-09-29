import { Dependente } from './dependente';
import { Endereco } from './endereco';
import { EstadoCivil } from './estadoCivil';
import { OrgaoEmissor } from './orgaoEmissor';
import { Profissao } from './profissao';

export class Titular{

    id : number;
    cpf : number;
    rg : number;
    nome : string;
    dataNascimento: Date; 
    nomeMae : string;
    sexo : string;
    cns : number;
    dnv : number;
    email : string;
    dddTelefone : number;
    numTelefone : number;
    dddCelular : number;
    numCelular : number;
    valor :number;
    idade : number;
    numeroCarteirinha: number; 

    estadoCivil: EstadoCivil;
    orgaoEmissor: OrgaoEmissor;
    endereco: Endereco;

    representanteLegal: number;
    carencia: number;

    dependente: Dependente[];
    profissao: Profissao;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}