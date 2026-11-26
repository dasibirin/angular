import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('טופס הזמנת ביקור טכנאי');

  visitDate = '';
  requesterName = '';
  address = '';
  city = '';
  phone = '';
  visitReason = '';
  invoiceNumber = '';
  problemDescription = '';
  submitted = false;

  onSubmit(form: NgForm): void {
    this.submitted = true;

    if (form.valid) {
      console.log('פרטי ההזמנה:', form.value);
      return;
    }

    Object.values(form.controls).forEach(control => control.markAsTouched());
  }
}
