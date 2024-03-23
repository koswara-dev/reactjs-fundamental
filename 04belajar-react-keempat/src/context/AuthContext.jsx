import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Buat context untuk Auth
const AuthContext = createContext();

// Custom hook untuk menggunakan AuthContext
export const useAuth = () => useContext(AuthContext);

// Component Provider AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // Fungsi untuk login
  const login = async (email, password) => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data)); // Simpan user ke local storage
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Fungsi untuk logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Hapus user dari local storage saat logout
  };

  // Efek samping untuk memeriksa apakah pengguna sudah login dari local storage saat komponen dimuat
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
