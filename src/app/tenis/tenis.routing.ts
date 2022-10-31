import { Routes } from "@angular/router";
import { TenisFormComponent } from "./tenis-form/tenis-form.component";
import { TenisListComponent } from "./tenis-list/tenis-list.component";
import { TenisComponent } from "./tenis.component";

export const TenisRoutes: Routes =[
    {
        path: "tenis",
        component:TenisComponent,
        children:[
            {
                path:"",
                component:TenisListComponent
            },
            {
                path:"novo",
                component:TenisFormComponent
            },
            {
                path:"editar/:id",
                component:TenisFormComponent
            }
        ]
    },
];