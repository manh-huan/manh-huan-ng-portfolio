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
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
  ];
  
  labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
  ];
  
  labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
  ];
  
}
