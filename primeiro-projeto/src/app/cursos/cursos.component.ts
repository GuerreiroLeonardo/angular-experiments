import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosservice: CursosService) {
    this.nomePortal = "Portal do leonardos";
    this.cursos = this.cursosservice.getCursos();
  }

  // servico = new CursosService();

  ngOnInit(): void {
  }

}
