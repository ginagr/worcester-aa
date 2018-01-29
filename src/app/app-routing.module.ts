import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TownsComponent } from './towns/towns.component';
import { DaysComponent } from './days/days.component';
import { TownDetailComponent } from './town-detail/town-detail.component';

const routes: Routes = [
	{ path: 'towns', component: TownsComponent },
	{ path: 'days', component: DaysComponent },
	{ path: 'detail/:name', component: TownDetailComponent },
	{ path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
