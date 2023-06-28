import { Component } from '@angular/core';
import { AlumnoIRIC } from '../AlumnoIRIC';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})

export class IRICComponent {
  imageWith: number = 50;
  imageMargin: number = 2;
  muestraImagen: boolean = true;
  listFilter: string = '';
  // alumnos: any[] = [];
  alumnosIRIC: AlumnoIRIC[] = [
    {
      "matricula": 20009999,
      "nombre": 'Ivan',
      "edad": 32,
      "correo": 'ivan@gmail.com',
      "pago": 12312.33,
      "foto": 'https://randomuser.me/api/portraits/men/1.jpg',
      "calif": 10,
    },
    {
      "matricula": 20009998,
      "nombre": 'María',
      "edad": 28,
      "correo": 'maria@gmail.com',
      "pago": 5321.5,
      "foto": 'https://randomuser.me/api/portraits/women/2.jpg',
      "calif": 9,
    },
    {
      "matricula": 20009997,
      "nombre": 'Juan',
      "edad": 30,
      "correo": 'juan@gmail.com',
      "pago": 7542.89,
      "foto": 'https://randomuser.me/api/portraits/men/3.jpg',
      "calif": 8,
    },
  ]

  showImagen(): void{
    this.muestraImagen = !this.muestraImagen;
  }
}