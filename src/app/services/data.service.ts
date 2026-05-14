import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';
import { Certification } from '../models/certification.model';
import { Experience } from '../models/experience.model';

export interface PersonalInfo {
  fullName: string;
  role: string;
  specialties: string[];
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  currentRole: string;
  degree: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private personalInfo: PersonalInfo = {
    fullName: 'Humberto Gerardo Peña Páez',
    role: 'AI Data Engineer | Lead Data Engineer',
    specialties: ['AI Data Engineer', 'Lead Data Engineer', 'Azure & GenAI Specialist', 'Databricks Platform'],
    phone: '+52 813 084 1728',
    email: 'hgerardop01@gmail.com',
    location: 'Monterrey, N.L. México',
    linkedin: 'https://linkedin.com/in/hpenap/',
    github: 'https://github.com/hpenapp',
    summary: 'Lead AI Data Engineer with 3.5+ years in Azure, specializing in scalable GenAI/LLM pipelines. Trusted to direct a Data Engineering Factory and mentor teams to deliver high-quality technical blueprints using Medallion Architecture. Proven expertise in SAP integrations and advanced Databricks features like Lakeflow. Databricks Certified Associate (May 2026) focused on driving operational value through robust engineering.',
    currentRole: 'AI Data Engineer @ HEINEKEN | Lead Data Engineer @ D&C Solutions',
    degree: 'B.S. in Computer Science'
  };

