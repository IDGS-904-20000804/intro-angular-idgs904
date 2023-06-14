import { Component } from '@angular/core';

@Component({
  selector: 'app-escuela',
  template:`
  <form action="">
    <label for="txtName">Nombre:</label>
    <input type="text" name="txtName" id="txtName">
    <button class="btn btn-primary" type="button">Ingresar</button>
  </form>
  `,
})
export class EscuelaComponent {

}
