import { Cliente } from './../model/cliente';
import { ContratoService, CLIENTE } from './../service/contrato.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contrato',
	templateUrl: './contrato.component.html',
	styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

	cliente: Cliente = new Cliente;;
	lista: any[] = CLIENTE;

	constructor(private service: ContratoService) {
		
	}

	ngOnInit() {
		this.lista = CLIENTE;
	}
	
	public gravar(){
		this.service.create().subscribe(res => {
			// this.cliente = new Cliente();
			console.log("Dados enviados");
		})
	}
}
