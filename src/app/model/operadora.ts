export class Operadora {

    id: number;
    cnpj: number;
    nome: string;
    site: string;
    telefone: number;

    constructor(id?: number, cnpj?: number, nome?: string, site?: string, telefone?: number) {
        this.id = id;
        this.cnpj = cnpj;
        this.nome = nome;
        this.site = site;
        this.telefone = telefone;
    }

}