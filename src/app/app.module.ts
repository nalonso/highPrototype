import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutPrivateComponent } from './layout/private/layout-private.component';
import { LayoutPublicComponent } from './layout/public/layout-public.component';
import { ButtonComponent } from './ui-common/button/button.component';
import { SidenavComponent } from './ui-common/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPrivateComponent,
    LayoutPublicComponent,
    ButtonComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
