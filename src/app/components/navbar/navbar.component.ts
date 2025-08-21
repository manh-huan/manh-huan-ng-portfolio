// src/app/navbar/navbar.component.ts
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type UIMode = 'dark' | 'light';

interface NavItem {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() mode: UIMode = 'dark';
  @Output() modeChange = new EventEmitter<void>();

  mobileOpen = false;
  scrolled = false;

  readonly navItems: NavItem[] = [
    { label: 'Expertise', sectionId: 'expertise' },
    { label: 'History', sectionId: 'timeline' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const navbar = document.getElementById('navigation');
    this.scrolled = !!navbar && window.scrollY > navbar.clientHeight;
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  onToggleMode(): void {
    this.modeChange.emit();
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.mobileOpen = false;
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
  }
}