import { Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TimelineItem } from './components/timeline/timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    TimelineComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'manh-huan-portfolio-ng';

  constructor(@Inject(DOCUMENT) private doc: Document, private renderer: Renderer2) {
    // Deep-linkable theme: ?theme=light
    const search = this.doc.defaultView?.location.search ?? '';
    if (new URLSearchParams(search).get('theme') === 'light') {
      this.mode = 'light';
      this.renderer.addClass(this.doc.body, 'light-mode');
    }
  }

timelineItems: TimelineItem[] = [
  {
    date: '2026 - Present',
    title: 'Java Backend Developer',
    subtitle: 'Stellantis Financial Services · via SFEIR, Strasbourg, France',
    description: 'Modernizing the financial quotation platform toward a microservices architecture while ensuring production stability: enhanced financial calculation services for European financing quotations (payment schedules, residual values, taxation), designed a Spring Boot eligibility microservice from scratch with REST APIs and Redis caching, and hardened batch imports with AWS S3.'
  },
  {
    date: '2024 - 2025', 
    title: 'Java Developer', 
    subtitle: 'Horizon Trading Solution, Rennes, France', 
    description: 'Developing and maintaining Order Management System (OMS) components, market connectivity drivers (FIX protocol), and high-performance trading modules using Java, Swing, and multithreading.',
    icon: 'pi pi-code'
  },
  { 
    date: '2022 - 2024', 
    title: 'Full Stack Developer (Java/Angular)', 
    subtitle: 'Orange Business, Rennes, France', 
    description: 'Designed and implemented features for project management apps. Built backend APIs with Quarkus, created CI/CD pipelines, and automated deployments with Docker and Kubernetes.',
    icon: 'pi pi-code'
  },
  { 
    date: '2022', 
    title: 'Software Developer Intern', 
    subtitle: 'FPT Software, Paris, France', 
    description: 'Developed an e-commerce web application using Java Spring Boot and Angular. Gained experience in Agile/Scrum and real-world software delivery.',
    icon: 'pi pi-code'
  }
];

  mode: 'dark' | 'light' = 'dark';

  toggleMode(): void {
    this.mode = this.mode === 'dark' ? 'light' : 'dark';
    if (this.mode === 'light') {
      this.renderer.addClass(this.doc.body, 'light-mode');
    } else {
      this.renderer.removeClass(this.doc.body, 'light-mode');
    }
  }
}
