import { Component, signal } from '@angular/core';
import { CardService } from './card/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  cards;

  constructor(private cardService: CardService) {
    this.cards = this.cardService.getCards();
  }

  addCard(card: { cardName: string; cardCode: string; ccv: string; expiry: string }) {
    this.cardService.addCard(card);
  }

  updateCard(index: number, updatedCard: { cardName: string; cardCode: string; ccv: string; expiry: string }) {
    this.cardService.updateCard(index, updatedCard);
  }

  deleteCard(index: number) {
    this.cardService.deleteCard(index);
  }

  editingIndex: number | null = null;
  editingCard = { cardName: '', cardCode: '', ccv: '', expiry: '' };

  onEditCard(event: { index: number; card: any }) {
    this.editingIndex = event.index;
    this.editingCard = { ...event.card };
  }

  onSaveEdit() {
    if (this.editingIndex !== null) {
      this.updateCard(this.editingIndex, this.editingCard);
      this.editingIndex = null;
      this.editingCard = { cardName: '', cardCode: '', ccv: '', expiry: '' };
    }
  }

}
