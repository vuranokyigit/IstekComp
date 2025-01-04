import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/component.css';
import '../styles/eva.css';
import '../styles/products.css';
import Navbar from '../navbar/navbar';
import Home from './home';
import About from './about';
import Product from './product';
import Contact from './contact';
import Footer from '../footer/footer';

const Main = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/istek/about" element={<About />} />
                    <Route path="/istek/product" element={<Product />} />
                    <Route path="/istek/contact" element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default Main;