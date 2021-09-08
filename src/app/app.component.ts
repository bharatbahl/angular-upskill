import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div><h1>{{title}}</h1>
  <p>My first component</p>
  <pm-products></pm-products>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apm-new';
}
