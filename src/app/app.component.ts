import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  options = [
    {
      "id": 1,
      "title": "Contact",
      "link": "Contact"
    },
    {
      "id": 2,
      "title": "Vizient",
      "link": "Vizient"
    },
    {
      "id": 3,
      "title": "Additional Brands",
      "link": "Additional Brands"
    }
  ]
}
