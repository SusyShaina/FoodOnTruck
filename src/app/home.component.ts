import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './home.html',
  styleUrls: [ './main.css' ]
})
export class HomeComponent {

	public navToggle: boolean = false;

	constructor() { }

	toggleNav(){
		this.navToggle = !this.navToggle;
	}

}
