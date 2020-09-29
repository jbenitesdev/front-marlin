export class Administradora{

    id: number; 
    codigoANS : number;
    site : string;
    telefone : number;
    cnpj : number;
    nomeFantasia : string;
    razaoSocial : string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    

}