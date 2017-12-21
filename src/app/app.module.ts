import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Importamos el módulo del Core (coreModule)
import { CoreModule } from './core/core.module'; // Se agrega a los imports, porque es un módulo

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Importamos todo lo que *exporte* el CoreModule
    // Esto nos va a servir para usar los selectors del CoreModule en este module
    CoreModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
