import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes, AppComponents } from './app.routes';
import { APIService } from './functions/api/services';


@NgModule({
  declarations: [
    AppComponent,
    AppComponents
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
