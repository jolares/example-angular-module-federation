import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Feature3Component } from './feature3.component';

import { FEATURE3_ROUTES } from './feature3.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FEATURE3_ROUTES)
  ],
  declarations: [
    Feature3Component
  ]
})
export class Feature3Module { }
