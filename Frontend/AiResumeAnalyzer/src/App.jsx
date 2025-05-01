import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
    </main>
  )
}

export default App
