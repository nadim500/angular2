import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector : 'my-app',
    template :`
	<h1>{{title}}</h1>
	<nav>
		<a [routerLink]="['DASHBOARD']">Dashboard</a>
		<a [routerLink]="['HEROES']">Heroes</a>
	</nav>
	<router-outlet></router-outlet>`,
    styleUrls : ['app/app.component.css'],
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
    },
    {
	path : '/dashboard',
	name : 'DASHBOARD',
	component : DashboardComponent,
	useAsDefault : true
    },
    {
	path : '/detail/:id',
	name : 'HERODETAIL',
	component : HeroDetailComponent
    }
])

export class AppComponent{
    title = "Tour of Heroes";
}
