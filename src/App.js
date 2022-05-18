import React from 'react'
import NewClassForm from './components/ClassForm';
import ClassList from './components/ClassList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';
import ClassContextProvider from './contexts/ClassContext';
import ThemeContextProvider from './contexts/ThemeContext';
import './styles/App.css';
// to open in localhost: npm start
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/*<AuthContextProvider /> */}

        <ClassContextProvider>
          <Navbar />

          <ClassList />

          <NewClassForm />
        </ClassContextProvider>

        <ThemeToggle />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
