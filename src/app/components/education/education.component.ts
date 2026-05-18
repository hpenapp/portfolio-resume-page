import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-32 px-4 md:px-10 max-w-7xl mx-auto border-t border-white/5">
      
      <div class="mb-24" data-aos="fade-up">
        <h2 class="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
          Academic <span class="text-primary">Foundations</span>
        </h2>
        <p class="text-textSecondary text-lg max-w-xl leading-relaxed">
          Educational background that provided the theoretical and practical basis for my engineering career.
        </p>
      </div>

      <!-- Timeline container -->
      <div class="relative pl-8 md:pl-20">
        <!-- Vertical line -->
        <div class="absolute left-4 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/5 to-transparent"></div>

        <div class="space-y-32">
          <div *ngFor="let ed of educationList; let i = index"
               class="relative group/item"
               data-aos="fade-up" [attr.data-aos-delay]="i * 50">

            <!-- Dot -->
            <div class="absolute -left-5 md:-left-11 top-[10px] w-2.5 h-2.5 bg-background border-2 border-primary rounded-full z-10 transition-all duration-500 group-hover/item:scale-150 group-hover/item:bg-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

            <div class="group">
              <!-- Content -->
              <div class="flex-grow">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                  <h3 class="text-3xl md:text-5xl font-bold text-white tracking-tighter group-hover:text-primary transition-colors duration-500">
                    {{ ed.degree }}
                  </h3>
                  <span class="text-primary font-mono text-sm font-bold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-md self-start md:mb-2">{{ ed.period }}</span>
                </div>

                <div class="mb-10">
                  <p class="text-xl md:text-2xl text-gray-400 font-bold flex flex-wrap items-center tracking-tight mb-4">
                    {{ ed.institution }}
                    <span class="mx-3 text-white/10 hidden md:inline">/</span>
                    <span class="text-gray-500 text-lg font-medium capitalize">{{ ed.location }}</span>
                  </p>
                  <span class="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] bg-primary/5 px-3 py-1 rounded-md border border-primary/10">GPA: {{ ed.gpa }}</span>
                </div>

                <div class="p-6 bg-white/5 rounded-2xl border border-white/5 max-w-4xl" *ngIf="ed.modules?.length">
                  <div class="flex items-start gap-4">
                    <span class="text-primary mt-1 flex-shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </span>
                    <p class="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                      <span class="text-white font-bold block mb-2 uppercase tracking-widest text-[10px]">Core Modules</span> 
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
