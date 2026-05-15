import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Certification } from '../../models/certification.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="py-20 px-4 md:px-10 bg-cardBg/30 border-t border-gray-800">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-up">
          Credentials <span class="text-primary">& Achievements</span>
        </h2>
        
        <!-- Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          <button *ngFor="let tab of tabs" 
                  (click)="setTab(tab)"
                  [class.bg-primary]="activeTab === tab"
                  [class.text-background]="activeTab === tab"
                  [class.bg-transparent]="activeTab !== tab"
                  [class.text-gray-300]="activeTab !== tab"
                  class="px-6 py-2 rounded-full border border-primary transition-all duration-300 hover:bg-primary hover:text-background font-medium cursor-pointer">
            {{ tab }}
          </button>
        </div>

        <div class="flex flex-wrap justify-center gap-8">
          <div *ngFor="let cert of filteredCertifications; let i = index" 
               class="glass-card p-6 flex flex-col items-center text-center group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm animate-fade-in-up"
               [ngClass]="{'border-primary shadow-[0_0_15px_rgba(34,211,238,0.2)]': cert.highlight}"
               data-aos="fade-up" [attr.data-aos-delay]="i * 100">
            
            <div class="w-32 h-32 mb-6 relative">
              <div class="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" *ngIf="cert.highlight"></div>
              <img *ngIf="cert.badgeUrl" [src]="cert.badgeUrl" [alt]="cert.name" class="w-full h-full object-contain relative z-10 drop-shadow-xl group-hover:scale-105 transition-transform duration-300">
              <div *ngIf="!cert.badgeUrl" class="w-full h-full bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700">
                <svg class="w-12 h-12 text-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
            </div>
            
            <span class="text-xs font-bold text-primary mb-2 uppercase tracking-widest">{{ cert.type }}</span>
            <h3 class="text-lg font-bold text-white mb-2 leading-snug">{{ cert.name }}</h3>
            <p class="text-textSecondary font-medium mb-4">{{ cert.issuer }} • {{ cert.date }}</p>
            
            <a *ngIf="cert.verificationUrl && cert.verificationUrl !== '#'" [href]="cert.verificationUrl" target="_blank" class="mt-auto px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-semibold transition-colors flex items-center">
              Verify
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
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
