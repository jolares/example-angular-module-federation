import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-feature3',
  template: `
    <style>
      @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

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


      <mat-list>
        <div mat-subheader>Folders</div>
        <mat-list-item *ngFor="let folder of folders">
          <mat-icon mat-list-icon>folder</mat-icon>
          <div mat-line>{{folder.name}}</div>
          <div mat-line> {{folder.updated | date}} </div>
        </mat-list-item>
        <mat-divider></mat-divider>
        <div mat-subheader>Notes</div>
        <mat-list-item *ngFor="let note of notes">
          <mat-icon mat-list-icon>note</mat-icon>
          <div mat-line>{{note.name}}</div>
          <div mat-line> {{note.updated | date}} </div>
        </mat-list-item>
      </mat-list>

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
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Feature3Component {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

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
