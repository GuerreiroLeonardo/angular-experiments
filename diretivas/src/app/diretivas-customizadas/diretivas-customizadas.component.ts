import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss'],
})
export class DiretivasCustomizadasComponent implements OnInit {
  mostrarCursos: boolean = true;

  constructor() {}

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
  ngOnInit(): void {}
}