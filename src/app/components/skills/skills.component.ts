import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { MatChipsModule } from '@angular/material/chips'; 



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule, 
            CommonModule,  
            MatChipsModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  faDocker = faDocker;
  faAngular = faAngular;
  faPython = faPython;


  labelsFirst = [
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Java",
    "Spring Boot",
    "Quarkus",
    "Python",
    "ElasticSearch",
    "PostgreSQL",
    "Postman"
  ];
  
  labelsSecond = [
    "Git",
    "Gitlab CI/CD",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Linux",
    "Kibana",
    "Grafana",
  ];  
}