  private experiences: Experience[] = [
    {
      id: '0',
      company: 'D&C Solutions',
      location: 'Monterrey, N.L.',
      role: 'Lead Data Engineer & Factory Coordinator',
      period: '09/2025 - Present',
      description: 'Appointed as Lead to coordinate the internal Data Engineering Factory, providing architectural guidance and technical mentorship to junior developers to ensure the delivery of scalable, high-quality solutions.',
      achievements: [
        'Technical Leadership & Trust: Appointed as Lead to coordinate the internal Data Engineering Factory, providing architectural guidance and technical mentorship to junior developers to ensure the delivery of scalable, high-quality solutions.',
        'Architecture & Standards: Define and guarantee compliance with the consultancy’s ETL and Medallion Architecture standards, ensuring all data pipelines are built for high performance and long-term maintainability.',
        'High-Impact Data Integration: Oversee the ingestion of complex datasets from SAP via Azure Blob Storage, guiding the team through the complete transformation process and the application of advanced business rules.',
        'Technical Governance: Act as the primary guardian of data integrity, resolving complex technical roadblocks and performing rigorous code reviews to ensure all deliverables meet enterprise-grade quality standards.'
      ],
      skills: ['Technical Leadership', 'Architectural Design', 'Code Quality', 'SAP Integration'],
      translations: {
        es: {
          role: 'Líder Técnico y Coordinador de Fábrica de Ingeniería de Datos',
          description: 'Designado como Líder para coordinar la Fábrica de Ingeniería de Datos interna, brindando orientación arquitectónica y mentoría técnica a desarrolladores junior para asegurar la entrega de soluciones escalables y de alta calidad.',
          achievements: [
            'Liderazgo Técnico y Confianza: Designado como Líder para coordinar la Fábrica de Ingeniería de Datos interna, brindando orientación arquitectónica y mentoría técnica a desarrolladores junior para asegurar la entrega de soluciones escalables y de alta calidad.',
            'Arquitectura y Estándares: Definir y garantizar el cumplimiento de los estándares de ETL y Arquitectura Medallón de la consultora, asegurando que todos los pipelines de datos estén construidos para un alto rendimiento y mantenibilidad a largo plazo.',
            'Integración de Datos de Alto Impacto: Supervisar la ingesta de conjuntos de datos complejos desde SAP a través de Azure Blob Storage, guiando al equipo en el proceso completo de transformación y la aplicación de reglas de negocio avanzadas.',
            'Gobernanza Técnica: Actuar como el principal guardián de la integridad de los datos, resolviendo obstáculos técnicos complejos y realizando revisiones de código rigurosas para asegurar que todos los entregables cumplan con estándares de calidad de nivel empresarial.'
          ]
        }
      }
    },
    {
      id: '1',
      company: 'Heineken México',
      location: 'Monterrey, N.L.',
      role: 'AI Data Engineer',
      period: '02/2025 - Present',
      description: 'Architecting end-to-end lifecycle of AI Agents and scalable ETL pipelines for LLM consumption.',
      achievements: [
        'Architected the end-to-end lifecycle of AI Agents for telephone platforms using Azure Functions and C#.',
        'Architected and deployed scalable ETL pipelines following Medallion Methodology in Azure Databricks and PySpark for LLM consumption.',
        'Engineered an automated "Call Rating" system with Generative AI, utilizing APIs and SQL in a DevOps environment.',
        'Developed and automated data ingestion workflows in Azure Data Factory for strategic company products.',
        'Implemented a personalized "Promotion Recommendation" engine leveraging predictive analysis to improve delivery precision.'
      ],
      skills: ['Azure Functions', 'C#', 'LLM', 'Azure Databricks', 'PySpark', 'Generative AI'],
      translations: {
        es: {
          role: 'Ingeniero de Datos de IA',
          description: 'Arquitectura del ciclo de vida de punta a punta de Agentes de IA y pipelines ETL escalables para consumo de LLMs.',
          achievements: [
            'Arquitectura del ciclo de vida de Agentes de IA para plataformas telefónicas usando Azure Functions y C#.',
            'Despliegue de pipelines ETL escalables siguiendo la Metodología Medallion en Azure Databricks y PySpark.',
            'Ingeniería de un sistema automatizado de "Call Rating" con IA Generativa.',
            'Desarrollo de flujos automatizados de ingesta de datos en Azure Data Factory.',
            'Implementación de un motor de "Recomendación de Promociones" personalizado.'
          ]
        }
      }
    },
    {
      id: '2',
      company: 'Heineken México',
      location: 'Monterrey, N.L.',
      role: 'Data Engineer / Analytics Developer',
      period: '05/2024 - 02/2025',
      description: 'Orchestrated high-volume real-time ETL processes and developed advanced Power BI dashboards.',
      achievements: [
        'Orchestrated high-volume, real-time ETL processes using Azure Databricks and PySpark (Medallion Methodology).',
        'Designed and automated end-to-end data pipelines in Azure Data Factory with storage in Azure Blob Storage.',
        'Developed advanced Power BI dashboards with complex DAX measures, resulting in significant operational savings.',
        'Optimized real-time processing by automating streaming workflows, facilitating a 100% success rate in production transitions.',
        'Enhanced analytical capacity by integrating multi-sector data into the Data Lake while ensuring compliance.'
      ],
      skills: ['Azure Data Factory', 'Databricks', 'PySpark', 'Power BI', 'Azure Blob Storage'],
      translations: {
        es: {
          role: 'Ingeniero de Datos / Desarrollador de Analítica',
          description: 'Orquestación de procesos ETL en tiempo real de alto volumen y desarrollo de tableros avanzados en Power BI.',
          achievements: [
            'Orquestación de procesos ETL en tiempo real usando Azure Databricks y PySpark (Metodología Medallion).',
            'Diseño y automatización de pipelines de datos en Azure Data Factory con almacenamiento en Azure Blob Storage.',
            'Desarrollo de tableros avanzados en Power BI con medidas DAX complejas.',
            'Optimización de procesamiento en tiempo real mediante la automatización de flujos de streaming.',
            'Mejora de la capacidad analítica mediante la integración de datos multi-sector en el Data Lake.'
          ]
        }
      }
    },
    {
      id: '3',
      company: 'BYDSA',
      location: 'Guadalupe, N.L.',
      role: 'Data Engineer / BI Developer',
      period: '05/2023 - 05/2024',
      description: 'Engineered end-to-end data pipelines and managed OLAP cubes for business reporting.',
      achievements: [
        'Engineered end-to-end data pipelines to process various file formats into SQL Server (Medallion-style architecture).',
        'Automated ETL workflows using SSIS to streamline data movement and ensure consistency.',
        'Developed high-impact Power BI dashboards using advanced DAX measures for business reporting.',
        'Architected and managed OLAP cubes using SQL Server Analysis Services (SSAS), optimizing multi-dimensional models.',
        'Optimized legacy business reports in SQL Server Reporting Services (SSRS) by developing formulas in MDX.'
      ],
      skills: ['SQL Server', 'SSIS', 'Power BI', 'SSAS', 'SSRS', 'MDX'],
      translations: {
        es: {
          role: 'Ingeniero de Datos / Desarrollador BI',
          description: 'Ingeniería de pipelines de datos de punta a punta y gestión de cubos OLAP para reportes de negocio.',
          achievements: [
            'Ingeniería de pipelines de datos para procesar varios formatos de archivos en SQL Server.',
            'Automatización de flujos ETL usando SSIS para agilizar el movimiento de datos.',
            'Desarrollo de tableros de Power BI de alto impacto usando medidas DAX avanzadas.',
            'Arquitectura y gestión de cubos OLAP usando SSAS.',
            'Optimización de reportes legados en SSRS usando fórmulas MDX.'
          ]
        }
      }
    },
    {
      id: '4',
      company: 'D&C Solutions',
      location: 'San Nicolás de los Garza, N.L.',
      role: 'Data Intern',
      period: '01/2023 - 05/2023',
      description: 'Developed ML projects and early-stage AI solutions.',
      achievements: [
        'Developed ML projects and early-stage AI solutions using Python, Azure Cognitive Services, and Streamlit.',
        'Collaborated on data preparation for model training and designed analysis workflows with Power BI.'
      ],
      skills: ['Python', 'Azure Cognitive Services', 'Streamlit', 'Power BI'],
      translations: {
        es: {
          role: 'Pasante de Datos',
          description: 'Desarrollo de proyectos de ML y soluciones de IA en etapas tempranas.',
          achievements: [
            'Desarrollo de proyectos de ML y soluciones de IA usando Python, Azure Cognitive Services y Streamlit.',
            'Colaboración en la preparación de datos para entrenamiento de modelos y diseño de flujos de análisis.'
          ]
        }
      }
    }
  ];

