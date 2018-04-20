import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notas=[
    {id:1,titulo:'titulo 1',descripcion:'descripcion de la nota 1'},
    {id:2,titulo:'titulo 2',descripcion:'descripcion de la nota 2'},
    {id:3,titulo:'titulo 3',descripcion:'descripcion de la nota 3'}
  ];
  constructor(public navCtrl: NavController) {

  }

}
