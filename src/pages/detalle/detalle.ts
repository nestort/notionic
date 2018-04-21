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
    if(this.id!=0){
      this.nota=notasService.getNota(this.id);
    }  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }
  guardarNota(){
    if(this.nota.id!=0){
      this.notasService.editNota(this.nota);
      this.showAlertCreacion('¡Nota editada!','Se ha editado con exito '+this.nota.titulo);
    }else{
      this.nota.id=Date.now();
      this.notasService.createNota(this.nota);
      this.showAlertCreacion('¡Nueva nota!','Se ha creado con exito '+this.nota.titulo);
    }
    
    this.navCtrl.pop();
    
  }
  showAlertCreacion(titulo,contenido) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();
  }

}
