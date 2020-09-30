import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss'],
})
export class CicloComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }

  ngAfterContentChecked(): void {
    this.log('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.log('AferContentInit');
  }
  ngAfterViewInit(): void {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
