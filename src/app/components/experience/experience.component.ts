import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-24 px-4 md:px-10 max-w-6xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-5xl font-bold mb-8">
          Professional <span class="text-primary">Experience</span>
        </h2>
        <a href="#resume" class="inline-flex items-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 font-bold uppercase tracking-wider text-sm rounded-sm">
          View Full Resume
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
      
      <div class="relative border-l-2 border-gray-800 ml-4 md:ml-6 max-w-4xl mx-auto">
        
        <div *ngFor="let exp of experiences; let i = index" 
             class="mb-12 relative pl-8 md:pl-12"
             data-aos="fade-up" [attr.data-aos-delay]="i * 100">
             
          <!-- Simple Dot -->
          <div class="absolute -left-[11px] top-2 w-5 h-5 bg-background border-4 border-primary rounded-full z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          
          <!-- Simple Content -->
          <div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
            <h3 class="text-2xl font-bold text-white">{{ exp.role }}</h3>
            <span class="text-primary font-mono text-sm mt-1 md:mt-0">{{ exp.period }}</span>
          </div>
          
          <p class="text-lg text-gray-400 font-medium">{{ exp.company }}</p>
          
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
  private dataService = inject(DataService);
  experiences: Experience[] = [];

  ngOnInit(): void {
    this.dataService.getExperience().subscribe(data => {
      this.experiences = data;
    });
  }
}
