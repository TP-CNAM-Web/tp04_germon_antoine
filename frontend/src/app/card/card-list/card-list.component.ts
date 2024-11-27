import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-list',
  standalone: false,

  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() cards: any[] = [];
  @Output() edit = new EventEmitter<{ index: number; card: any }>();
  @Output() delete = new EventEmitter<number>();

  onEdit(index: number, card: any) {
    this.edit.emit({ index, card });
  }

  onDelete(index: number) {
    this.delete.emit(index);
  }
}
