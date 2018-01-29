import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TownService } from '../town.service';
import { Town } from '../town';

@Component({
	selector: 'app-town-detail',
	templateUrl: './town-detail.component.html',
	styleUrls: ['./town-detail.component.css']
})

export class TownDetailComponent implements OnInit {

	@Input() town: Town;

	constructor(private route: ActivatedRoute, private townService: TownService, private location: Location) { }

	ngOnInit() {
		this.getTown();
	}
	
	getTown(): void {
		const name = this.route.snapshot.paramMap.get('name');
		this.townService.getTown(name).subscribe(town => this.town = town);
	}

}
