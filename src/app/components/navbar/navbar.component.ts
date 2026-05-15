import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [ngClass]="isScrolled ? 'translate-y-0' : '-translate-y-full'"
         class="fixed w-full z-50 top-0 transition-all duration-500 bg-background/95 backdrop-blur-md shadow-md py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#hero" class="text-primary font-bold text-xl tracking-wider">HP.</a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-6">
              <a *ngFor="let link of navLinks" [href]="link.path"
                 class="text-textMain hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                {{ link.name }}
              </a>
            </div>
          </div>
          
          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button (click)="toggleMobileMenu()" type="button" 
                    class="inline-flex items-center justify-center p-2 rounded-md text-textMain hover:text-primary hover:bg-gray-800 focus:outline-none" 
                    aria-controls="mobile-menu" [attr.aria-expanded]="isMobileMenuOpen">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <svg *ngIf="!isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Icon when menu is open. -->
              <svg *ngIf="isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden transition-all duration-300 ease-in-out overflow-hidden" 
           [class.max-h-64]="isMobileMenuOpen" [class.max-h-0]="!isMobileMenuOpen" 
           id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cardBg border-t border-gray-800 shadow-lg">
          <a *ngFor="let link of navLinks" [href]="link.path" (click)="closeMobileMenu()"
             class="text-textMain hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            {{ link.name }}
          </a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { name: 'About', path: '#summary' },
    { name: 'Tech Stack', path: '#tech-stack' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#resume' },
    { name: 'Education', path: '#education' },
    { name: 'Credentials', path: '#certifications' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
