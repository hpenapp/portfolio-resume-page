import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, PersonalInfo } from '../../services/data.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="summary" class="py-24 px-4 md:px-10 max-w-6xl mx-auto border-t border-gray-800">
      <div class="flex flex-col lg:flex-row gap-12 items-center lg:items-start" *ngIf="personalInfo">
        
        <!-- About Text -->
        <div class="lg:w-7/12" data-aos="fade-right">
          <h2 class="text-3xl md:text-5xl font-bold mb-8">
            About <span class="text-primary">Me</span>
          </h2>
          
          <h3 class="text-xl text-primary font-semibold mb-4">{{ personalInfo.currentRole }}</h3>
          
          <p class="text-lg text-gray-300 leading-relaxed mb-8">
            {{ personalInfo.summary }}
          </p>
          
          <!-- Mini Info Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

          <div class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div>
                <p class="text-sm text-gray-500 font-semibold uppercase tracking-wider">Location</p>
                <p class="text-white">{{ personalInfo.location }}</p>
              </div>
            </div>

            <div class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
              <div>
                <p class="text-sm text-gray-500 font-semibold uppercase tracking-wider">Degree</p>
                <p class="text-white">{{ personalInfo.degree }}</p>
              </div>
            </div>

            <div class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <div>
                <p class="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email</p>
                <a [href]="'mailto:' + personalInfo.email" class="text-white hover:text-primary transition-colors">{{ personalInfo.email }}</a>
              </div>
            </div>

            <div class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <div>
                <p class="text-sm text-gray-500 font-semibold uppercase tracking-wider">Phone</p>
                <p class="text-white">{{ personalInfo.phone }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Decorative Card / Photo -->
        <div class="lg:w-5/12 flex justify-center w-full" data-aos="fade-left">
          <div class="glass-card p-2 rounded-2xl w-full max-w-sm relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div class="relative bg-gray-900 rounded-xl overflow-hidden aspect-[4/5] flex items-center justify-center">
              <img src="/assets/profile.jpeg" alt="Humberto Gerardo Peña Páez" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
        
      </div>
    </section>
  `
})
export class SummaryComponent implements OnInit {
  private dataService = inject(DataService);
  personalInfo: PersonalInfo | null = null;

  ngOnInit() {
    this.dataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });
  }
}
