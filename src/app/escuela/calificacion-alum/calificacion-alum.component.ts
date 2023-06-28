import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {
  @Input()
  califica: number = 0;
  starWith!: number;
  ngOnChange(): void{
    this.starWith = this.califica*76/10
  }
}
