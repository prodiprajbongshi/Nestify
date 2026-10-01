"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("nestify_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    const usersRaw = localStorage.getItem("nestify_users");
    const users: (User & { password: string })[] = usersRaw ? JSON.parse(usersRaw) : [];

    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) {
      return { success: false, message: "Invalid email or password." };
    }

    const { password: _pw, ...safeUser } = found;
    setUser(safeUser);
    localStorage.setItem("nestify_user", JSON.stringify(safeUser));
    return { success: true, message: "Login successful!" };
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    const usersRaw = localStorage.getItem("nestify_users");
    const users: (User & { password: string })[] = usersRaw ? JSON.parse(usersRaw) : [];

    if (users.find((u) => u.email === email)) {
      return { success: false, message: "An account with this email already exists." };
    }

    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("nestify_users", JSON.stringify(users));

    const { password: _pw, ...safeUser } = newUser;
    setUser(safeUser);
    localStorage.setItem("nestify_user", JSON.stringify(safeUser));
    return { success: true, message: "Account created successfully!" };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("nestify_user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
