import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./page/layout-page.component";

const routes: Routes =[
    {
        path:'',
        component:LayoutPageComponent,
        children:[

        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LayoutRouterModule{}