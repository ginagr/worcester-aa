import { Component, OnInit } from '@angular/core';
import { Town } from '../town';
import { TownService } from '../town.service';

@Component({
	selector: 'app-towns',
	templateUrl: './towns.component.html',
	styleUrls: ['./towns.component.css']
})

export class TownsComponent implements OnInit {
	towns: Town[];
	selectedTown: Town;
	
	constructor(private townService: TownService) { }

	ngOnInit() {
		this.getTowns();
	}
	
	getTowns(): void {
		this.townService.getTowns()
      .subscribe(towns => this.towns = towns);
	}

}
