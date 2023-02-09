import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPresenterHeaderComponent } from './layout-presenter-header/layout-presenter-header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    LayoutPresenterHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    LayoutPresenterHeaderComponent
  ]
})
export class LayoutPresentersModule { }
