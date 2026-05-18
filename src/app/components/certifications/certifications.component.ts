import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Certification } from '../../models/certification.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="py-32 px-4 md:px-10 border-t border-white/5 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20 text-center" data-aos="fade-up">
          <h2 class="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Credentials <span class="text-primary">& Achievements</span>
          </h2>
          <p class="text-textSecondary text-lg max-w-2xl mx-auto leading-relaxed">Verified expertise and continuous learning in data engineering and emerging technologies.</p>
        </div>
        
        <!-- Tabs -->
        <div class="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
          <button *ngFor="let tab of tabs" 
                  (click)="setTab(tab)"
                  [ngClass]="{
                    'bg-primary text-background border-primary': activeTab === tab,
                    'bg-white/5 text-gray-400 border-white/10': activeTab !== tab
                  }"
                  class="px-8 py-2.5 rounded-full border transition-all duration-500 ease-out-quint font-bold text-sm hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md">
            {{ tab }}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let cert of filteredCertifications; let i = index" 
               class="bezel-container group animate-fade-in-up"
               [style.animation-delay.ms]="i * 50"
               data-aos="fade-up">
            
            <div class="bezel-inner glass-card p-8 flex flex-col items-center text-center h-full">
              <div class="w-32 h-32 mb-8 relative">
                <div class="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-all duration-700" *ngIf="cert.highlight"></div>
                <div class="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <img *ngIf="cert.badgeUrl" [src]="cert.badgeUrl" [alt]="cert.name" 
                     class="w-full h-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out-quint">
                
                <div *ngIf="!cert.badgeUrl" class="w-full h-full bg-white/5 rounded-full flex items-center justify-center border border-white/10 relative z-10">
                  <svg class="w-12 h-12 text-gray-600 group-hover:text-primary transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
              </div>
              
              <div class="mb-4">
                <span class="text-[10px] font-bold text-primary uppercase tracking-[0.2em] px-3 py-1 bg-primary/10 rounded-full border border-primary/20">{{ cert.type }}</span>
              </div>
              
              <h3 class="text-xl font-bold text-white mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors duration-500">{{ cert.name }}</h3>
              <p class="text-gray-500 text-sm font-bold mb-8">{{ cert.issuer }} <span class="mx-2 text-white/5">•</span> {{ cert.date }}</p>
              
              <a *ngIf="cert.verificationUrl && cert.verificationUrl !== '#'" [href]="cert.verificationUrl" target="_blank" 
                 class="mt-auto inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full text-xs font-bold transition-all border border-white/10 active:scale-95">
                <span>Verify</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CertificationsComponent implements OnInit {
  private dataService = inject(DataService);
  
  certifications: Certification[] = [];
  filteredCertifications: Certification[] = [];
  
  tabs = ['All', 'Certification', 'Badge', 'Course'];
  activeTab = 'All';

  ngOnInit(): void {
    this.dataService.getCertifications().subscribe(data => {
      this.certifications = data;
      this.filteredCertifications = data;
    });
  }

  setTab(tab: string): void {
    if (this.activeTab === tab) return;
    this.activeTab = tab;
    
    let items = tab === 'All' ? this.certifications : this.certifications.filter(c => c.type === tab);
    // Create new references to force Angular to re-render and trigger CSS animations seamlessly
    this.filteredCertifications = items.map(item => ({...item}));
  }
}
