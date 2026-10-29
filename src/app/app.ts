import { Component, signal } from '@angular/core';
import { Product } from './product-card/product-card';
import { ProductCard } from './product-card/product-card';

@Component({
  standalone: true,
  imports: [ProductCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  products: Product[] = [
    {
      name: 'מקרר',
      company: 'LG',
      description: 'מקרר 4 דלתות עם מערכת קירור מתקדמת',
      price: 2000,
      discountPercent: 35,
    },
    {
      name: 'מכונת כביסה',
      company: 'Samsung',
      description: 'מכונת כביסה עם טכנולוגיית EcoBubble לחסכון במים ואנרגיה',
      price: 1500,
      discountPercent: 25,
    },
    {
      name: 'תנור',
      company: 'Bosch',
      description: 'תנור אפייה עם פונקציות מתקדמות לבישול ואפייה',
      price: 2000,
      discountPercent: 15,
    },
    {
      name: 'מייבש כביסה',
      company: 'Bosch',
      description: 'מייבש כביסה עם טכנולוגיית AutoDry לייבוש עדין של הבגדים',
      price: 1200,
      discountPercent: 35,
    },{
      name: 'מחשב נייד',
      company: 'Dell',
      description: 'מחשב נייד עם מעבד Intel Core i7 וכרטיס גרפי NVIDIA',
      price: 4000,
      discountPercent: 10,
    },
    {
      name: 'אוזניות',
      company: 'Bose',
      description: 'אוזניות אלחוטיות עם ביטול רעשים אקטיבי ואיכות סאונד גבוהה',
      price: 800,
      discountPercent: 30,
    }
  ];

  protected readonly title = signal('lesson4');
}
