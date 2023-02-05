import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './page/layout-page.component';
import { LayoutPresenterHeaderComponent } from './presenters/layout-presenter-header/layout-presenter-header.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
