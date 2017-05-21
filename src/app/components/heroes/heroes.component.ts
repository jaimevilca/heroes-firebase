import { Component, OnInit } from '@angular/core';

import { Heroe } from "../../interfaces/heroe.interface";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;


  constructor(
    private heroesService: HeroesService
  ) { 
    this.heroesService.getHeroes()
        .subscribe(data => {
          console.log(data);
          this.heroes = data;
          this.loading = false;
        });
  }

  ngOnInit() {
  }


  borrarHeroe(key$: string){
    this.heroesService.borrarHeroe(key$)
        .subscribe(respuesta => {
          if(respuesta){
            console.log(respuesta);
          }else{
              delete this.heroes[key$];
          }
        });

  }

}
