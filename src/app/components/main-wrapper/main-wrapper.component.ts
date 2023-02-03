import { Component } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css'],
})
export class MainWrapperComponent {
  alumnos = [
    { id: 1, nombre: 'Franco', edad: 28, estado: true },
    { id: 2, nombre: 'Agustin', edad: 22, estado: false },
    { id: 3, nombre: 'Juliana', edad: 22, estado: true },
    { id: 4, nombre: 'Luciano', edad: 28, estado: true },
    { id: 5, nombre: 'Agustiina', edad: 21, estado: false },
    { id: 6, nombre: 'Federico', edad: 30, estado: true },
    { id: 7, nombre: 'Constanza', edad: 24, estado: true },
  ];

  cambioEstado(id: any) {
    this.alumnos.forEach((Alumno) => {
      if (id == Alumno.id) {
        Alumno.estado = !Alumno.estado;
      }
    });
  }
}
