import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IRICComponent {
  alumnos: any[] = [
    {
      "matricula": 20009999,
      "nombre": 'Ivan',
      "edad": 32,
      "correo": 'ivan@gmail.com',
      "pago": 12312.33,
      "foto": 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      "matricula": 20009998,
      "nombre": 'María',
      "edad": 28,
      "correo": 'maria@gmail.com',
      "pago": 5321.5,
      "foto": 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      "matricula": 20009997,
      "nombre": 'Juan',
      "edad": 30,
      "correo": 'juan@gmail.com',
      "pago": 7542.89,
      "foto": 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ]
}
