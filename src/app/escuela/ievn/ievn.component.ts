import { Component } from '@angular/core';

@Component({
  selector: 'app-ievn',
  template: `<div>
  <p>Objeto: </p>
  <pre>{{ Alumnos | json }}</pre>
</div>`
})
export class IEVNComponent {
  Alumnos = {
    mastricula: 123,
    nombre: 'Angel',
    fechaNacimiento: new Date(),
    pagoIns: 2759.23
  }
}
