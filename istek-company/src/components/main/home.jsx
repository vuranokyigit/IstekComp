import React from 'react';
import { useTranslation } from "react-i18next";




const Home = () => {
    const { t } = useTranslation();
  

    return (
        <>
        <section
          style={{ backgroundImage: 'url("/img/solarcollector.jpg")' }}
          className="home-section section-hero overlay slanted position-relative"
          id="home-section"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center" id="evaPortWelcome" style={{marginTop: "100px"}}>
                               <h1 className="animated-heading" style={{fontWeight: "bolder"}}>{t('homeWelcome')}</h1>
                               <h1 className="animated-heading" style={{fontWeight: "bolder"}}>{t('homeWelcome2')}</h1>
                               
                               <a href="/istek/contact" className="btn btn-md" id="homeSectionBtnContact"
                                  style={{fontWeight: "300"}}>
                                   {t('homeButtonGetInTouch')}
                               </a>
                           </div>
            </div>
          </div>
        </section>
        <section className="site-section" id="next-section" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="/img/solarpanelwp.jpg"
                  alt=""
                  className="img-fluid img-shadow"
                  id="firstImgInAbout"
                />
              </div>
              <div className="col-lg-5 ml-auto">
                <h2 className="section-title mb-3">{t("aboutUsFirstTitle")}</h2>
                <p>{t("aboutUsFirstParagraph1")}</p>
                <p>{t("aboutUsFirstParagraph2")}</p>
                <p>{t("aboutUsFirstParagraph3")}</p>
              </div>
            </div>
          </div>
        </section>
        
  {/* target section */}
  <section className="target_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>12+</h2>
            <h5>Years of Business</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>20000+</h2>
            <h5>Projects Delivered</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>10000+</h2>
            <h5>Satisfied Customers</h5>
          </div>
        </div>
        
      </div>
    </div>
  </section>
        </>
    );
};

export default Home;