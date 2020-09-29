import { EstadoCivil } from './estadoCivil';
import { GrauParentesco } from './grauParentesco';
export class Dependente{

    id : number;
    cpf : string;
    nome : string;
    dataNascimento: Date; 
    nomeMae : string;
    sexo  : string;
    cns : string;
    dnv : string;
    valorPlano : number;
    idade : number;
    numeroCarteirinha: number; 
    
    estadoCivil: EstadoCivil;
    grauParentesco: GrauParentesco;

    carencia: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    
}