import './App.css'
import ToDoList from './ToDoList'
import Header from './Header'
import { ThemeProvider, useTheme } from './ThemeContext'
import { width } from '@mui/system';

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
      <Header/>
      <ToDoList/>
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
