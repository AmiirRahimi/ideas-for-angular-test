import { NgModule } from "@angular/core";
import { LayoutPresentersModule } from "../presenters/layout-presenter.module";
import { LayoutContainerHeaderComponent } from "./layout-container-header.component";

@NgModule({
    declarations:[
        LayoutContainerHeaderComponent,
    ],
    imports:[
        LayoutPresentersModule
    ],
    exports:[
        LayoutContainerHeaderComponent
    ]
})
export class LayoutContainersModule{}