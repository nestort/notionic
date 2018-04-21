import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public notasService:NotasService,public alertCtrl: AlertController) {    
    this.id=navParams.get('id');    
    if(this.id==0){

    }else{      
      this.nota=notasService.getNota(this.id);        
    }    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }
  nuevaNota(){
    this.nota.id=Date.now();
    this.notasService.createNota(this.nota);
    this.navCtrl.pop();
    this.showAlert(this.nota.titulo);
  }
  showAlert(titulo) {
    let alert = this.alertCtrl.create({
      title: '¡Nueva nota!',
      subTitle: 'Se ha creado con exito '+titulo,
      buttons: ['OK']
    });
    alert.present();
  }

}
