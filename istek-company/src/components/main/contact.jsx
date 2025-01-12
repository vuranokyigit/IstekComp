import React from 'react';
import {useTranslation} from "react-i18next";
import '../styles/component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faWhatsapp,} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const {t} = useTranslation();
    return (
        <>
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
        <section>
        <div className="row clearfix">
      {/* Adres */}
      <div
        className="info-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
        data-wow-delay="0ms"
        data-wow-duration="2000ms"
        style={{ visibility: 'visible', animationDuration: '2000ms', animationDelay: '0ms', animationName: 'fadeInUp' }}
      >
        <div className="inner">
          <div className="icon"><FontAwesomeIcon icon={faLocationDot} size="xl" /></div>
          <ul className="info">
            <li>
              Şirinyalı Mah. 1547 Sk. No: 2A/9
              <br />
              Muratpaşa / Antalya / TÜRKİYE
            </li>
          </ul>
        </div>
      </div>

      {/* Telefon */}
      <div
        className="info-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
        data-wow-delay="300ms"
        data-wow-duration="2000ms"
        style={{ visibility: 'visible', animationDuration: '2000ms', animationDelay: '300ms', animationName: 'fadeInUp' }}
      >
        <div className="inner">
          <div className="icon"><FontAwesomeIcon icon={faPhone} size="xl"/></div>
          <ul className="info">
            <li>
              +90 242 323 22 13
              <br />
             +90 536 774 57 59
            </li>
          </ul>
        </div>
      </div>

      {/* Email */}
      <div
        className="info-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
        data-wow-delay="600ms"
        data-wow-duration="2000ms"
        style={{ visibility: 'visible', animationDuration: '2000ms', animationDelay: '600ms', animationName: 'fadeInUp' }}
      >
        <div className="inner">
          <div className="icon"><FontAwesomeIcon icon={faEnvelope} size="xl"/></div>
          <ul className="info">
            <li>
              <a href="mailto:istek@istek.com.tr" style={{textDecoration:'none',color:'white',cursor:'pointer'}}>istek@istek.com.tr</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Whatsapp */}
      <div
        className="info-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
        data-wow-delay="300ms"
        data-wow-duration="2000ms"
        style={{ visibility: 'visible', animationDuration: '2000ms', animationDelay: '300ms', animationName: 'fadeInUp' }}
      >
        <div className="inner">
          <div className="icon" ><FontAwesomeIcon icon={faWhatsapp}  size="xl"/></div>
          <ul className="info">
            <li>
              <a href="https://web.whatsapp.com/+905367745759" style={{textDecoration:'none',color:'white',cursor:'pointer'}}>+905367745759</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </section>
        </>
    );
};

export default Contact;