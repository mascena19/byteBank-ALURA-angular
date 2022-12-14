import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { TransfereciaService } from '../services/transferecia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private service: TransfereciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
         console.table(transferencias);
         this.transferencias = transferencias;

    });
  }

}
