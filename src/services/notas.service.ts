import {IonicApp, IonicModule} from 'ionic-angular'; 
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class NotasService {
    constructor(public afDB: AngularFireDatabase) {

    }
    notas = [];

    

    public getNotas() {
        //return this.notas;
        return this.afDB.list('notas/');
    }
    public getNota(id) {
        //return this.notas.filter(function (e, i) { return e.id == id })[0] || { id: null, titulo: null, descripcion: null };
        //return this.afDB.database.ref('notas/'+id).once('value');
        return this.afDB.object('notas/'+id);
    }
    public createNota(nota) {
       this.afDB.database.ref('notas/'+nota.id).set(nota);
        //this.notas.push(nota);
    }
    public editNota(nota) {
        this.afDB.database.ref('notas/'+nota.id).set(nota);
    }
    public deleteNota(idnota) {
        this.afDB.database.ref('notas/'+idnota).remove();
    }
}