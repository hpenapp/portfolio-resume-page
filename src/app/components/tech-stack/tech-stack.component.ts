import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tech-stack" class="py-32 px-4 md:px-10 max-w-[1400px] mx-auto border-t border-white/5">
      <div class="mb-20 text-center" data-aos="fade-up">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
          Technical <span class="text-primary">Expertise</span>
        </h2>
        <p class="text-textSecondary text-base max-w-2xl mx-auto leading-relaxed">Specialized in building scalable data architectures and AI-driven solutions for modern business challenges.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        
        <!-- Leadership & Architecture -->
        <div class="bezel-container group" data-aos="fade-up" data-aos-delay="100">
          <div class="bezel-inner glass-card p-8 h-full">
            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-6 text-white tracking-tight">Leadership</h3>
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Technical Mentorship</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Factory Coordination</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Architectural Design</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Agile (Scrum)</li>
            </ul>
          </div>
        </div>

        <!-- Data Engineering -->
        <div class="bezel-container group" data-aos="fade-up" data-aos-delay="200">
          <div class="bezel-inner glass-card p-8 h-full">
            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
            </div>
            <h3 class="text-2xl font-bold mb-6 text-white tracking-tight">Data Engineering</h3>
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Azure Databricks / ADF</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> PySpark / SQL</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Medallion Architecture</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Delta Live Tables</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Snowflake</li>
            </ul>
          </div>
        </div>

        <!-- AI & Development -->
        <div class="bezel-container group" data-aos="fade-up" data-aos-delay="300">
          <div class="bezel-inner glass-card p-8 h-full">
            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold mb-6 text-white tracking-tight">AI & Development</h3>
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Generative AI (LLMs)</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> GenAI Agents API</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Azure Functions / C#</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Python (Streamlit)</li>
            </ul>
          </div>
        </div>

        <!-- BI & DevOps -->
        <div class="bezel-container group" data-aos="fade-up" data-aos-delay="400">
          <div class="bezel-inner glass-card p-8 h-full">
            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold mb-6 text-white tracking-tight">BI & DevOps</h3>
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Power BI (DAX)</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Azure DevOps / CI/CD</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> SSAS / SSIS / SSRS</li>
              <li class="flex items-center text-sm font-medium hover:text-primary transition-colors cursor-default"><span class="w-1.5 h-1.5 bg-primary/40 rounded-full mr-4 group-hover:bg-primary transition-colors"></span> Git / Synapse</li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  `
})
export class TechStackComponent { }
