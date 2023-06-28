import { Pipe, PipeTransform } from '@angular/core';
import { AlumnoIRIC } from './AlumnoIRIC';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: AlumnoIRIC[], args: string): AlumnoIRIC[] {
    let filter: string = args ? args.toLocaleLowerCase(): ''

    return filter? value.filter((alumno:AlumnoIRIC) => 
      alumno.nombre.toLocaleLowerCase().indexOf(filter) != -1
    ): value;
  }

}
