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
    public createNota(nota){
        this.notas.push(nota);
    }
    public editNota(nota){
        for(let i=0;i<this.notas.length;i++){
            if(nota.id==this.notas[i].id){
                this.notas[i]=nota;
            }
        }
    }
    public deleteNota(idnota){
        for(let i=0;i<this.notas.length;i++){
            if(idnota==this.notas[i].id){
                this.notas.splice(i,1);
            }
        }
    }
}