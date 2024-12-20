import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './Components/TasksList';
import ThemeProvider from './Components/ThemeError';
import RegistrationForm from './Components/Form';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoList />
      <hr />
      <RegistrationForm />
    </ThemeProvider>
  </React.StrictMode>
);
