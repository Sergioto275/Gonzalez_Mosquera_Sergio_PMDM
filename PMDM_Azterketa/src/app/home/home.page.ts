import { Component } from '@angular/core';
import { CuestionarioService } from './../servicios/cuestionario.service';
import { IPregunta } from './../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  preguntas!:IPregunta[];
  //Zerbitzua inportatu
  constructor(private preguntaService: CuestionarioService) {
    this.preguntas = preguntaService.getPreguntas();
  }

  //Metodo bat sortu "Erantzun" onclick egiteko
  //IGaldera bat jasoko du eta zerbitzua deituko du beharrezkoak diren eragiketak egiteko
  galdetu(pregunta:any)
  {
    this.preguntaService.preguntar(pregunta);
  }
}
