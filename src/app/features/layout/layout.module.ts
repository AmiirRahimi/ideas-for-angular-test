import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './page/layout-page.component';
import { LayoutPresenterHeaderComponent } from './presenters/layout-presenter-header/layout-presenter-header.component';
import { LayoutPageModule } from './page/layout-page.module';
import { LayoutRouterModule } from './layout-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutPageModule,
    LayoutRouterModule
  ]
})
export class LayoutModule { }