  private projects: Project[] = [
    {
      id: '1',
      title: 'AI Agents Lifecycle',
      description: 'Arquitectura del ciclo de vida de agentes de IA para plataformas telefónicas.',
      longDescription: 'Diseño y desarrollo del ciclo de vida completo de agentes de IA para plataformas telefónicas utilizando Azure Functions y C#. Creación de APIs escalables para inteligencia conversacional en tiempo real.',
      technologies: ['Azure Functions', 'C#', 'AI Agents', 'Conversational Intelligence'],
      category: 'Data Engineering',
      client: 'Data & Analytics — Heineken México',
      link: '#',
      githubLink: '#',
      imageUrl: 'assets/projects-img/ai-agents.png'
    },
    {
      id: '2',
      title: 'Scalable ETL for LLM',
      description: 'Pipelines ETL escalables siguiendo la metodología Medallion para consumo de LLMs.',
      longDescription: 'Arquitectura y despliegue de pipelines ETL escalables siguiendo la metodología Medallion (Bronze, Silver, Gold) en Azure Databricks y PySpark para el procesamiento de altos volúmenes de datos destinados al consumo de modelos de lenguaje de gran escala (LLM).',
      technologies: ['Azure Databricks', 'PySpark', 'LLM', 'Medallion Methodology'],
      category: 'Data Engineering',
      client: 'Data & Analytics — Heineken México',
      link: '#',
      githubLink: '#',
      imageUrl: 'assets/projects-img/etl-llm.png'
    },
    {
      id: '3',
      title: 'Automated Call Rating with GenAI',
      description: 'Sistema de evaluación de llamadas automatizado con IA Generativa.',
      longDescription: 'Desarrollo de un sistema de "Call Rating" automatizado con IA Generativa, utilizando APIs y SQL para extraer y evaluar datos de conversaciones dentro de un entorno DevOps controlado por código.',
      technologies: ['Generative AI', 'APIs', 'SQL', 'DevOps'],
      category: 'Data Engineering',
      client: 'Data & Analytics — Heineken México',
      link: '#',
      githubLink: '#',
      imageUrl: 'assets/projects-img/ai-rating-agent.png'
    },
    {
      id: '4',
      title: 'Promotion Recommendation Engine',
      description: 'Motor de recomendación de promociones personalizado con IA Generativa.',
      longDescription: 'Implementación de un motor de "Promotion Recommendation" personalizado utilizando IA Generativa, aprovechando el análisis predictivo para mejorar la precisión en la entrega y generar ahorros operativos significativos.',
      technologies: ['Generative AI', 'Predictive Analysis', 'Python'],
      category: 'Data Engineering',
      client: 'Data & Analytics — Heineken México',
      link: '#',
      githubLink: '#',
      imageUrl: './assets/projects-img/promotion-recommendation.png'
    },
    {
      id: '5',
      title: 'Data Engineering Factory — D&C Solutions',
      description: 'Technical coordination of an internal Data Engineering Factory, defining ETL & Medallion Architecture standards and guiding SAP-to-cloud data ingestion pipelines.',
      longDescription: 'Appointed as Lead to coordinate the internal Data Engineering Factory at D&C Solutions. Responsibilities include defining and guaranteeing compliance with ETL and Medallion Architecture standards, overseeing the ingestion of complex datasets from SAP via Azure Blob Storage, providing architectural guidance and technical mentorship to junior developers, and acting as the primary guardian of data integrity through rigorous code reviews and resolution of complex technical roadblocks.',
      technologies: ['Technical Leadership', 'Medallion Architecture', 'SAP Integration', 'Azure Blob Storage', 'ETL Standards', 'Azure Databricks', 'PySpark'],
      category: 'Factory',
      client: 'D&C Solutions S.C.',
      link: '#',
      githubLink: '#',
      imageUrl: 'assets/projects-img/data-engineer-factory.png'
    }
  ];

