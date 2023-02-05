import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPresenterHeaderComponent } from './layout-presenter-header/layout-presenter-header.component';

@NgModule({
  declarations: [
    LayoutPresenterHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutPresenterHeaderComponent
  ]
})
export class LayoutPresentersModule { }
