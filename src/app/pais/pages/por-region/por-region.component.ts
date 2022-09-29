import { Component, OnInit } from '@angular/core';
import { PaisesResponse } from '../../interfaces/paisResponse.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  ];

  paises: PaisesResponse[] = [];
   
  regionActiva: string = '';
  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    console.log(this.regionActiva)
  }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  getPaisesPorRegion(region: string){

    if(region === this.regionActiva) {return}

    this.regionActiva = region;
    this.paises = [];
    this.paisService.getPaisPorRegion(region).subscribe(data => {
      this.paises = data;
      console.log(this.paises)
    })
  }
}
