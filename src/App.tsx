import { Router } from '@/router';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.info(`Base: ${import.meta.env.BASE_URL}`);
    console.info(`Base vite: ${import.meta.env.VITE_BASE_URL}`);
    console.info(`Result: ${import.meta.env.BASE_URL || import.meta.env.VITE_BASE_URL}`);
  }, []);

  return <Router />;
}

export default App;
