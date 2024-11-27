import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  standalone: false,
  
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  @Output() cardAdded = new EventEmitter<{ cardName: string; cardCode: string; ccv: string; expiry: string }>();

  cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      cardName: ['', [Validators.required, Validators.minLength(3)]],
      cardCode: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      ccv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      console.log('Card data:', this.cardForm.value);
      this.cardAdded.emit(this.cardForm.value); // Émettre les données du formulaire
      this.cardForm.reset(); // Réinitialiser le formulaire après soumission
    }
  }
}