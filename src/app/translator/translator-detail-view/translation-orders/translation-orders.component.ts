import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationOrder } from 'src/app/_interfaces/translation-order';

@Component({
  selector: 'app-translation-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'translation-orders.component.html',
  styleUrls: ['translation-orders.component.css']
})
export class TranslationOrdersComponent implements OnInit {
  @Input() orders: TranslationOrder[] | undefined;
  @Output() onOrderClick: EventEmitter<TranslationOrder> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onOrderClicked = (order: TranslationOrder) => {
    this.onOrderClick.emit(order);
  }
}
