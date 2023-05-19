import {
  Component,
  ElementRef,
  Renderer2,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @ViewChild('navlist') navlist!: ElementRef;
  menuOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    const header = this.el.nativeElement.querySelector('header');
    this.renderer.listen('window', 'scroll', () => {
      if (window.scrollY > 100) {
        this.renderer.addClass(header, 'sticky');
        this.menuOpen = false;
        this.navlist.nativeElement.classList.remove('open');
        this.menuIcon.nativeElement.classList.remove('bx-x');
      } else {
        this.renderer.removeClass(header, 'sticky');
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.navlist.nativeElement.classList.add('open');
      this.menuIcon.nativeElement.classList.add('bx-x');
    } else {
      this.navlist.nativeElement.classList.remove('open');
      this.menuIcon.nativeElement.classList.remove('bx-x');
    }
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  toServices() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
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
