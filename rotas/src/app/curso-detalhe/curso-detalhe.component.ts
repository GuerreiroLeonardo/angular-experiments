import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _cursoService: CursosService
  ) {
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this._cursoService.getCurso(this.id);

      if (this.curso == null) {
        this.router.navigate(['/nao-encontrado']);
      }
    });
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
