export interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  acceptTerms: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

export interface User {
  id: string;
  email: string;
  accountType: 'proprietaire' | 'locataire';
  name?: string;
  avatar?: string;
}
