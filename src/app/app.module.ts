import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContextService } from 'poc-arquitetura';
import { MaterialModule } from 'projects/poc-credito/src/lib/material-module';
import { AppComponent } from './app.component';


export const staticData = new InjectionToken<Object>('staticData');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'tf-poc-credito', loadChildren: 'projects/poc-credito/src/public_api#PocCreditoModule' },
      { path: '**', redirectTo: 'tf-poc-credito', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: staticData, useValue: {} },
    {
      provide: ContextService,
      useFactory: (data: Object) => new ContextService(data),
      deps: [staticData]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
