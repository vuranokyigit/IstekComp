import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        style={{ backgroundImage: 'url("/img/products_copy.jpg")' }}
        className="home-section section-hero image-bg overlay-2 slanted"
        id="home-section"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center" id="productsTitleIstek">
            <div className="col-md-8 text-center">
              <h1 className="animated-heading" style={{ fontWeight: 'bold' }}>
                {t('productMainTitle')}
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
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '50px 50px 0px 0px',
          paddingTop: '5rem',
          marginTop: '-320px',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <h1 style={{fontSize:"40px",color:"black"}}>{t('collectorTitle')}</h1> 

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
                <h3 className="mb-4 h4" style={{ color: 'black' }}>
                  Istek Cu+
                </h3>
                <p className="mb-0">{t('productEvaCoreParagraph')}</p>
              </div>
              <div>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
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
              <div id="certificateIcon">
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <img src="/img/Türk_Standardları_Enstitüsü.png" alt="" />
                  </span>
                </a>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <img src="/img/standardsmark.png" alt="" />
                  </span>
                </a>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <img style={{ height: '55px', width: '50px' }} src="/img/CE-Logo.png" alt="" />
                  </span>
                </a>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <img src="/img/solarkeymark.png" alt="" />
                  </span>
                </a>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <img src="/img/iso9001.png" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="boilerSection"
        style={{
          color: 'white',
          backgroundColor: 'black',
          marginTop: '-66px',
          borderRadius: '50px 50px 0px 0px',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
         <h1 style={{fontSize:"40px"}}> {t('boilerTitle3')}</h1> 
        <div id="boilersDisplay" style={{ display: 'flex' }}>
          <div id="firstBoilerSec" style={{ width: '50%' }}>
            <h1 style={{fontSize:"25px"}}>{t('boilerTitle')}</h1>
            <p
              className="mb-0"
              style={{
                color: 'white',
                fontWeight: 'lighter',
                padding: '30px',
                fontSize: 'small',
                width: '80%',
                margin: 'auto',
              }}
            >
              {t('productBoylerParagraph1')}
            </p>
            <div class="container2" style={{ justifyContent: 'center', marginTop: '50px' }}>
              <div className="col-lg-4">
                <figure>
                  <a href="/img/boyler-Photoroom.png" data-fancybox="gallery">
                    <img src="/img/boyler-Photoroom.png" alt="" className="img-fluid" />
                  </a>
                </figure>
              </div>
              {/* <div className="col-lg-4">
            <figure>
              <a href="/img/Boyler_kılıflı-Photoroom.png" data-fancybox="gallery">
                <img src="/img/Boyler_kılıflı-Photoroom.png" alt="" className="img-fluid" />
              </a>
            </figure>
          </div> */}
              <div className="col-lg-4">
                <figure>
                  <a href="/img/boyler_çift_tek_serpantin-Photoroom.png" data-fancybox="gallery">
                    <img
                      src="/img/boyler_çift_tek_serpantin-Photoroom.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </figure>
              </div>
            </div>
            <div>
                <a
                href="/boiler.pdf"
                style={{ color: 'white', marginLeft: '10px' }}
                target="/istek/boiler.pdf"
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
             
            <div id='iconBrandCert' style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
              
            <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <img style={{width:"60px",height:"60px"}} src="/img/iso9001.png" alt="" />
                  </span>
                </a>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <img style={{width:"60px",height:"60px"}} src="/img/logotse.png" alt="" />
                  </span>
                </a>

                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                  rel="noopener noreferrer"
                >
                  <span className="homeIcon">
                    <img style={{width:"60px",height:"60px"}} src="/img/cebeyazsiyah.jpg" alt="" />
                  </span>
                </a>
                
            </div>
          </div>
          <div id="secondBoilerSec" style={{ width: '50%' }}>
            <h1 style={{fontSize:"25px"}}>{t('boilerTitle2')}</h1>
            <p
              className="mb-0"
              style={{
                color: 'white',
                fontWeight: 'lighter',
                padding: '30px',
                fontSize: 'small',
                width: '80%',
                margin: 'auto',
              }}
            >
              {t('productBoylerParagraph2')}
            </p>

            
            <div class="container2" style={{ justifyContent: 'center', marginTop: '50px',flexDirection:"column",alignItems:"center" }}>
              
              <div className="col-lg-4">
                <figure>
                  <a href="/img/Boyler_kılıflı-Photoroom.png" data-fancybox="gallery">
                    <img src="/img/yatık_boyler2-Photoroom.png" alt="" className="img-fluid" />
                  </a>
                </figure>
              </div>
              <div className="col-lg-4">
                <figure>
                  <a href="/img/boyler_çift_tek_serpantin-Photoroom.png" data-fancybox="gallery">
                    <img
                      src="/img/yatık_boyler-Photoroom.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </figure>
              </div>
            </div>
            <div style={{marginTop:"4%"}}>
              <a
                href="/boiler.pdf"
                style={{ color: 'white' }}
                target="/istek/boiler.pdf"
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
            <div id='iconBrandCert' style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
              
              <a
                    href="/Istek_Cu+_Technical_Sheet.pdf"
                    style={{ color: 'black' }}
                    target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                    rel="noopener noreferrer"
                  >
                    <span className="homeIcon">
                      <img style={{width:"60px",height:"60px"}} src="/img/iso9001.png" alt="" />
                    </span>
                  </a>
                  <a
                    href="/Istek_Cu+_Technical_Sheet.pdf"
                    style={{ color: 'black' }}
                    target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                    rel="noopener noreferrer"
                  >
                    <span className="homeIcon">
                      <img style={{width:"60px",height:"60px"}} src="/img/logotse.png" alt="" />
                    </span>
                  </a>
  
                  <a
                    href="/Istek_Cu+_Technical_Sheet.pdf"
                    style={{ color: 'black' }}
                    target="/istek/Istek_Cu+_Technical_Sheet.pdf"
                    rel="noopener noreferrer"
                  >
                    <span className="homeIcon">
                      <img style={{width:"60px",height:"60px"}} src="/img/cebeyazsiyah.jpg" alt="" />
                    </span>
                  </a>
                  
              </div>
          </div>
          
        </div>
      </section>
      <section
        className="site-section portfolio-single"
        id="next-section"
        style={{
          color: 'black',
          marginTop: '-60px',
          backgroundColor: 'white',
          borderRadius: '50px 50px 0px 0px',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
                <h1 style={{fontSize:"40px",color:"black"}}> {t('solarEnergyTitle')}</h1> 

        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <p />
            </div>
          </div>
          <div className="row mb-5 mt-5">
            <div className="col-lg-6">
              <figure>
                <a href="/img/solar_energy_system .png" data-fancybox="gallery">
                  <img src="/img/solar_energy_system .jpg" alt="" className="img-fluid" />
                </a>
              </figure>
            </div>
            <div className="col-lg-5 ml-auto h-100 jm-sticky-top">
              <div className="mb-5">
                <h3 className="mb-4 h4" style={{ color: 'black' }}>
                  {t('producSolarSystemsTitle')}
                </h3>
                <p className="mb-0">{t('productEvaBrandParagraph')}</p>
              </div>
              <div>
                <a
                  href="/Istek_Cu+_Technical_Sheet.pdf"
                  style={{ color: 'black' }}
                  target="_blank"
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
      <section class="dorik-section dorik-section-ab2jbjkk" style={{ marginTop: '-20px' }}>
        <div class="">
          <div class="container dorik-row-p5qzo5wr-wrapper    ">
            <div class="dorik-row-p5qzo5wr flex  ">
              <div class="col-lg-2/5 " id="leftrightsectionistek">
                <div class="column-inner dorik-column-sx477vmg  2/5">
                  <div class="dorik-wrapper dorik-heading-u7q2i2rj-wrapper ">
                    <h2 class="dorik-heading dorik-heading-u7q2i2rj ">
                      <span>FAQ</span>
                    </h2>
                  </div>
                  <div class="dorik-text dorik-text-3q3j7rrw ">
                    <p>
                      {t('productFAQEntryParagraph')}
                      <span className="homeIcon">
                        <a
                          style={{ display: 'flex', justifyContent: 'center' }}
                          href="/istek/contact"
                        >
                          <FontAwesomeIcon icon={faAngleRight} shake color="white" />
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3/5 " id="leftrightsectionistek">
                <div class="column-inner dorik-column-n4vsrfs2  3/5">
                  <div class="dorik-accordion-exws77h5">
                    <details>
                      <summary>{t('faqQuestion1')}</summary>
                      <div class="details-content" path="accordions/items/0/paragraph">
                        <p>{t('faqAnswer1')}&nbsp;</p>
                      </div>
                    </details>
                    <details>
                      <summary>{t('faqQuestion2')}</summary>
                      <div class="details-content" path="accordions/items/1/paragraph">
                        <p>{t('faqAnswer2')}&nbsp;</p>
                      </div>
                    </details>
                    <details>
                      <summary>{t('faqQuestion3')}</summary>
                      <div class="details-content" path="accordions/items/2/paragraph">
                        <p>{t('faqAnswer3')}&nbsp;</p>
                      </div>
                    </details>
                    <details>
                      <summary>{t('faqQuestion4')}</summary>
                      <div class="details-content" path="accordions/items/3/paragraph">
                        <p>{t('faqAnswer4')}&nbsp;</p>
                      </div>
                    </details>
                    <details>
                      <summary>{t('faqQuestion5')}</summary>
                      <div class="details-content" path="accordions/items/4/paragraph">
                        <p>{t('faqAnswer5')}&nbsp;</p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
