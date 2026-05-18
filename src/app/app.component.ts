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
        
        <!-- CTA Section -->
        <section class="py-32 px-4 text-center max-w-4xl mx-auto" data-aos="fade-up">
          <h2 class="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tighter">Looking for a Data Engineer for your team?</h2>
          <p class="text-textSecondary text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">Let's talk about how I can add value to your data projects or scale your analytical architecture.</p>
          <a href="mailto:hgerardop01@gmail.com" class="inline-flex items-center px-10 py-5 bg-primary text-background font-bold text-xl rounded-full hover:bg-cyan-300 transition-all duration-500 ease-out-quint shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:-translate-y-1 active:scale-[0.97]">
            Contact Me
            <div class="ml-3 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </a>
        </section>

        <footer class="py-12 text-center border-t border-white/5 mt-10">
          <p class="text-textSecondary text-sm tracking-wide">
            &copy; {{ currentYear }} Humberto Gerardo Peña | Data Engineer. Crafted with Angular & Tailwind.
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
