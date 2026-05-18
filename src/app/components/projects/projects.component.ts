import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-32 px-4 md:px-10 border-t border-white/5 relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="mb-20 text-center" data-aos="fade-up">
          <h2 class="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Featured <span class="text-primary">Projects</span>
          </h2>
          <p class="text-textSecondary text-lg max-w-2xl mx-auto leading-relaxed">A selection of technical implementations ranging from data pipelines to AI-driven analytical tools.</p>
        </div>
        
        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
          <button *ngFor="let filter of filters" 
                  (click)="setFilter(filter)"
                  [ngClass]="{
                    'bg-primary text-background border-primary': activeFilter === filter,
                    'bg-white/5 text-gray-400 border-white/10': activeFilter !== filter
                  }"
                  class="px-8 py-2.5 rounded-full border transition-all duration-500 ease-out-quint font-bold text-sm hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md">
            {{ filter }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div *ngFor="let project of filteredProjects; let i = index" 
               class="bezel-container group animate-fade-in-up"
               [style.animation-delay.ms]="i * 50"
               (click)="openModal(project)">
            <div class="bezel-inner glass-card flex flex-col h-full cursor-pointer">
              
              <div class="aspect-video relative overflow-hidden bg-[#0f172a]">
                <!-- Image Display -->
                <img *ngIf="project.imageUrl" [src]="project.imageUrl" [alt]="project.title" 
                     class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out-quint">
                <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                
                <!-- Fallback/Overlay Icon -->
                <div class="absolute inset-0 flex items-center justify-center bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                </div>
              </div>
              
              <div class="p-8 flex-grow flex flex-col">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-[10px] font-bold text-primary uppercase tracking-[0.2em] px-3 py-1 bg-primary/10 rounded-full border border-primary/20">{{ project.category }}</span>
                  <span *ngIf="project.client" class="text-[10px] font-bold text-gray-500 uppercase tracking-[0.1em]">{{ project.client }}</span>
                </div>

                <h3 class="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">{{ project.title }}</h3>
                <p class="text-gray-400 text-sm mb-8 flex-grow line-clamp-3 leading-relaxed">{{ project.description }}</p>
                
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of project.technologies | slice:0:3" 
                        class="text-[11px] font-mono font-bold bg-white/5 text-gray-500 px-3 py-1 rounded-md border border-white/5 transition-colors group-hover:border-primary/10 group-hover:text-gray-400">
                    {{ tech }}
                  </span>
                  <span *ngIf="project.technologies.length > 3" class="text-[11px] font-mono font-bold text-primary/40 px-1 py-1">
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail Modal -->
      <div *ngIf="selectedProject" class="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 animate-fade-in">
        <div class="absolute inset-0 bg-background/80 backdrop-blur-xl" (click)="closeModal()"></div>
        
        <div class="relative w-full max-w-5xl bg-background border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden max-h-[90vh] flex flex-col animate-fade-in-up"
             data-aos="zoom-in" data-aos-duration="500">
             
          <button (click)="closeModal()" class="absolute top-6 right-6 z-20 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all active:scale-90 border border-white/10 backdrop-blur-md">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div class="h-64 md:h-96 relative flex-shrink-0 overflow-hidden">
              <img *ngIf="selectedProject.imageUrl" [src]="selectedProject.imageUrl" [alt]="selectedProject.title" class="absolute inset-0 w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              
              <div class="absolute bottom-8 left-8 md:left-12">
                <span class="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/30 mb-4 backdrop-blur-md">
                  {{ selectedProject.category }}
                </span>
                <h3 class="text-4xl md:text-6xl font-bold text-white tracking-tighter">{{ selectedProject.title }}</h3>
              </div>
          </div>
          
          <div class="p-8 md:p-12 overflow-y-auto custom-scrollbar">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div class="lg:col-span-2">
                <h4 class="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Overview</h4>
                <p class="text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-10 font-medium">
                  {{ selectedProject.longDescription || selectedProject.description }}
                </p>
                
                <h4 class="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Stack</h4>
                <div class="flex flex-wrap gap-3">
                  <span *ngFor="let tech of selectedProject.technologies" class="px-5 py-2.5 bg-white/5 text-gray-300 rounded-xl text-sm font-bold border border-white/10 hover:border-primary/30 transition-colors">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="space-y-8">
                <div *ngIf="selectedProject.client" class="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h4 class="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Client</h4>
                  <p class="text-white font-bold">{{ selectedProject.client }}</p>
                </div>

                <div class="flex flex-col gap-4 pt-6">
                  <a *ngIf="selectedProject.link" [href]="selectedProject.link" target="_blank" class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-background font-bold rounded-full hover:bg-cyan-300 transition-all active:scale-[0.97] shadow-lg">
                    <span>Live Demo</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                  <a *ngIf="selectedProject.githubLink" [href]="selectedProject.githubLink" target="_blank" class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all active:scale-[0.97]">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                    <span>Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
  private dataService = inject(DataService);
  
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  
  filters = ['All', 'Data Engineering', 'Angular', 'Automation'];
  activeFilter = 'All';
  
  selectedProject: Project | null = null;

  ngOnInit(): void {
    this.dataService.getProjects().subscribe(data => {
      this.projects = data;
      this.filteredProjects = data;
    });
  }

  setFilter(filter: string): void {
    if (this.activeFilter === filter) return;
    this.activeFilter = filter;
    
    let items = filter === 'All' ? this.projects : this.projects.filter(p => p.category === filter);
    // Create new references to force Angular to re-render and trigger CSS animations seamlessly
    this.filteredProjects = items.map(item => ({...item}));
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    // Ocultar scroll del body al abrir el modal
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }
}
