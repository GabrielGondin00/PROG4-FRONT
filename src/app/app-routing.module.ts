import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenisRoutes } from './tenis/tenis.routing';

const routes: Routes = [
  ...TenisRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
