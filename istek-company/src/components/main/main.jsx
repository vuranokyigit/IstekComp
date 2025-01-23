import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/component.css';
import '../styles/eva.css';
import '../styles/products.css';
import '../styles/profilecards.css';
import Navbar from '../navbar/navbar';
import Home from './home';
import About from './about';
import Ferdadurdu from '../humanres/ferdadurdu';
import Turkuacar from '../humanres/turkuacar';
import Product from './product';
import Contact from './contact';
import Footer from '../footer/footer';
import IstekAlu from '../products/istekAlu';
import IstekCu from '../products/istekCu';
import IstekCuPlus from '../products/istekCuPlus';
//import Maintenance from './maintenance';

const Main = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/istek/about" element={<About />} />
                    <Route path="/istek/humanres/ferdadurdu" element={<Ferdadurdu />} />
                    <Route path="/istek/humanres/turkuacar" element={<Turkuacar />} />
                    <Route path="/istek/product" element={<Product />} />
                    {/* <Route path="/istek/maintenance" element={<Maintenance />} /> */}
                    <Route path="/istek/contact" element={<Contact />} />
                    <Route path="/istek/istek-cu-plus" element={<IstekCuPlus />} />
                    <Route path="/istek/istek-alu" element={<IstekAlu />} />
                    <Route path="/istek/istek-cu" element={<IstekCu />} />


                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default Main;