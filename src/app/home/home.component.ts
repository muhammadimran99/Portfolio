import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#ff4d05',
      cursorColor: '#ccc',
    });
    const writer1 = new Typewriter(target, {
      typeSpeed: 60,
    });

    const writer2 = new Typewriter(target, {
      typeSpeed: 60,
    });

    writer
      .strings(
        400,
        'Software Engineer.',
        'Front-end Developer.',
        'Back-end Developer.',
        'Full Stack Developer.'
      )
      .start();
  }
  toPortfolio() {
    document
      .getElementById('portfolio')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
