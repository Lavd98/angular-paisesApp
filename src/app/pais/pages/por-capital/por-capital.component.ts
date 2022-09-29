import { Component, OnInit } from '@angular/core';
import { PaisesResponse } from '../../interfaces/paisResponse.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: PaisesResponse[] = [];
  placeholder: string = 'Buscar Capital...';

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar( term: string ) {

    this.hayError = false
    this.termino = term;

    console.log(this.termino)
    this.paisService.getPorCapital(term).subscribe((data) =>{
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
  }
}
