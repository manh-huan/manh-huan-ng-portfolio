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

  constructor(@Inject(DOCUMENT) private doc: Document, private renderer: Renderer2) {}

  timelineItems: TimelineItem[] = [
    { 
      date: '2024 - Now', 
      title: 'Full Stack Engineer', 
      subtitle: 'Company A', 
      description: 'Xây dựng web app, CI/CD...',
      icon: 'pi pi-code'
    },
    { 
      date: '2022 - 2024', 
      title: 'Frontend Developer', 
      subtitle: 'Company B', 
      description: 'React, Angular...',
      icon: 'pi pi-code'
    },
    { 
      date: '2020 - 2022', 
      title: 'Intern', 
      subtitle: 'Company C', 
      description: 'Học và làm dự án nội bộ.',
      icon: 'pi pi-code'
    },
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