  private certifications: Certification[] = [
    // --- Certifications ---
    {
      id: '1',
      name: 'Databricks Certified Data Engineer Associate',
      issuer: 'Databricks Academy',
      date: 'May, 2026',
      badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/181214002',
      verificationUrl: 'https://www.credential.net/profile/hpenapp/wallet',
      highlight: true,
      type: 'Certification'
    },
    // --- Badges ---
    {
      id: '2',
      name: 'Advanced Techniques with Spark Declarative Pipeline',
      issuer: 'Databricks Academy',
      date: 'April, 2026',
      badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/178758619',
      verificationUrl: 'https://www.credential.net/profile/hpenapp/wallet',
      type: 'Badge'
    },
    {
      id: '3',
      name: 'Data Ingestion with Lakeflow Connect',
      issuer: 'Databricks Academy',
      date: 'March, 2026',
      badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/178595022',
      verificationUrl: 'https://www.credential.net/profile/hpenapp/wallet',
      type: 'Badge'
    },
    {
      id: '4',
      name: 'Build Data Pipelines with Lakeflow Spark Declarative Pipelines',
      issuer: 'Databricks Academy',
      date: 'March, 2026',
      badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/178609204',
      verificationUrl: 'https://www.credential.net/profile/hpenapp/wallet',
      type: 'Badge'
    },
    {
      id: '5',
      name: 'Deploy Workloads with Lakeflow Jobs',
      issuer: 'Databricks Academy',
      date: 'March, 2026',
      badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/178603723',
      verificationUrl: 'https://www.credential.net/profile/hpenapp/wallet',
      type: 'Badge'
    },
    // --- Courses ---
    {
      id: '6',
      name: 'Databricks Academy Accreditation: Databricks Fundamentals',
      issuer: 'Databricks Academy',
      date: 'June, 2025',
      badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/151920393',
      verificationUrl: 'https://www.credential.net/profile/hpenapp/wallet',
      type: 'Course'
    }
  ];

  constructor() { }

  getPersonalInfo(): Observable<PersonalInfo> {
    return of(this.personalInfo);
  }

  getExperience(): Observable<Experience[]> {
    return of(this.experiences);
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getCertifications(): Observable<Certification[]> {
    return of(this.certifications);
  }
}
