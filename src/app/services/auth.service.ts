import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignupRequest } from '../models/requests/auth/signup-request';
import { Url } from '../models/server-details';
import { LoginRequest } from '../models/requests/auth/login-request';

interface AuthResponse {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  sendSignupRequest(request: SignupRequest) {
    return this.http.post<AuthResponse>(`${Url}auth/signup`, request);
  }

  sendLoginRequest(request: LoginRequest) {
    return this.http.post<AuthResponse>(`${Url}auth/login`, request);
  }
}
