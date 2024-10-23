import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import { ThemeProvider, useTheme } from './ThemeContext'

const ThemedApp = () => {
  const { theme } = useTheme(); // Получаем текущую тему
  console.log('theme: ', theme);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#242424',
    color: theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    width: '100vw'
  };

  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Calendar' element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function App() {

  return(
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
    )
}

export default App
