import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
