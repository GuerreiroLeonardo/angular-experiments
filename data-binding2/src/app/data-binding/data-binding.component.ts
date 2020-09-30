import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = "google.com";
  cursoAngular: boolean = true;
  urlImagem = "http://lorempixel.com/output/city-q-c-640-480-10.jpg";
  valorAtual: string = '';
  valorSalvo: any = '';
  isMouseOver: boolean = false
  nome: string = 'abc';
  Curso: any = {
    nome: "Python",
    pre: "arrocha"
  };

  valorInicial = 15;

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1
  }
  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert('Botão clicado caramba')
  }

  onKeyUp(valor) {
    this.valorAtual = valor;

  }

  salvarValor(valor) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
