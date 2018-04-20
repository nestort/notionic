import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NotasService} from '../../services/notas.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notas=[];
  constructor(public navCtrl: NavController,public notasService:NotasService ) {
    this.notas=notasService.getNotas();
  }
  public itemSelected(item:any){
    
  }

}
