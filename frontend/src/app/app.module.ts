import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module'; // Importez le module Card
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CardModule // Ajoutez le module Card ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
