import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import About from '../pages/About';
import Service from '../pages/Service';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
    </Routes>
  );
};