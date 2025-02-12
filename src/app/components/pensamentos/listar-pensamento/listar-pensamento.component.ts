import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos = [
    {
      conteudo: 'I love code',
      autoria: 'Luqueta',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love angular',
      autoria: 'Luqueta',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      autoria: 'Luqueta',
      modelo: 'modelo2'
    }
  ]

  constructor(){
  }

  ngOnInit(): void {
  }

}
