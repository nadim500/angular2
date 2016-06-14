import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router-deprecated';
/*export class Hero {
  id : number;
  name : string;
  }*/

@Component({
    selector: 'my-heroes',
    templateUrl : 'app/heroes.component.html',
    styleUrls : ['app/heroes.component.css'],
    directives : [HeroDetailComponent],
    providers : []
})

export class HeroesComponent implements OnInit{
    constructor(
	private heroService : HeroService,
	private router : Router
    ){}
    title = 'Tour of Heroes';
    /*hero : Hero = {
      id : 1,
      name : 'Windstorm'
      };*/
    heroes : Hero[];
    /*public heroes = HEROES;*/
    getHeroes(){
	this.heroService.getHeroesSlowly().then(heroes => this.heroes= heroes);
    }

    ngOnInit(){
	this.getHeroes();
    }
    
    selectedHero : Hero;
    onSelect(hero : Hero){this.selectedHero = hero;};
    gotoDetail(){
	this.router.navigate(['HERODETAIL',{id : this.selectedHero.id}]);
    }
}
