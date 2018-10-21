import { Component } from '@angular/core';
declare var angular: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My list';
  colors = ["Red", "Blue", "Green", "Black"];
}
