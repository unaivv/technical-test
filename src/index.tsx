import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './Components/TasksList';
import ThemeProvider from './Components/ThemeError';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoList />
    </ThemeProvider>
  </React.StrictMode>
);
