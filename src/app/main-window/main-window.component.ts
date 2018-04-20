import { Component, OnInit,HostListener,ElementRef } from '@angular/core';
import {Globals} from '../globals';
import {DomSanitizer} from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger,state,style,transition,animate,keyframes,animateChild ,query} from '@angular/animations';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss'],
  providers:[Globals],
  animations: [
    trigger('boxState', 
    [ state('collapsed', style({
      'height':'fit-content'
    })),
    state('expanded',   style({
      'height':'fit-content'
    })),
      transition('expanded => collapsed', animate('500ms   ease-in')),
      transition('collapsed => expanded', animate('500ms   ease-in'))
    ]),
    trigger('projState',
    [
      state('collapsed', style({
        'padding':'0'
      })),
      state('expanded',   style({
        'padding': '0 20%'
      })),
      transition('expanded => collapsed', animate('500ms   ease-in')),
      transition('collapsed => expanded', animate('500ms   ease-in'))
    ]),
    trigger('techState',
    [
      state('collapsed', style({
        'padding':'0'
      })),
      state('expanded',   style({
        'padding': '0 20%'
      })),
      transition('expanded => collapsed', animate('500ms   ease-in')),
      transition('collapsed => expanded', animate('500ms   ease-in'))
    ]),
    trigger('aboutState',
    [
      state('collapsed', style({
        'padding':'0'
      })),
      state('expanded',   style({
        'padding': '0 20%'
      })),
      transition('expanded => collapsed', animate('500ms   ease-in')),
      transition('collapsed => expanded', animate('500ms   ease-in'))
    ]),
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        // transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        // transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('800ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ])     ,
    trigger('scrollAnimation1', [
      state('show', style({
        opacity: 1,
        // transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        // transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('800ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ])     
]
})
export class MainWindowComponent implements OnInit {
  url1:"../../assets/images/logot2.png";
  url2:"../../assets/images/modernt.png";
  cleanUrl1;
  cleanUrl2;
  state:string='inactive';
  state1:string='hide';
  scrollPos1:110.0;
  scrollPos2:250.0;
  state2:string = 'hide';
  boxState:string='collapsed';
  techState:string='collapsed';
  projState:string='collapsed';
  aboutState:string='collapsed';

  sticky:boolean=false;
  constructor(private _globals:Globals,private domSanitizer:DomSanitizer,public el: ElementRef) { }

  ngOnInit() {
    this._globals.home=false;
    this.cleanUrl1= this.domSanitizer.bypassSecurityTrustResourceUrl(this.url1);
    this.cleanUrl2= this.domSanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }
  itemClick(src:string){
    //this.state = (this.state === 'inactive' ?  'active': 'inactive');
    if(src =='project'){
      this.projState = (this.projState === 'collapsed' ? 'expanded':'collapsed');
      this.techState='collapsed';
      this.aboutState='collapsed';
      this.boxState=this.projState;
    }
    if(src =='tech'){
      this.techState = (this.techState === 'collapsed' ? 'expanded':'collapsed');
      this.projState='collapsed';
      this.aboutState='collapsed';
      this.boxState=this.projState;
    }
    if(src =='about'){
      this.aboutState = (this.aboutState === 'collapsed' ? 'expanded':'collapsed');
      this.techState='collapsed';
      this.projState='collapsed';
      this.boxState=this.projState;
    }
    // this.boxState = (this.boxState === 'collapsed' ? 'expanded':'collapsed');
  }
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
       console.log(componentPosition);
       console.log(scrollPosition);

       if (scrollPosition >= 100) {
        this.state1 = 'show'
      } else {
        this.state1 = 'hide'
      }

      if (scrollPosition >= 300) {
        this.state2 = 'show'
      } else {
        this.state2 = 'hide'
      }

    }

}


// ,
    
// trigger('scrollAnimation', [
//   state('show', style({
//     opacity: 1,
//   //  transform: "translateX(0)"
//   })),
//   state('hide',   style({
//     opacity: 0,
//   //  transform: "translateX(-100%)"
//   })),
//   transition('show => hide', animate('700ms ease-out')),
//   transition('hide => show', animate('700ms ease-in'))
// ])