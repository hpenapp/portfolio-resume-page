import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="resume" class="py-24 px-4 md:px-10 max-w-5xl mx-auto border-t border-gray-800">
      
      <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-8" data-aos="fade-up">
        <div>
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            Detailed <span class="text-primary">Resume</span>
          </h2>
          <p class="text-gray-400 font-mono text-sm tracking-widest uppercase">
            Full professional background
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center gap-6">
          <!-- Language Toggle -->
          <div class="flex bg-gray-900 p-1 rounded-sm border border-gray-800">
            <button (click)="setLanguage('en')" 
                    [class.bg-primary]="currentLanguage === 'en'"
                    [class.text-background]="currentLanguage === 'en'"
                    class="px-4 py-1.5 text-xs font-bold transition-all duration-300 rounded-sm">EN</button>
            <button (click)="setLanguage('es')" 
                    [class.bg-primary]="currentLanguage === 'es'"
                    [class.text-background]="currentLanguage === 'es'"
                    class="px-4 py-1.5 text-xs font-bold transition-all duration-300 rounded-sm">ES</button>
          </div>

          <!-- Download Button -->
          <a [href]="currentLanguage === 'en' ? 'assets/cv-en.pdf' : 'assets/cv-es.pdf'"
             [download]="currentLanguage === 'en' ? 'cv-en.pdf' : 'cv-es.pdf'"
             class="px-8 py-3 bg-primary text-background font-bold rounded-sm hover:bg-cyan-300 transition-colors flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(34,211,238,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            {{ currentLanguage === 'en' ? 'Download CV' : 'Descargar CV' }}
          </a>
        </div>
      </div>

      <!-- Timeline container: padding-left creates the gutter for the line and dots -->
      <div class="relative pl-10 md:pl-14">
        <!-- Vertical line: centered in gutter. pl-10=40px → center=20px → left-5. pl-14=56px → center=28px → md:left-7 -->
        <div class="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gray-800 to-transparent"></div>

        <div class="space-y-20">
          <div *ngFor="let exp of experiences; let i = index"
               class="relative"
               data-aos="fade-up" [attr.data-aos-delay]="i * 50">

            <!-- Dot: absolute relative to the ngFor item (which starts at pl-10=40px / pl-14=56px from outer).
                 Line is at left-5=20px (mobile) and left-7=28px (md) from outer.
                 Dot left-edge from outer = line_center - half_dot = 20-8=12px / 28-8=20px.
                 Dot left relative to ngFor item = 12-40=-28px (-left-7) / 20-56=-36px (md:-left-9). -->
            <div class="absolute -left-7 md:-left-9 top-[6px] w-4 h-4 bg-background border-2 border-primary rounded-full z-10 transition-colors hover:bg-primary"></div>

            <div class="group">
              <!-- Content -->
              <div class="flex-grow">
                <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 class="text-2xl font-bold text-white tracking-tight">
                    {{ currentLanguage === 'es' && exp.translations?.es ? exp.translations?.es?.role : exp.role }}
                  </h3>
                  <span class="text-primary font-mono text-sm font-bold bg-primary/10 px-3 py-1 rounded-sm">{{ exp.period }}</span>
                </div>

                <p class="text-xl text-gray-300 font-bold mb-4 flex items-center">
                  {{ exp.company }}
                  <span class="mx-3 text-gray-700">|</span>
                  <span class="text-gray-500 text-sm font-normal uppercase tracking-widest">{{ exp.location }}</span>
                </p>

                <p class="text-gray-400 mb-6 leading-relaxed max-w-4xl italic">
                  {{ currentLanguage === 'es' && exp.translations?.es ? exp.translations?.es?.description : exp.description }}
                </p>

                <div class="mb-8 space-y-4" *ngIf="getAchievements(exp)?.length">
                  <div *ngFor="let achievement of getAchievements(exp)" class="flex items-start text-gray-300 text-base leading-relaxed">
                    <span class="text-primary mr-3 mt-1.5 flex-shrink-0">
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </span>
                    {{ achievement }}
                  </div>
                </div>

                <div class="flex flex-wrap gap-2" *ngIf="exp.skills?.length">
                  <span *ngFor="let skill of exp.skills" class="text-[10px] font-bold uppercase tracking-widest bg-gray-900 text-gray-500 border border-gray-800 px-3 py-1 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                    {{ skill }}
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
