import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  faDocker = faDocker;
  faAngular = faAngular;
  faRobot = faRobot;


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
    "Redis",
    "Postman"
  ];
  
  labelsSecond = [
    "Git",
    "Gitlab CI/CD",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "AWS",
    "Linux",
    "Kibana",
    "Grafana",
  ];

  labelsThird = [
    "Claude API",
    "Prompt Engineering",
    "Tool Use",
    "MCP",
    "Agents",
  ];
}
