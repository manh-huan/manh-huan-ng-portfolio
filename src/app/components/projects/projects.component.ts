
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProjectItem {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
  alt: string;
  nowrapTitle?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true
})
export class ProjectsComponent {
  projects: ProjectItem[] = [
    {
      title: 'CompDoc - Academic Report Analyzer',
      href: 'https://github.com/rchacons/academic-report-analyzer',
      imgSrc: '/manh-huan-ng-portfolio/assets/images/mock03.png',
      alt: 'thumbnail',
      description:
        'A platform with FastAPI Backend and React Frontend that analyzes, compare and extract academic report.'
    },
    {
      title: 'Java Banking App',
      href: 'https://github.com/manh-huan/mahu-java-banking-app',
      imgSrc: '/manh-huan-ng-portfolio/assets/images/mock02.png',
      alt: 'thumbnail',
      description: 'A simple banking application built with Java FX which provides a user-friendly interface for managing accounts, transactions, and dashboards.'
      },
  ];
}