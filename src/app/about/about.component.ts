import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  private destroy$: Subject<void> = new Subject<void>();
  private observer: IntersectionObserver;
  private writer: Typewriter;

  constructor(private el: ElementRef) {}

  // Download CV
  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('href', '../../assets/imran_CV.pdf');
    link.setAttribute('download', 'IMRAN-CV.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
