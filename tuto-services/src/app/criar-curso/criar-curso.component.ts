import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService],
})
export class CriarCursoComponent implements OnInit {
  cursos: string[] = [];

  constructor(private _cursosService: CursosService) {}

  onAddCurso(curso: string) {
    this._cursosService.addCurso(curso); // nesse caso o curso sera adicionado somente nesse componente por que teremos uma instancia pra cada componente do cursoService
  }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }
}
