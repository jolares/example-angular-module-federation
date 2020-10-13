import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';


@Component({
  selector: 'app-feature3',
  template: `
    <style>
      input[type=text] {
          width: 100%;
          max-width: 400px;
          box-sizing: border-box;
          border: none;
          border-bottom: 2px solid silver;
          font-size: 20px;
          margin-bottom: 20px;
          margin-top: 20px;
      }

      button {
          border: 2px solid silver;
          background-color: white;
          font-size: 16px;
          padding: 10px;
          padding-left: 40px;
          padding-right: 40px;
          border-radius: 10px;
          margin-bottom: 20px;
          margin-top: 20px;
          cursor: pointer;
      }

      button:active {
          border-color: black;
      }

      #container {
          border: 2px darkred dashed;
          padding: 20px;
      }
    </style>

    <div id="container">

      <div>
          <img src="../../../assets/angular.png" width="50">
      </div>
      <h1>Feature 3 SubModule Component!</h1>

      <div>
          <input type="text" placeholder="From">
      </div>
      <div>
          <input type="text" placeholder="To">
      </div>
      <div>
          <button (click)="search()">Search</button>
          <button (click)="terms()">Terms...</button>
      </div>
      <div>
          <ng-container #vc></ng-container>
      </div>
    </div>
  `
})
export class Feature3Component {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr
  ) { }

  search() {
    alert('Not implemented for this demo!');
  }

  terms() {
    import('./lazy/lazy.component')
      .then(module => module.LazyComponent)
      .then(component => {
        const factory = this.cfr.resolveComponentFactory(component);
        this.viewContainer.createComponent(factory, null, this.injector);
      });

  }


}
