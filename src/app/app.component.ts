import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ResumeComponent } from './components/resume/resume.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    SummaryComponent,
    TechStackComponent, 
    ExperienceComponent,
    ProjectsComponent, 
    CertificationsComponent, 
    ResumeComponent
  ],
  template: `
    <main class="min-h-screen">
      <app-hero></app-hero>
      <app-summary></app-summary>
      <app-tech-stack></app-tech-stack>
      <app-projects></app-projects>
      <!-- <app-experience></app-experience> -->
      <app-resume></app-resume>
      <app-certifications></app-certifications>
      
      <footer class="py-8 text-center border-t border-gray-800 mt-20">
        <p class="text-gray-500 text-sm">
          &copy; {{ currentYear }} Humberto Gerardo Peña | Data Engineer. Desarrollado con Angular & Tailwind CSS.
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
