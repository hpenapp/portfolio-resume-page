import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EducationComponent } from './components/education/education.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent,
    HeroComponent, 
    SummaryComponent,
    TechStackComponent, 
    ExperienceComponent,
    ProjectsComponent, 
    CertificationsComponent, 
    ResumeComponent,
    EducationComponent
  ],
  template: `
    <div class="noise-overlay min-h-screen bg-background text-white selection:bg-primary/30">
      <app-navbar></app-navbar>
      <main class="min-h-screen">
        <app-hero id="hero"></app-hero>
        <app-summary id="summary"></app-summary>
        <app-tech-stack id="tech-stack"></app-tech-stack>
        <app-projects id="projects"></app-projects>
        <!-- <app-experience></app-experience> -->
        <app-resume id="resume"></app-resume>
        <app-education id="education"></app-education>
        <app-certifications id="certifications"></app-certifications>
        
        <!-- Balanced Minimalist CTA Section -->
        <section class="py-32 px-4 text-center max-w-2xl mx-auto" data-aos="fade-up">
          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 mb-8 transition-all duration-300 hover:border-emerald-500/30 group/cta">
            <div class="relative flex items-center justify-center">
              <span class="absolute w-3 h-3 rounded-full bg-emerald-500/40 animate-ping"></span>
              <span class="relative w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
            </div>
            <span class="text-[10px] font-bold text-emerald-500/80 uppercase tracking-[0.2em] group-hover/cta:text-emerald-400 transition-colors">Available for new projects</span>
          </div>
          
          <h2 class="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-white leading-tight">
            I'm always open to discussing new data challenges and opportunities.
          </h2>

          <a href="mailto:hgerardop01@gmail.com" 
             class="inline-flex items-center gap-4 px-10 py-4 bg-primary text-background font-bold rounded-full hover:bg-cyan-300 transition-all duration-300 active:scale-95 active:filter active:blur-[1px] shadow-[0_0_20px_rgba(34,211,238,0.15)] group"
             [style.transition-timing-function]="'var(--ease-out)'">
            <span>Get in touch</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" [style.transition-timing-function]="'var(--ease-snappy)'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path>
            </svg>
          </a>
        </section>

        <footer class="py-12 text-center border-t border-white/5 mt-10">
          <p class="text-textSecondary text-sm tracking-wide">
            &copy; {{ currentYear }} Humberto Peña | Data Engineer. Crafted with Angular & Tailwind.
          </p>
        </footer>
      </main>
    </div>
  `
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
}
