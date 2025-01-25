import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "next-themes";

const container = document.getElementById('root');
const root = createRoot(container!); // Non-null assertion operator to handle potential null

root.render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" >
      <App />
    </ThemeProvider>
  </StrictMode>
);
