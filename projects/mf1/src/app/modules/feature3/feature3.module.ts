import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { Feature3Component } from './feature3.component';

import { FEATURE3_ROUTES } from './feature3.routes';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    // Angular
    CommonModule,
    // Material
    MatListModule,
    MatIconModule,
    MatDividerModule,
    // App
    RouterModule.forChild(FEATURE3_ROUTES)
  ],
  declarations: [
    Feature3Component
  ]
})
export class Feature3Module { }
