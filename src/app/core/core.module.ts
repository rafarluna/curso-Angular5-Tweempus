import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent] // esto servirá para poder expotar los componentes y AGREGARLOS AL MÓDULO RAIZ (app.module.ts)
})
export class CoreModule { }
