import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
})
export class MainComponent {
    miObjeto:any = { 
        autor:'Susy Díaz', 
        mensaje:'Vive la vida y no deje que la vida te viva'
    }
    mostrar = 'true'
    miArray:string[] = ['uno','dos','tres','cuatro']

    

productos = [

    {

      id: '1',

      image: 'assets/img/borrador.jpg',

      title: 'borrador',

      price: 80000,

      description: 'estos útiles escolares en su gran mayoría,'

    },

    {

      id: '2',

      image: 'assets/img/lapicero.jpg',

      title: 'lapicero',

      price: 80000,

      description: 'estos útiles escolares en su gran mayoría,'

    },

    {

      id: '3',

      image: 'assets/img/cuaderno.jpg',

      title: 'cuaderno',

      price: 80000,

      description: 'estos útiles escolares en su gran mayoría,'

    },

    {

      id: '4',

      image: 'assets/img/lustre.jpeg',

      title: 'lustre',

      price: 80000,

      description: 'estos útiles escolares en su gran mayoría,'

    },

    {

      id: '5',

      image: 'assets/img/resaltador.jpg',

      title: 'resaltador',

      price: 80000,

      description: 'estos útiles escolares en su gran mayoría,'

    },

    {

      id: '6',

      image: 'assets/img/tajador.jpg',

      title: 'tajador',

      price: 80000,

      description: 'estos útiles escolares en su gran mayoría,'

    },

];
    perrito = 'toby'


}
