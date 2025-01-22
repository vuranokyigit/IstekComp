import React from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice,faAngleRight} from '@fortawesome/free-solid-svg-icons';

function Projects() {
    const { t } = useTranslation();
    return (
        <>
        <section
          style={{ backgroundImage: 'url("/img/catidaki.jpg")' }}
          className="home-section section-hero overlay slanted position-relative"
          id="home-section"
        >
          <div className="container">
            <div
              className="row align-items-center justify-content-center"
              id="productsTitleIstek"
            >
              <div className="col-md-8 text-center">
              <h1 className="animated-heading" style={{ fontWeight: "bold" }}>
                  {t("maintenanceMainTitle")}
                </h1>
                <div className="mx-auto w-75">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
        className="site-section portfolio-single"
        id="next-section"
        style={{
          color: 'white',
          backgroundColor: 'black',
          borderRadius: '50px 50px 0px 0px',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <p />
            </div>
          </div>
          <div className="row mb-5 mt-5">
            <div className="col-lg-6">
              <figure>
                <a href="/img/Istek_Cu+.png" data-fancybox="gallery">
                  <img src="/img/Istek_Cu+.jpg" alt="" className="img-fluid" />
                </a>
              </figure>
            </div>
            <div className="col-lg-5 ml-auto h-100 jm-sticky-top">
              <div className="mb-5">
                <h3 className="mb-4 h4" style={{ color: 'White' }}>
                  Istek Cu+
                </h3>
                <p className="mb-0">{t('productEvaCoreParagraph')}</p>
              </div>
              <div>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'white' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <FontAwesomeIcon icon={faFileInvoice} size="2xl" />
                  </span>
                </a>
                <div
                  className="d-flex align-items-center justify-content-center mb-2"
                  id="infoNumber"
                >
                  <span className="icon-line-mobile mr-6" />
                </div>
                <span className="caption">{t('productDocuments')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="site-section2 portfolio-single"
        id="next-section"
        style={{
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '50px 50px 0px 0px',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <p />
            </div>
          </div>
          <div className="row mb-5 mt-5">
            
            <div className="col-lg-5 ml-auto h-100 jm-sticky-top">
              <div className="mb-5">
                <h3 className="mb-4 h4" style={{ color: 'White' }}>
                  Istek Cu+
                </h3>
                <p className="mb-0">{t('productEvaCoreParagraph')}</p>
              </div>
              <div>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'white' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <FontAwesomeIcon icon={faFileInvoice} size="2xl" />
                  </span>
                </a>
                <div
                  className="d-flex align-items-center justify-content-center mb-2"
                  id="infoNumber"
                >
                  <span className="icon-line-mobile mr-6" />
                </div>
                <span className="caption">{t('productDocuments')}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <a href="/img/Istek_Cu+.png" data-fancybox="gallery">
                  <img src="/img/Istek_Cu+.jpg" alt="" className="img-fluid" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </section>
       
      </>
    );
}

export default Projects;