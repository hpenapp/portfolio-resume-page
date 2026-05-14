import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 px-4 md:px-10 bg-cardBg/30 relative">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Featured <span class="text-primary">Projects</span>
        </h2>
        
        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          <button *ngFor="let filter of filters" 
                  (click)="setFilter(filter)"
                  [class.bg-primary]="activeFilter === filter"
                  [class.text-background]="activeFilter === filter"
                  [class.bg-transparent]="activeFilter !== filter"
                  [class.text-gray-300]="activeFilter !== filter"
                  class="px-6 py-2 rounded-full border border-primary transition-all duration-300 hover:bg-primary hover:text-background font-medium cursor-pointer">
            {{ filter }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of filteredProjects; let i = index" 
               class="glass-card group overflow-hidden flex flex-col cursor-pointer"
               (click)="openModal(project)"
               data-aos="zoom-in" [attr.data-aos-delay]="i * 100">
            
            <div class="h-48 bg-gray-800 relative overflow-hidden">
              <!-- Image Display -->
              <img *ngIf="project.imageUrl" [src]="project.imageUrl" [alt]="project.title" 
                   class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div *ngIf="project.imageUrl" class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              <!-- Fallback Icon -->
              <div *ngIf="!project.imageUrl" class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-500">
                <svg class="w-16 h-16 opacity-50 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
            </div>
            
            <div class="p-6 flex-grow flex flex-col">
              <span class="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">{{ project.category }}</span>
              <h3 class="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{{ project.title }}</h3>
              <p *ngIf="project.client" class="text-xs text-gray-500 mb-3 flex items-center">
                <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                {{ project.client }}
              </p>
              <p class="text-gray-400 text-sm mb-6 flex-grow">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let tech of project.technologies | slice:0:3" class="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  {{ tech }}
                </span>
                <span *ngIf="project.technologies.length > 3" class="text-xs text-gray-500 px-1 py-1">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              
              <button class="inline-flex items-center text-primary hover:text-cyan-300 text-sm font-medium transition-colors">
                View Details
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail Modal -->
      <div *ngIf="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div class="absolute inset-0 bg-background/80 backdrop-blur-sm" (click)="closeModal()"></div>
        
        <div class="relative w-full max-w-4xl bg-cardBg border border-gray-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
             data-aos="zoom-in" data-aos-duration="300">
             
          <button (click)="closeModal()" class="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-red-500/80 text-white rounded-full transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div class="h-48 md:h-64 bg-gray-800 relative flex-shrink-0">
              <!-- Modal Image -->
              <img *ngIf="selectedProject.imageUrl" [src]="selectedProject.imageUrl" [alt]="selectedProject.title" class="absolute inset-0 w-full h-full object-cover">
              <div *ngIf="selectedProject.imageUrl" class="absolute inset-0 bg-gradient-to-t from-cardBg via-cardBg/70 to-transparent"></div>
              <!-- Modal Fallback Icon -->
              <div *ngIf="!selectedProject.imageUrl" class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-500">
                <svg class="w-24 h-24 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
          </div>
          
          <div class="p-6 md:p-10 overflow-y-auto">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
                {{ selectedProject.category }}
              </span>
              <span *ngIf="selectedProject.client" class="flex items-center text-xs text-gray-400 border border-gray-700 rounded-full px-3 py-1">
                <svg class="w-3 h-3 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                {{ selectedProject.client }}
              </span>
            </div>
            
            <h3 class="text-3xl font-bold text-white mb-6">{{ selectedProject.title }}</h3>
            
            <div class="prose prose-invert max-w-none mb-8">
              <p class="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {{ selectedProject.longDescription || selectedProject.description }}
              </p>
            </div>
            
            <h4 class="text-xl font-semibold text-white mb-4">Technologies Used</h4>
            <div class="flex flex-wrap gap-3 mb-10">
              <span *ngFor="let tech of selectedProject.technologies" class="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium border border-gray-700">
                {{ tech }}
              </span>
            </div>
            
            <div class="flex flex-wrap gap-4 border-t border-gray-700 pt-6">
              <a *ngIf="selectedProject.link" [href]="selectedProject.link" target="_blank" class="px-6 py-2 bg-primary text-background font-semibold rounded-lg hover:bg-cyan-300 transition-colors flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                Live Demo
              </a>
              <a *ngIf="selectedProject.githubLink" [href]="selectedProject.githubLink" target="_blank" class="px-6 py-2 bg-transparent border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                Repository
              </a>
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
    this.activeFilter = filter;
    if (filter === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === filter);
    }
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
