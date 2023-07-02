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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './provider/interceptors/auth.interceptor';
import { WebcamModule } from 'ngx-webcam';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { DniVerificadoComponent } from './pages/dni-verificado/dni-verificado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DniComponent,
    SelfieComponent,
    DatosComponent,
    DniErrorComponent,
    SelfieErrorComponent,
    OverlayLoadingComponent,
    DniVerificadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
