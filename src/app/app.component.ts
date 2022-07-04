import { Component } from '@angular/core';
@Component({
  selector: 'app-main',
  template: `<h1>Hello, {{name}}</h1>
  <p>hello</p>
 `
})
export class AppComponent {
  name = 'Angular';
}