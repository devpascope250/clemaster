// context/AuthContext.tsx
'use client';
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
  isAuthenticated: () => boolean;
  checkAuth: () => Promise<void>;
}

import { User } from '@prisma/client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
}



export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: false,
    isInitialized: false,
  });

  const login = async (email: string, password: string): Promise<User | null> => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      const data = await response.json();
      const user = data.user;
      
      setState({
        user,
        isLoading: false,
        isInitialized: true,
      });
      
      return user;
    } catch (error) {
      console.error('Login failed:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return null;
    }
  };

  const logout = async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Call logout endpoint to invalidate session on server
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      // Clear client-side state
      setState({
        user: null,
        isLoading: false,
        isInitialized: true,
      });
      
    } catch (error) {
      console.error('Logout failed:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const isAuthenticated = (): boolean => {
    return state.user !== null;
  };

  const checkAuth = async () => {
    // Don't check auth if we're already loading
    if (state.isLoading) return;
    
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch('/api/auth/me');
      
      if (response.ok) {
        const data = await response.json();
        setState({
          user: data.user,
          isLoading: false,
          isInitialized: true,
        });
      } else {
        // No valid session
        setState({
          user: null,
          isLoading: false,
          isInitialized: true,
        });
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setState({
        user: null,
        isLoading: false,
        isInitialized: true,
      });
    }
  };

  const value: AuthContextType = {
    ...state,
    login,
    logout,
    isAuthenticated,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}