import { Component, Input, OnInit } from '@angular/core';
import { PaisesResponse } from '../../interfaces/paisResponse.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: PaisesResponse[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
