import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();
  //quando eu declaro um método como estático eu não preciso da instancia da
  // classe pra chamar esse método é como se fosse um método fora da classse
  //que é colocado dentro só por organização

  private cursos: string[] = ['Angular 2', 'Java'];

  constructor() {
    console.log('CursosService');
  }
  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
