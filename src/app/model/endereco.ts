export class Endereco {

    id: number;
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;

    constructor(id?: number, cep?: string, logradouro?: string, numero?: number, complemento?: string, bairro?: string, cidade?: string, uf?: string) {
        this.id = id;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
    }




}