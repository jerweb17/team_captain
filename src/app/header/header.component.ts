import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  home:boolean;
  constructor(private _globals:Globals) { }

  ngOnInit() {
    this.home=this._globals.home;

  }

}
