import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Town } from './town';
import { TOWNS } from './towns'

@Injectable()
export class TownService {

	constructor() { }

	getTowns(): Observable<Town[]> {
		return of(TOWNS);
	}
	
	getTown(name: string): Observable<Town> {
		return of(TOWNS.find(town => town.name === name));
	}

}
