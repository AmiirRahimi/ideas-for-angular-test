import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './layout-page.component';
import { LayoutContainersModule } from '../containers/layout-containers.module';



@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    LayoutContainersModule
  ]
})
export class LayoutPageModule { }
