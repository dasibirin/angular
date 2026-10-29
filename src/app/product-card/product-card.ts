import { Component, Input } from '@angular/core';

export interface Product {
  name: string;
  company: string;
  description: string;
  price: number;
  discountPercent: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <h2>{{ product.name }}</h2>
    <p>חברה: {{ product.company }}</p>
    <p>{{ product.description }}</p>
    <strong>מחיר מקורי: {{ product.price }} ₪</strong>
    <p>הנחה: {{ discountAmount }} ₪</p>
    <p>מחיר לאחר הנחה: {{ finalPrice }} ₪</p>
    @if (discountAmount > 300) {
      <strong>הנחה משתלמת</strong>
    }
  `,
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

  get discountAmount(): number {
    return (this.product.price * this.product.discountPercent) / 100;
  }

  get finalPrice(): number {
    return this.product.price - this.discountAmount;
  }
}
