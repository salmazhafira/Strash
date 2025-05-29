import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './scripts/components/App.jsx';
import './styles/styles.css';
import './styles/tailwind.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);