// App.jsx BARU
import React from 'react';
// Hapus import BrowserRouter
import { Routes, Route } from 'react-router-dom'; // HANYA import Routes dan Route
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    // HAPUS <BrowserRouter> di sini
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    // HAPUS penutup </BrowserRouter>
  );
}

export default App;