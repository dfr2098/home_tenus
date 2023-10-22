import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [AppComponent,CabeceraComponent],
  imports: [BrowserModule,NgModule,MatButtonModule,MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
