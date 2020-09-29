import { Plano } from './plano';
import { Entidade } from './entidade';
import { Contrato } from './contrato';
import { Operadora } from './operadora';
import { Subcontrato } from './subcontrato';
import { Titular } from './titular';
import { Corretora } from './corretora';
import { Administradora } from './administradora';
import { Corretor } from './corretor';
import { Supervisor } from './supervisor';

export class Cliente {

    subcontrato: Subcontrato;
    contrato: Contrato;

    dataVigencia: Date;
    dataVencimento: Date;

    operadora: Operadora;
    entidade: Entidade;
    plano: Plano;
    titular: Titular;
    corretora: Corretora ;
    administradora: Administradora;
    corretor: Corretor;
    supervisor: Supervisor;

    valorTotal: number;
    valorTaxaAssociativa: number;
    taxaCadastro: number;
    valorTotalMensal: number;
    numeroProposta: number;
    qtdRecorrenciaAnualTaxaAssociativa: number;
    descricaoRecorrenciaTaxaAssociativa: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    
}