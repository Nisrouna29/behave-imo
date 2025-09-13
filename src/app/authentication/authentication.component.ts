import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginForm, RegisterForm, AuthState } from './authentication.interface';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  // Using signals for reactive state management
  activeTab = signal<'signin' | 'register'>('signin');
  showPassword = signal<boolean>(false);
  showConfirmPassword = signal<boolean>(false);
  isLoading = signal<boolean>(false);

  // Form data using signals
  loginForm = signal<LoginForm>({
    email: '',
    password: '',
    rememberMe: false
  });

  registerForm = signal<RegisterForm>({
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    acceptTerms: false
  });

  constructor() {}

  // Tab switching
  switchTab(tab: 'signin' | 'register') {
    this.activeTab.set(tab);
  }

  // Password visibility toggle
  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }

  // Login form handling
  onLoginFormChange(field: keyof LoginForm, value: any) {
    this.loginForm.update(form => ({
      ...form,
      [field]: value
    }));
  }

  onLoginSubmit() {
    this.isLoading.set(true);
    console.log('Login form submitted:', this.loginForm());

    // Simulate API call
    setTimeout(() => {
      this.isLoading.set(false);
      // Handle login logic here
    }, 1000);
  }

  // Register form handling
  onRegisterFormChange(field: keyof RegisterForm, value: any) {
    this.registerForm.update(form => ({
      ...form,
      [field]: value
    }));
  }

  onRegisterSubmit() {
    this.isLoading.set(true);
    console.log('Register form submitted:', this.registerForm());

    // Simulate API call
    setTimeout(() => {
      this.isLoading.set(false);
      // Handle registration logic here
    }, 1000);
  }

  // Social authentication
  onGoogleAuth() {
    console.log('Google authentication');
    // Implement Google OAuth
  }

  onFacebookAuth() {
    console.log('Facebook authentication');
    // Implement Facebook OAuth
  }

  // Password reset
  onForgotPassword() {
    console.log('Forgot password');
    // Implement password reset logic
  }

  // Navigation
  onBackToHome() {
    // Navigate back to home page
    window.history.back();
  }

  // Form validation
  isLoginFormValid(): boolean {
    const form = this.loginForm();
    return form.email.length > 0 && form.password.length > 0;
  }

  isRegisterFormValid(): boolean {
    const form = this.registerForm();
    return form.email.length > 0 &&
           form.password.length > 0 &&
           form.confirmPassword.length > 0 &&
           form.password === form.confirmPassword &&
           form.accountType.length > 0 &&
           form.acceptTerms;
  }

  // Password strength indicator
  getPasswordStrength(password: string): string {
    if (password.length < 6) return 'weak';
    if (password.length < 8) return 'medium';
    return 'strong';
  }
}
