import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { DniComponent } from './pages/dni/dni.component';
import { SelfieComponent } from './pages/selfie/selfie.component';
import { DatosComponent } from './pages/datos/datos.component';
import { DniErrorComponent } from './pages/dni-error/dni-error.component';
import { SelfieErrorComponent } from './pages/selfie-error/selfie-error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './provider/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DniComponent,
    SelfieComponent,
    DatosComponent,
    DniErrorComponent,
    SelfieErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
