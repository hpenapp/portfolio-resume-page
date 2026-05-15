import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-24 px-4 md:px-10 max-w-5xl mx-auto border-t border-gray-800">
      
      <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-8" data-aos="fade-up">
        <div>
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            Education <span class="text-primary">Background</span>
          </h2>
          <p class="text-textSecondary font-mono text-sm tracking-widest uppercase">
            Academic History
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center gap-6">
          <!-- Optional actions can go here -->
        </div>
      </div>

      <!-- Timeline container -->
      <div class="relative pl-10 md:pl-14">
        <!-- Vertical line -->
        <div class="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gray-800 to-transparent"></div>

        <div class="space-y-20">
          <div *ngFor="let ed of educationList; let i = index"
               class="relative"
               data-aos="fade-up" [attr.data-aos-delay]="i * 50">

            <!-- Dot -->
            <div class="absolute -left-7 md:-left-9 top-[6px] w-4 h-4 bg-background border-2 border-primary rounded-full z-10 transition-colors hover:bg-primary"></div>

            <div class="group">
              <!-- Content -->
              <div class="flex-grow">
                <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 class="text-2xl font-bold text-white tracking-tight">
                    {{ ed.degree }}
                  </h3>
                  <span class="text-primary font-mono text-sm font-bold bg-primary/10 px-3 py-1 rounded-sm">{{ ed.period }}</span>
                </div>

                <p class="text-xl text-gray-300 font-bold mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                  {{ ed.institution }}
                  <span class="text-gray-700 hidden sm:inline">|</span>
                  <span class="text-textSecondary text-sm font-normal uppercase tracking-widest">{{ ed.location }}</span>
                  <span class="text-gray-700 hidden sm:inline">|</span>
                  <span class="text-primary text-sm font-bold uppercase tracking-widest">GPA: {{ ed.gpa }}</span>
                </p>

                <div class="mb-8" *ngIf="ed.modules?.length">
                  <div class="flex items-center gap-2">
                    <span class="text-primary flex-shrink-0">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </span>
                    <p class="text-xs md:text-sm text-textSecondary font-medium">
                      <span class="text-gray-300 font-bold mr-1">Modules:</span> 
                      {{ ed.modules.join(' • ') }}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  `
})
export class EducationComponent implements OnInit {
  private dataService = inject(DataService);
  educationList: Education[] = [];

  ngOnInit(): void {
    this.dataService.getEducation().subscribe(data => {
      this.educationList = data;
    });
  }
}
