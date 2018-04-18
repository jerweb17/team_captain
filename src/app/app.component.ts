import { Component } from '@angular/core';
import {Globals} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[Globals]
})
export class AppComponent {
  title = 'Left Clicks';
  constructor(private _globals:Globals){
    
  }
}
