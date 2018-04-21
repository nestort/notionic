import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotasService } from '../../services/notas.service';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  id=null;
  nota={id:null,titulo:null,descripcion:null};
  constructor(public navCtrl: NavController, public navParams: NavParams,public notasService:NotasService) {    
    this.id=navParams.get('id');    
    this.nota=notasService.getNota(this.id);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
