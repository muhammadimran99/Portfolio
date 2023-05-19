import { Component } from '@angular/core';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css'],
})
export class MyservicesComponent {
  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
