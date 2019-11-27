import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  addHouseForm: FormGroup;
  ngOnInit() {
  }
  
  createAddHouseForm(): void {
    this.addHouseForm = this.fb.group({
        tipo: null,
        rua: null,
        numero: null,
        bairro: null,
        cidade: null,
        estado: null,
        pais: null,
        nquartos: null,
        nsuites: null,
        nsalas_estar: null,
        nvagas: null,
        area: null,
        armario_embutido: null,
        descricao: null,
        nsalas_jantar: null,
        andar: null,
        valor_condominio: null,
        portaria_24h: null,
        valor_aluguel: null,
        data: null
    });
  }
}
