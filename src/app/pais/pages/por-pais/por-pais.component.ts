import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisesResponse } from '../../interfaces/paisResponse.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: PaisesResponse[] = [];
  paisesSugeridos: PaisesResponse[] = [];
  mostrarSugerencia: boolean = false;

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar( term: string ) {

    this.mostrarSugerencia = false;
    this.hayError = false
    this.termino = term;

    console.log(this.termino)
    this.paisService.getPorPais(term).subscribe((data) =>{
      this.paises = data;
      console.log(this.paises)
    }, (err) =>{
      console.log(err)
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencia(term: string) {
    this.hayError = false;
    this.termino = term;
    this.mostrarSugerencia = true;

    this.paisService.getPorPais(term).subscribe(data =>
      this.paisesSugeridos = data.splice(0,5),
      (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido(term: string) {
    this.buscar(term);
  }

}
