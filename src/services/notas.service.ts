import {Injectable} from '@angular/core';

@Injectable()
export class NotasService{
    notas=[
        {id:1,titulo:'titulo 1',descripcion:'descripcion de la nota 1'},
        {id:2,titulo:'titulo 2',descripcion:'descripcion de la nota 2'},
        {id:3,titulo:'titulo 3',descripcion:'descripcion de la nota 3'}
      ];
    public getNotas(){
        return this.notas;
    }
    public getNota(id){
        return this.notas.filter(function(e,i){return e.id==id})[0]||{id:null,titulo:null,descripcion:null};
    }
}