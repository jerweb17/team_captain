import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';
@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss'],
  providers:[Globals]
})
export class MainWindowComponent implements OnInit {

  constructor(private _globals:Globals) { }

  ngOnInit() {
    this._globals.home=false;
  }

}
