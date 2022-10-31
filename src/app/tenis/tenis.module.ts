import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenisComponent } from './tenis.component';
import { TenisFormComponent } from './tenis-form/tenis-form.component';
import { TenisListComponent } from './tenis-list/tenis-list.component';
import { RouterModule } from '@angular/router';
import { TenisRoutes } from './tenis.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TenisComponent,
    TenisFormComponent,
    TenisListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(TenisRoutes)
  ]
})
export class TenisModule { }
