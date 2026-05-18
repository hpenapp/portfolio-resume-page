import { Component, OnInit, OnDestroy, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, PersonalInfo } from '../../services/data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden isolate">
      <!-- Neural Network Background -->
      <canvas #neuralCanvas class="absolute inset-0 w-full h-full -z-10 bg-[#0f172a]"></canvas>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-5"></div>
      
      <div class="relative z-10">
        <h1 class="text-6xl md:text-8xl font-bold mb-12 tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-fade-in-up">
          {{ personalInfo?.fullName }}
        </h1>

        <!-- Simplified Typewriter Display -->
        <div class="max-w-4xl mx-auto mb-20 animate-fade-in-up" style="animation-delay: 100ms">
          <div class="flex items-center justify-center min-h-[4rem]">
            <span class="text-2xl md:text-4xl text-primary font-mono font-black tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              {{ displayedText }}
            </span>
            <span class="ml-4 w-1.5 h-10 md:h-14 bg-primary animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-full"></span>
          </div>
        </div>

        <!-- Large, Clean Social Icons -->
        <div class="flex flex-wrap justify-center gap-12 mb-20 animate-fade-in-up" style="animation-delay: 200ms" *ngIf="personalInfo">
          <!-- LinkedIn -->
          <a [href]="personalInfo.linkedin" target="_blank" class="clean-social-link" title="LinkedIn">
            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
          </a>
          <!-- GitHub -->
          <a [href]="personalInfo.github" target="_blank" class="clean-social-link" title="GitHub">
            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
          </a>
          <!-- Email -->
          <a [href]="'mailto:' + personalInfo.email" class="clean-social-link" title="Email">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </a>
        </div>
      </div>

      <div class="absolute bottom-12 animate-bounce cursor-pointer z-10 opacity-30 hover:opacity-100 transition-opacity duration-500">
        <a href="#summary" aria-label="Scroll to summary section">
          <svg class="w-8 h-8 text-primary/50 hover:text-primary transition-all duration-500 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>
    `,
    styles: [`
    .clean-social-link {
      @apply text-primary/40 transition-all duration-300 hover:text-primary hover:-translate-y-2 active:scale-90 active:filter active:blur-[1px];
      transition-timing-function: var(--ease-out);
    }
    .clean-social-link svg {
      @apply drop-shadow-[0_0_0_rgba(34,211,238,0)];
      transition: filter 300ms var(--ease-out);
    }
    .clean-social-link:hover svg {
      @apply drop-shadow-[0_0_20px_rgba(34,211,238,0.6)];
    }
    .tech-social-link {
      @apply flex flex-col items-center gap-3 transition-all duration-300;
      transition-timing-function: var(--ease-out);
    }
    .tech-icon-wrapper {
      @apply w-16 h-16 bg-[#0a0a0a] rounded-2xl border border-white/5 flex items-center justify-center text-primary/50 transition-all duration-300 group-hover:text-primary group-hover:border-primary/40 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] active:scale-95 relative overflow-hidden;
      transition-timing-function: var(--ease-out);
    }
    .tech-icon-wrapper::after {
      content: '';
      @apply absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300;
    }
    .tech-social-label {
      @apply text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-primary/70 transition-colors duration-300;
    }
    `]
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('neuralCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private dataService = inject(DataService);
  personalInfo: PersonalInfo | null = null;

  displayedText = '';
  private currentSpecialtyIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private timeoutId: any;

  // Animation variables
  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];
  private animationId: any;
  private mouse = { x: -1000, y: -1000 };
  private boundMouseMove = this.onMouseMove.bind(this);
  private boundResize = this.handleResize.bind(this);

  ngOnInit() {
    this.dataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
      this.typeEffect();
    });
  }

  ngAfterViewInit() {
    this.initNeuralBackground();
    window.addEventListener('mousemove', this.boundMouseMove);
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('mousemove', this.boundMouseMove);
    window.removeEventListener('resize', this.boundResize);
  }

  private onMouseMove(e: MouseEvent) {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.mouse.x = (e.clientX - rect.left) * dpr;
    this.mouse.y = (e.clientY - rect.top) * dpr;
  }

  private initNeuralBackground() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    window.addEventListener('resize', this.boundResize);
    this.handleResize();
    this.animate();
  }

  private handleResize() {
    const canvas = this.canvasRef.nativeElement;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    // Context scale is not needed if we multiply all coordinates by DPR, 
    // but clearing and drawing particles is easier if we scale the context.
    // Actually, I will manage it by scaling coordinates in animate.
    this.createParticles();
  }

  private createParticles() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const particleCount = Math.floor((width * height) / 10000);
    
    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1.5,
        originalVx: 0,
        originalVy: 0
      });
      this.particles[i].originalVx = this.particles[i].vx;
      this.particles[i].originalVy = this.particles[i].vy;
    }
  }

  private animate() {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvasWidth = width * dpr;
    const canvasHeight = height * dpr;
    
    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    this.particles.forEach((p, i) => {
      // Mouse interaction (mouse.x/y are already in canvas coordinates)
      const dxm = p.x * dpr - this.mouse.x;
      const dym = p.y * dpr - this.mouse.y;
      const distm = Math.sqrt(dxm * dxm + dym * dym);
      
      if (distm < 200 * dpr) {
        const angle = Math.atan2(dym, dxm);
        const force = (200 * dpr - distm) / (200 * dpr);
        p.vx += (Math.cos(angle) * force * 0.2) / dpr;
        p.vy += (Math.sin(angle) * force * 0.2) / dpr;
      } else {
        p.vx += (p.originalVx - p.vx) * 0.05;
        p.vy += (p.originalVy - p.vy) * 0.05;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      this.ctx.fillStyle = '#22d3ee';
      this.ctx.beginPath();
      this.ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
      this.ctx.fill();

      // Connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = (p.x - p2.x) * dpr;
        const dy = (p.y - p2.y) * dpr;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180 * dpr) {
          const opacity = (1 - dist / (180 * dpr)) * 0.4;
          this.ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
          this.ctx.lineWidth = 1 * dpr;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x * dpr, p.y * dpr);
          this.ctx.lineTo(p2.x * dpr, p2.y * dpr);
          this.ctx.stroke();
        }
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private typeEffect() {
    if (!this.personalInfo || !this.personalInfo.specialties.length) return;
    const currentWord = this.personalInfo.specialties[this.currentSpecialtyIndex];
    if (this.isDeleting) {
      this.displayedText = currentWord.substring(0, this.displayedText.length - 1);
      this.typingSpeed = 50;
    } else {
      this.displayedText = currentWord.substring(0, this.displayedText.length + 1);
      this.typingSpeed = 100;
    }
    if (!this.isDeleting && this.displayedText === currentWord) {
      this.typingSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedText === '') {
      this.isDeleting = false;
      this.currentSpecialtyIndex = (this.currentSpecialtyIndex + 1) % this.personalInfo.specialties.length;
      this.typingSpeed = 500;
    }
    this.timeoutId = setTimeout(() => this.typeEffect(), this.typingSpeed);
  }
}
