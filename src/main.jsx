import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DemoPage from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoPage />
  </StrictMode>,
);
