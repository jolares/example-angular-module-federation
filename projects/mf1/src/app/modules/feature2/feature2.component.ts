import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature2',
  template: `
    <div>
      <img src="../../assets/angular.png" width="50">
    </div>

    <h1>MF1 Feature 2 Component!</h1>

    <p>
      <a routerLink="/feature-3-routes">Go to Feat-3 SubModule Component</a>
    </p>
  `
})
export class Feature2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
