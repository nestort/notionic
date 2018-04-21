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
  nota={id:null,titulo:null,descripcion:null};
  id=null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public notasService:NotasService,public alertCtrl: AlertController) {    
    this.id=navParams.get('id');    
    if(this.id!=0){
      //this.nota=notasService.getNota(this.id).then(function(snapshot){
        //this.nota=snapshot.val();
        //this.nota=snapshot.val().get();
        //this.id=1;
        this.notasService.getNota(this.id).valueChanges().subscribe(nota=>{
          this.nota=nota;
        });
        
        
        
      //}
        //this.nota=nota;
      
    }  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }
  guardarNota(){
    if(this.nota.id!= null){
      this.notasService.editNota(this.nota);
      this.showAlertCreacion('¡Nota editada!','Se ha editado con exito '+this.nota.titulo);
    }else{
      this.nota.id=Date.now();
      this.notasService.createNota(this.nota);
      this.showAlertCreacion('¡Nueva nota!','Se ha creado con exito '+this.nota.titulo);
    }
    
    this.navCtrl.pop();
    
  }
  eliminarNota(){
    this.notasService.deleteNota(this.nota.id);
    this.navCtrl.pop();
    this.showAlertCreacion('¡Nota eliminada!','Se ha eliminado con exito '+this.nota.titulo);
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
