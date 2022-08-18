import { Transferencia } from './../model/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Component, ErrorHandler, EventEmitter, OnInit, Output } from '@angular/core';
import { TransfereciaService } from '../services/transferecia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(private service: TransfereciaService, private router: Router) {}

  ngOnInit(): void {}

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  transferir() {
    console.log('Solicitado nova transferência');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error()
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
