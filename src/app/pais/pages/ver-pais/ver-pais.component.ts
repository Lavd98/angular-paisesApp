import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { PaisesResponse } from '../../interfaces/paisResponse.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: PaisesResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log )
    )
    .subscribe(data =>{
      console.log(data)
      this.pais = data;
    })
    // this.activatedRoute.params.subscribe(({id}) =>{
    //   console.log(id);
    //   this.paisService.getPaisPorAlpha( id ).subscribe(data =>{
    //     console.log(data)
    //   })
    // })
  }

}
