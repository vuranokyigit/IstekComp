import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        style={{ backgroundImage: 'url("/img/contactbg.png")' }}
        className="home-section section-hero overlay slanted position-relative"
        id="home-section"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center" id="evaPortWelcome">
              <h1 className="animated-heading" style={{ fontWeight: 'bold' }}>
                {t('contactMainTitle')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: 'white',
          marginTop: '-66px',
          borderRadius: '50px 50px 50px 50px',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: '1',
        }}
        id='iletisimCards'
      >
        <div class="container2" style={{ justifyContent: 'center', marginTop: '50px' }}>
          <div class="card" style={{ height: '300px', minWidth: '300px' }}>
            <div class="box" style={{alignItems:"flex-start"}}>
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>

                
                <p style={{fontSize:"larger"}}>
                <a href="https://web.whatsapp.com/+905367745759">+90 536 774 57 59</a>
                </p>
              </div>
            </div>
          </div>
          <div class="card" style={{ height: '300px', minWidth: '300px' }}>
            <div class="box" style={{alignItems:"flex-start"}}>
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>

             
                <p style={{fontSize:"larger"}}>
                Şirinyalı Mah. 1547 Sok. No: 2A/9 Muratpaşa / Antalya / TÜRKİYE
                </p>
              </div>
            </div>
          </div>
          <div class="card" style={{ height: '300px', minWidth: '300px' }}>
            <div class="box" style={{alignItems:"flex-start"}}>
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>

                
                <p style={{alignItems:"center",fontSize:"larger"}}><a href="tel:+90 242 323 22 13 <br> +90 536 774 57 59">+90 242 323 22 13 <br/> +90 536 774 57 59</a></p>
              </div>
            </div>
          </div>

          <div class="card" style={{ height: '300px', minWidth: '300px' }}>
            <div class="box" style={{alignItems:"flex-start"}}>
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope} 
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>
                
                <p style={{fontSize:"larger"}}><a href="mailto:istek@istek.com.tr">istek@istek.com.tr</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
