import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="resume" class="py-32 px-4 md:px-10 max-w-7xl mx-auto border-t border-white/5">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-12" data-aos="fade-up">
        <div>
          <h2 class="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Technical <span class="text-primary">Journey</span>
          </h2>
          <p class="text-textSecondary text-lg max-w-xl leading-relaxed">
            Professional trajectory focused on engineering robust data ecosystems and scalable solutions.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
          <!-- Language Toggle -->
          <div class="flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <button (click)="setLanguage('en')" 
                    [class.bg-primary]="currentLanguage === 'en'"
                    [class.text-background]="currentLanguage === 'en'"
                    [class.shadow-lg]="currentLanguage === 'en'"
                    class="px-6 py-2 text-xs font-bold transition-all duration-500 rounded-full active:scale-95">EN</button>
            <button (click)="setLanguage('es')" 
                    [class.bg-primary]="currentLanguage === 'es'"
                    [class.text-background]="currentLanguage === 'es'"
                    [class.shadow-lg]="currentLanguage === 'es'"
                    class="px-6 py-2 text-xs font-bold transition-all duration-500 rounded-full active:scale-95">ES</button>
          </div>

          <!-- Download Button -->
          <a [href]="currentLanguage === 'en' ? 'assets/cv-en.pdf' : 'assets/cv-es.pdf'"
             [download]="currentLanguage === 'en' ? 'cv-en.pdf' : 'cv-es.pdf'"
             class="group w-full sm:w-auto px-8 py-4 bg-primary text-background font-bold rounded-full hover:bg-cyan-300 transition-all duration-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)] active:scale-[0.97]">
            <svg class="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            {{ currentLanguage === 'en' ? 'Download Resume' : 'Descargar CV' }}
          </a>
        </div>
      </div>

      <!-- Timeline container -->
      <div class="relative pl-8 md:pl-20">
        <!-- Vertical line -->
        <div class="absolute left-4 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/5 to-transparent"></div>

        <div class="space-y-32">
          <div *ngFor="let exp of experiences; let i = index"
               class="relative group/item"
               data-aos="fade-up" [attr.data-aos-delay]="i * 50">

            <!-- Dot -->
            <div class="absolute -left-5 md:-left-11 top-[10px] w-2.5 h-2.5 bg-background border-2 border-primary rounded-full z-10 transition-all duration-500 group-hover/item:scale-150 group-hover/item:bg-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

            <div class="group">
              <!-- Content -->
              <div class="flex-grow">
                <div class="flex flex-col mb-8">
                  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                    <h3 class="text-3xl md:text-5xl font-bold text-white tracking-tighter group-hover:text-primary transition-colors duration-500">
                      {{ currentLanguage === 'es' && exp.translations?.es ? exp.translations?.es?.role : exp.role }}
                    </h3>
                    <span class="text-primary font-mono text-sm font-bold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-md self-start md:mb-2">{{ exp.period }}</span>
                  </div>
                  
                  <p class="text-xl md:text-2xl text-gray-400 font-bold flex flex-wrap items-center tracking-tight">
                    {{ exp.company }}
                    <span class="mx-3 text-white/10 hidden md:inline">/</span>
                    <span class="text-gray-500 text-lg font-medium capitalize">{{ exp.location | lowercase }}</span>
                  </p>
                </div>

                <p class="text-gray-400 mb-10 text-lg leading-relaxed max-w-4xl font-medium border-l-2 border-white/5 pl-6 italic">
                  {{ currentLanguage === 'es' && exp.translations?.es ? exp.translations?.es?.description : exp.description }}
                </p>

                <div class="mb-12 space-y-6" *ngIf="getAchievements(exp)?.length">
                  <div *ngFor="let achievement of getAchievements(exp)" class="flex items-start text-gray-300 text-lg leading-relaxed group/ach">
                    <span class="text-primary mr-5 mt-2.5 flex-shrink-0 group-hover/ach:translate-x-1 transition-transform">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                    <span [innerHTML]="achievement" class="font-medium"></span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2.5" *ngIf="exp.skills?.length">
                  <span *ngFor="let skill of exp.skills" class="text-[11px] font-bold uppercase tracking-wider bg-white/5 text-gray-500 px-4 py-2 rounded-lg border border-white/5 hover:border-primary/30 hover:text-gray-300 transition-all cursor-default">
                    {{ skill | lowercase }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  `
})
export class ResumeComponent implements OnInit {
  private dataService = inject(DataService);
  experiences: Experience[] = [];
  currentLanguage: 'en' | 'es' = 'en';

  ngOnInit(): void {
    this.dataService.getExperience().subscribe(data => {
      this.experiences = data;
    });
  }

  setLanguage(lang: 'en' | 'es'): void {
    this.currentLanguage = lang;
  }

  getAchievements(exp: Experience): string[] {
    if (this.currentLanguage === 'es' && exp.translations?.es) {
      return exp.translations.es.achievements;
    }
    return exp.achievements || [];
  }
}
