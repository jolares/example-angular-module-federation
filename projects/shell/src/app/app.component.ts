import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <mat-drawer-container class="sidenav-container" hasBackdrop="false">
      <mat-drawer #drawer mode="over">
        <ul>
          <li (click)="drawer.toggle()">
            <img src="../assets/angular.png" width="50">
          </li>
          <li><a routerLink="/">Shell Feat-1 Component</a></li>
          <li><a routerLink="/mf1-routes">MF1 AppComponent</a></li>
          <li><a routerLink="/mf1-routes/feature-1">MF1 Feat-1 Component</a></li>
          <li><a routerLink="/mf1-routes/feature-2">MF1 Feat-2 Component</a></li>
          <li><a routerLink="/mf1-routes/feature-3-routes">MF1 Feat-3 SubModuleComponent</a></li>
        </ul>
      </mat-drawer>

      <mat-drawer-content>
        <button mat-raised-button (click)="drawer.toggle()">
          BurgerMenu
        </button>
        <ng-container *ngTemplateOutlet="projectsContainer"></ng-container>
      </mat-drawer-content>
    </mat-drawer-container>

    <ng-template #projectsContainer>
      <p>Shell Feature1Component's router-outlet below:</p>

      <router-outlet></router-outlet>
    </ng-template>
  `,
})
export class AppComponent {
  title = 'shell';
}

