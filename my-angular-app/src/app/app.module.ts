import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';



@NgModule({

  declarations: [AppComponent, GreetingComponent], // ✅ Declarar el componente aquí
  imports: [BrowserModule,
     RouterModule,CommonModule,
      HttpClientModule], // ✅ Importar módulos
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }