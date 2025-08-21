
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  get name() { return this.contactForm.controls.name; }
  get email() { return this.contactForm.controls.email; }
  get message() { return this.contactForm.controls.message; }

  onSubmit(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    const payload = this.contactForm.getRawValue();
    console.log('Submit payload:', payload);
    this.contactForm.reset();
  }
}