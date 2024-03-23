import React, { useContext } from 'react'

const MyComponent = () => {
    const theme = useContext(ThemeContext); // Gunakan useContext untuk mengakses nilai konteks
  
    return (
      <div style={{ background: theme.background, color: theme.text }}>
        Tema yang digunakan: {theme.name}
      </div>
    );
}

export default MyComponent