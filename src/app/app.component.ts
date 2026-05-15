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
      <section class="py-24 px-4 text-center max-w-4xl mx-auto" data-aos="fade-up">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white">Looking for a Data Engineer for your team?</h2>
        <p class="text-[rgba(255,255,255,0.7)] text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Let's talk about how I can add value to your data projects or scale your analytical architecture.</p>
        <a href="mailto:hgerardop01@gmail.com" class="inline-flex items-center px-8 py-4 bg-primary text-background font-bold text-lg rounded-sm hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:-translate-y-1">
          Contact Me
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </section>

      <footer class="py-8 text-center border-t border-gray-800 mt-10">
        <p class="text-textSecondary text-sm">
          &copy; {{ currentYear }} Humberto Gerardo Peña | Data Engineer. Built with Angular & Tailwind CSS.
        </p>
      </footer>
    </main>
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
