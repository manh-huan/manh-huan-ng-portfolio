import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';


export interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
}


@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() events: TimelineItem[] = [];
}
