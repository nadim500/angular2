import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector : 'my-app',
    template :`
	<h1>{{title}}</h1>
	<a [routerLink]="['HEROES']">Heroes</a>
	<router-outlet></router-outlet>
	`,
    directives : [ROUTER_DIRECTIVES],
    providers : [
	HeroService,
	ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
	path : '/heroes',
	name : 'HEROES',
	component : HeroesComponent
    }
])

export class AppComponent{
    title = "Tour of Heroes";
}
