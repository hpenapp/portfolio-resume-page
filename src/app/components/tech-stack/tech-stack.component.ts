import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tech-stack" class="py-24 px-4 md:px-10 max-w-7xl mx-auto border-t border-gray-800">
      <h2 class="text-3xl md:text-5xl font-bold mb-16 text-center" data-aos="fade-up">
        Technical <span class="text-primary">Skills</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Leadership & Architecture -->
        <div class="glass-card p-8" data-aos="fade-up" data-aos-delay="100">
          <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-4 text-white">Leadership</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Technical Mentorship</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Factory Coordination</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Architectural Design</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Agile (Scrum)</li>
          </ul>
        </div>

        <!-- Data Engineering -->
        <div class="glass-card p-8" data-aos="fade-up" data-aos-delay="200">
          <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-4 text-white">Data Engineering</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Azure Databricks / ADF</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> PySpark / SQL</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Medallion Architecture</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Delta Live Tables</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Snowflake</li>
          </ul>
        </div>

        <!-- AI & Development -->
        <div class="glass-card p-8" data-aos="fade-up" data-aos-delay="300">
          <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-4 text-white">AI & Development</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Generative AI (LLMs)</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> GenAI Agents API</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Azure Functions / C#</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Python (Streamlit)</li>
          </ul>
        </div>

        <!-- BI & DevOps -->
        <div class="glass-card p-8" data-aos="fade-up" data-aos-delay="400">
          <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-4 text-white">BI & DevOps</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Power BI (DAX)</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Azure DevOps / CI/CD</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> SSAS / SSIS / SSRS</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-primary rounded-full mr-3"></span> Git / Synapse</li>
          </ul>
        </div>
        
      </div>
    </section>
  `
})
export class TechStackComponent { }
