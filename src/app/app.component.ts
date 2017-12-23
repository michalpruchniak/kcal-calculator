import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../node_modules/@progress/kendo-theme-default/dist/all.css',
               './app.component.css']
})
export class AppComponent {
  title = 'app';
}
