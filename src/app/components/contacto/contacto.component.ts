import { Component, OnInit } from '@angular/core';
import {contacto} from '../../modelo/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.less']
})
export class ContactoComponent implements OnInit {
  public tittle = 'Datos para Contactar Admin';
  // Array que contiene los paises del select
  public paises : Array<string> = ['Chile',
                  'Colombia',
                  'Ecuador',
                  'Peru',
                  'Argentian',
                  'Brasil'
  ];
  public pais : string;
  // se creo un modelo de contacto para que se veo mejor estructurado
  public contact : contacto;
  
  constructor(
  ) {
    this.contact = new contacto;

   }

  ngOnInit(): void {
  }

}
