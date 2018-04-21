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
        for (let i = 0; i < this.notas.length; i++) {
            if (nota.id == this.notas[i].id) {
                this.notas[i] = nota;
            }
        }
    }
    public deleteNota(idnota) {
        for (let i = 0; i < this.notas.length; i++) {
            if (idnota == this.notas[i].id) {
                this.notas.splice(i, 1);
            }
        }
    }
}