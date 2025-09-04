
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
      title: 'Submeowrine',
      href: 'https://github.com/yujisatojr/submeowrine',
      imgSrc: '/manh-huan-ng-portfolio-/assets/images/mock01.png',
      alt: 'thumbnail',
      description:
        'Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.'
    },
    {
      title: 'WeManage: Real Estate Asset Management',
      href: 'http://www.wemanage.jp/',
      imgSrc: '/manh-huan-ng-portfolio-/assets/images/mock06.png',
      alt: 'thumbnail',
      nowrapTitle: true,
      description:
        'This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.'
    },
    {
      title: 'COVID-19 Case Management',
      href: 'https://www.byuh.edu/covid-19-case-management',
      imgSrc: '/manh-huan-ng-portfolio-/assets/images/mock05.png',
      alt: 'thumbnail',
      description:
        'Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university\'s leadership in their decision-making processes.'
    },
    {
      title: 'Multiple Regression Property Analysis',
      href: 'https://github.com/yujisatojr/multi-reg-analysis',
      imgSrc: '/manh-huan-ng-portfolio-/assets/images/mock04.png',
      alt: 'thumbnail',
      description:
        'Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.'
    },
    {
      title: 'Programs of Study',
      href: 'https://holokai.byuh.edu/programs-of-study',
      imgSrc: '/manh-huan-ng-portfolio-/assets/images/mock03.png',
      alt: 'thumbnail',
      description:
        'Designed and developed a custom component for a CMS-based platform (e.g., \'Brightspot\') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.'
    },
    {
      title: 'Transfer Evaluation Matrix',
      href: 'https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix',
      imgSrc: '/manh-huan-ng-portfolio-/assets/images/mock02.png',
      alt: 'thumbnail',
      description:
        'Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.'
    },
  ];
}