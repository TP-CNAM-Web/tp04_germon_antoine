import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards = signal<any[]>([]);

  getCards() {
    return this.cards.asReadonly();
  }

  addCard(card: { cardName: string; cardCode: string; ccv: string; expiry: string }) {
    this.cards.update(current => [...current, card]);
  }

  updateCard(index: number, updatedCard: { cardName: string; cardCode: string; ccv: string; expiry: string }) {
    this.cards.update(current => {
      const newCards = [...current];
      newCards[index] = updatedCard;
      return newCards;
    });
  }

  deleteCard(index: number) {
    this.cards.update(current => current.filter((_, i) => i !== index));
  }
}
