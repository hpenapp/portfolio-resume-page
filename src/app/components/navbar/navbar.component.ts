import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out-quint"
            [ngClass]="isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'">
      <nav class="w-full px-6 py-4 bg-[#050505]/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl transition-all duration-500">
        <div class="max-w-7xl mx-auto flex items-center justify-between h-10">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#hero" class="text-primary font-black text-2xl tracking-tighter hover:scale-105 transition-transform inline-block drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">HP.</a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-2">
            <a *ngFor="let link of navLinks" [href]="link.path"
               class="text-gray-400 hover:text-white transition-all duration-300 px-5 py-2 rounded-full text-sm font-bold tracking-tight hover:bg-white/5 active:scale-[0.95]">
              {{ link.name }}
            </a>
          </div>
          
          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button (click)="toggleMobileMenu()" type="button" 
                    class="p-2 rounded-full text-white hover:text-primary transition-colors focus:outline-none" 
                    aria-controls="mobile-menu" [attr.aria-expanded]="isMobileMenuOpen">
              <span class="sr-only">Open main menu</span>
              <div class="relative w-6 h-6">
                <span class="absolute block h-0.5 w-6 bg-current transition-all duration-500 ease-out-quint"
                      [ngClass]="isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1.5'"></span>
                <span class="absolute block h-0.5 w-6 bg-current transition-all duration-500 ease-out-quint top-3"
                      [ngClass]="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
                <span class="absolute block h-0.5 w-6 bg-current transition-all duration-500 ease-out-quint"
                      [ngClass]="isMobileMenuOpen ? '-rotate-45 top-3' : 'top-4.5'"></span>
              </div>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div class="md:hidden overflow-hidden transition-all duration-700 ease-out-quint" 
             [style.max-height]="isMobileMenuOpen ? '450px' : '0'">
          <div class="pt-8 pb-6 space-y-2 flex flex-col items-center">
            <a *ngFor="let link of navLinks" [href]="link.path" (click)="closeMobileMenu()"
               class="text-gray-400 hover:text-primary w-full text-center py-4 rounded-2xl text-lg font-bold transition-all hover:bg-white/5 active:scale-95 tracking-tight">
              {{ link.name }}
            </a>
          </div>
        </div>
      </nav>
    </header>
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
