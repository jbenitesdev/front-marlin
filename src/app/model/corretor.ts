export class Corretor{

    id :number;
    cpf : number;
    nome : string;
    email :string;
    celular :number;

    constructor(id?:number, cpf?: number, nome?:string, email?:string, celular?:number){
        this.id=id;
        this.cpf=cpf;
        this.nome=nome;
        this.email=email;
        this.celular=celular;
    }


}