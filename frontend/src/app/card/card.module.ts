import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [CardFormComponent, CardListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardFormComponent, CardListComponent]
})
export class CardModule {}
