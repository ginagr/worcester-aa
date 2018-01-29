import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TownsComponent } from './towns/towns.component';
import { TownDetailComponent } from './town-detail/town-detail.component';
import { TownService } from './town.service';
import { AppRoutingModule } from './/app-routing.module';
import { DaysComponent } from './days/days.component';


@NgModule({
	declarations: [
		AppComponent,
		TownsComponent,
		TownDetailComponent,
		DaysComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AlertModule.forRoot(),
		HttpClientModule
	],
	providers: [TownService],
	bootstrap: [AppComponent]
})
export class AppModule { }
