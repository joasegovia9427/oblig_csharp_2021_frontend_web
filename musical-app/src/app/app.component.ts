import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<router-outlet></router-outlet>'  //tambien se podria poner aca y no en el .html
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
}
