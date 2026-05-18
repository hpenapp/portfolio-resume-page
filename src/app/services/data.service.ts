import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';
import { Certification } from '../models/certification.model';
import { Experience } from '../models/experience.model';
import { Education } from '../models/education.model';

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
        'Technical Leadership & Trust: Appointed as Lead to coordinate the internal <strong>Data Engineering Factory</strong>, providing architectural guidance and technical mentorship to junior developers to ensure the delivery of scalable, <strong>high-quality solutions</strong>.',
        'Architecture & Standards: Define and guarantee compliance with the consultancy’s <strong>ETL and Medallion Architecture</strong> standards, ensuring all data pipelines are built for high performance and long-term maintainability.',
        'High-Impact Data Integration: Oversee the ingestion of complex datasets from <strong>SAP via Azure Blob Storage</strong>, guiding the team through the complete transformation process and the application of advanced business rules.',
        'Technical Governance: Act as the primary guardian of data integrity, resolving complex technical roadblocks and performing rigorous <strong>code reviews</strong> to ensure all deliverables meet enterprise-grade quality standards.'
      ],
      skills: ['Technical Leadership', 'Architectural Design', 'Code Quality', 'SAP Integration'],
      translations: {
        es: {
          role: 'Líder Técnico y Coordinador de Fábrica de Ingeniería de Datos',
          description: 'Designado como Líder para coordinar la Fábrica de Ingeniería de Datos interna, brindando orientación arquitectónica y mentoría técnica a desarrolladores junior para asegurar la entrega de soluciones escalables y de alta calidad.',
          achievements: [
            'Liderazgo Técnico y Confianza: Designado como Líder para coordinar la <strong>Fábrica de Ingeniería de Datos</strong> interna, brindando orientación arquitectónica y mentoría técnica a desarrolladores junior para asegurar la entrega de soluciones escalables y de alta calidad.',
            'Arquitectura y Estándares: Definir y garantizar el cumplimiento de los estándares de <strong>ETL y Arquitectura Medallón</strong> de la consultora, asegurando que todos los pipelines de datos estén construidos para un alto rendimiento y mantenibilidad a largo plazo.',
            'Integración de Datos de Alto Impacto: Supervisar la ingesta de conjuntos de datos complejos desde <strong>SAP a través de Azure Blob Storage</strong>, guiando al equipo en el proceso completo de transformación y la aplicación de reglas de negocio avanzadas.',
            'Gobernanza Técnica: Actuar como el principal guardián de la integridad de los datos, resolviendo obstáculos técnicos complejos y realizando <strong>revisiones de código</strong> rigurosas para asegurar que todos los entregables cumplan con estándares de calidad de nivel empresarial.'
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
        'Architected the end-to-end lifecycle of <strong>AI Agents</strong> for telephone platforms using <strong>Azure Functions and C#</strong>.',
        'Architected and deployed scalable <strong>ETL pipelines</strong> following <strong>Medallion Methodology</strong> in <strong>Azure Databricks and PySpark</strong> for <strong>LLM consumption</strong>.',
        'Engineered an automated "Call Rating" system with <strong>Generative AI</strong>, utilizing APIs and SQL in a DevOps environment.',
        'Developed and automated data ingestion workflows in <strong>Azure Data Factory</strong> for strategic company products.',
        'Implemented a personalized "Promotion Recommendation" engine leveraging <strong>predictive analysis</strong> to improve delivery precision.'
      ],
      skills: ['Azure Functions', 'C#', 'LLM', 'Azure Databricks', 'PySpark', 'Generative AI'],
      translations: {
        es: {
          role: 'Ingeniero de Datos de IA',
          description: 'Arquitectura del ciclo de vida de punta a punta de Agentes de IA y pipelines ETL escalables para consumo de LLMs.',
          achievements: [
            'Arquitectura del ciclo de vida de <strong>Agentes de IA</strong> para plataformas telefónicas usando <strong>Azure Functions y C#</strong>.',
            'Despliegue de <strong>pipelines ETL escalables</strong> siguiendo la <strong>Metodología Medallion</strong> en <strong>Azure Databricks y PySpark</strong>.',
            'Ingeniería de un sistema automatizado de "Call Rating" con <strong>IA Generativa</strong>.',
            'Desarrollo de flujos automatizados de ingesta de datos en <strong>Azure Data Factory</strong>.',
            'Implementación de un motor de "Recomendación de Promociones" personalizado con <strong>análisis predictivo</strong>.'
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
        'Orchestrated high-volume, real-time <strong>ETL processes</strong> using <strong>Azure Databricks and PySpark</strong> (Medallion Methodology).',
        'Designed and automated end-to-end data pipelines in <strong>Azure Data Factory</strong> with storage in <strong>Azure Blob Storage</strong>.',
        'Developed advanced <strong>Power BI dashboards</strong> with complex DAX measures, resulting in <strong>significant operational savings</strong>.',
        'Optimized real-time processing by automating streaming workflows, facilitating a <strong>100% success rate</strong> in production transitions.',
        'Enhanced analytical capacity by integrating multi-sector data into the <strong>Data Lake</strong> while ensuring compliance.'
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

  private education: Education[] = [
    {
      id: '1',
      institution: 'Universidad Autónoma de Nuevo León',
      location: 'San Nicolás de los Garza, N.L.',
      degree: 'Bachelor of Science in Computational Science',
      period: 'August 2018 - December 2022',
      gpa: '89/100',
      modules: ['Backend Development', 'Introduction to Machine Learning', 'Introduction to Deep Learning', 'Databases']
    }
  ];

  private projects: Project[] = [
    {
      id: '1',
      title: 'AI Agents Lifecycle',
      description: 'Architecture of the lifecycle for AI Agents in telephony platforms.',
      longDescription: 'Design and development of the complete lifecycle for AI agents on telephony platforms using Azure Functions and C#. Creation of scalable APIs for real-time conversational intelligence.',
      technologies: ['Azure Functions', 'C#', 'AI Agents', 'Conversational Intelligence'],
      category: 'Data Engineering',
      client: 'Data & Analytics — Heineken México',
      imageUrl: 'assets/projects-img/ai-agents.png'
    },
    {
      id: '2',
      title: 'Scalable ETL for LLM',
      description: 'Scalable ETL pipelines following the Medallion methodology for LLM consumption.',
      longDescription: 'Architecture and deployment of scalable ETL pipelines following the Medallion methodology (Bronze, Silver, Gold) in Azure Databricks and PySpark for processing high volumes of data intended for Large Language Model (LLM) consumption.',
      technologies: ['Azure Databricks', 'PySpark', 'LLM', 'Medallion Methodology'],
      category: 'Data Engineering',
      client: 'Data & Analytics — Heineken México',
      imageUrl: 'assets/projects-img/etl-llm.png'
    },
    {
      id: '3',
      title: 'Automated Call Rating with GenAI',
      description: 'Automated call rating system using Generative AI.',
      longDescription: 'Development of an automated "Call Rating" system with Generative AI, utilizing APIs and SQL to extract and evaluate conversation data within a code-controlled DevOps environment.',
      technologies: ['Generative AI', 'APIs', 'SQL', 'DevOps'],
      category: 'Data Engineering',
      client: 'Data & Analytics — Heineken México',
      imageUrl: 'assets/projects-img/ai-rating-agent.png'
    },
    {
      id: '4',
      title: 'Promotion Recommendation Engine',
      description: 'Custom promotion recommendation engine built with Generative AI.',
      longDescription: 'Implementation of a personalized "Promotion Recommendation" engine utilizing Generative AI, leveraging predictive analysis to improve delivery precision and generate significant operational savings.',
      technologies: ['Generative AI', 'Predictive Analysis', 'Python'],
      category: 'Data Engineering',
      client: 'Data & Analytics — Heineken México',
      imageUrl: './assets/projects-img/promotion-recommendation.png'
    },
    {
      id: '5',
      title: 'Data Engineering Factory — D&C Solutions',
      description: 'Technical coordination of an internal Data Engineering Factory, defining ETL & Medallion Architecture standards and guiding SAP-to-cloud data ingestion pipelines.',
      longDescription: 'Appointed as Lead to coordinate the internal Data Engineering Factory at D&C Solutions. Responsibilities include defining and guaranteeing compliance with ETL and Medallion Architecture standards, overseeing the ingestion of complex datasets from SAP via Azure Blob Storage, providing architectural guidance and technical mentorship to junior developers, and acting as the primary guardian of data integrity through rigorous code reviews and resolution of complex technical roadblocks.',
      technologies: ['Technical Leadership', 'Medallion Architecture', 'SAP Integration', 'Azure Blob Storage', 'ETL Standards', 'Azure Databricks', 'PySpark'],
      category: 'Data Engineering',
      client: 'D&C Solutions S.C.',
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
    },
    // --- Credly Badges ---
    {
      id: '7',
      name: 'Hands On Essentials - Data Sharing',
      issuer: 'Snowflake',
      date: 'March, 2023',
      badgeUrl: 'https://images.credly.com/images/1392296a-cadf-4037-b7ac-f01fef0fe31c/Essentials-Data-Sharing_2x.png',
      verificationUrl: 'https://www.credly.com/badges/8ad750da-c5c5-432a-a20f-dd02ec707980',
      type: 'Badge'
    },
    {
      id: '8',
      name: 'Hands On Essentials - Data Applications',
      issuer: 'Snowflake',
      date: 'February, 2023',
      badgeUrl: 'https://images.credly.com/images/932e3102-58f6-474a-952d-a144b74c98d2/Essentials-Data-Applications_2x.png',
      verificationUrl: 'https://www.credly.com/badges/850d8a55-8dee-45df-83ac-97b8ecfcbcaa',
      type: 'Badge'
    },
    {
      id: '9',
      name: 'Hands On Essentials - Data Warehouse',
      issuer: 'Snowflake',
      date: 'February, 2023',
      badgeUrl: 'https://images.credly.com/images/97fcc871-a820-4143-adf2-62517026cb58/Essentials-Data-Warehouse_2x.png',
      verificationUrl: 'https://www.credly.com/badges/e78ed58f-96db-4d04-95fd-f8ec2443e5ce',
      type: 'Badge'
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

  getEducation(): Observable<Education[]> {
    return of(this.education);
  }
}
