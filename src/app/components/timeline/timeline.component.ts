import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  afterNextRender,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

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
  imports: [FontAwesomeModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnDestroy {
  @Input() events: TimelineItem[] = [];
  @ViewChild('timeline', { static: false }) timelineRef?: ElementRef<HTMLElement>;

  faBriefcase = faBriefcase;

  private observer?: IntersectionObserver;

  constructor() {
    // Gate the hidden reveal state behind real browser JS: without it (SSR
    // prerender, no-JS crawlers) the cards stay visible. isPlatformBrowser,
    // not typeof window — the server platform shims window too.
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      inject(ElementRef<HTMLElement>).nativeElement.classList.add('vt-reveal');
    }
    afterNextRender(() => this.observeCards());
  }

  private observeCards(): void {
    const host = this.timelineRef?.nativeElement;
    if (!host) {
      return;
    }

    const elements = Array.from(host.querySelectorAll<HTMLElement>('.vt-element'));

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach(el => el.classList.add('in-view'));
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    elements.forEach(el => this.observer?.observe(el));

    // Fallback for renderers that starve IntersectionObserver of frames
    // (headless captures): reveal by geometry shortly after load.
    setTimeout(() => {
      for (const el of elements) {
        if (el.classList.contains('in-view')) {
          continue;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in-view');
          this.observer?.unobserve(el);
        }
      }
    }, 400);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
