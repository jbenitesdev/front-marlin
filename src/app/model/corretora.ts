export class Corretora{

    id : number;
    cnpj : number;
    nome : string;
    razaoSocial : string;
    possuiSupervisor : boolean;
    codigo : number;
    email : string;
    indAtivo: number; 
    indLiberacaoColaborador: number; 

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }



}