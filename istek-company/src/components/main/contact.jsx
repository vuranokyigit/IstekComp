import React from 'react';
import {useTranslation} from "react-i18next";
import '../styles/component.css';

const Contact = () => {
    const {t} = useTranslation();
    return (
        <section
            style={{ backgroundImage: 'url("/img/contactbg.png")' }}
            className="home-section section-hero overlay slanted position-relative"
            id="home-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 text-center" id="evaPortWelcome">
                        <h1 className="animated-heading" style={{fontWeight:"bold"}}>{t('contactMainTitle')}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;