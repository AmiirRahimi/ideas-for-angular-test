import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './layout-page.component';
import { LayoutContainersModule } from '../containers/layout-containers.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    LayoutContainersModule,
    RouterModule,
  ]
})
export class LayoutPageModule { }
