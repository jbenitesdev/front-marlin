import { Corretora } from './corretora';
import { Corretor } from './corretor';

export class Supervisor{

    id : number;
    
    corretor: Corretor;
    corretora: Corretora;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}