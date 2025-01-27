import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        style={{ backgroundImage: 'url("/img/gnsmanzr.jpg")' }}
        className="home-section section-hero overlay slanted position-relative"
        id="home-section"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center" id="evaPortWelcome">
              <h1 className="animated-heading" style={{ fontWeight: "bold" }}>
                {t("aboutUsMainTitle")}
              </h1>
              {/*
                            <h3>{t("aboutUsSecondMainTitle")}</h3>
*/}
            </div>
          </div>
        </div>
      </section>
      <section className="site-section" id="next-section" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom:"4%" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="/img/aboutUsImage.jpg"
                alt=""
                className="img-fluid img-shadow"
                id="firstImgInAbout"
              />
            </div>
            <div className="col-lg-5 ml-auto">
              <h2 className="section-title mb-3">{t("aboutUsFirstTitle")}</h2>
              <p>{t("aboutUsFirstParagraph1")}</p>
              <p>{t("aboutUsFirstParagraph2")}</p>
              {/* <p>{t("aboutUsFirstParagraph3")}</p> */}
            </div>
          </div>
            <h3 className="mb-4 mt-4 h4">{t('aboutVisionTitle')}</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
            {t('aboutVisionParagraph')}
        </p>
            <h3 className="mb-4 mt-4 h4">{t('aboutMissionTitle')}</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
            {t('aboutMissionParagraph')}
        </p>
        </div>
      </section>
      
      <section >
        <div className="site-section"  style={{ display: 'flex', justifyContent: 'space-evenly',backgroundColor:"white",marginTop:"-110px" }} id="aboutHumanSection">
        <h2 style={{color:"black", display:"flex",alignItems:"center"}}>{t("aboutUsMeeting")}</h2>
        <figure class="snip1336">
          <img
            src="/img/ferda_bg.jpg"
            alt="sample87"
          />
          <figcaption>
            <img
              src="/img/ferdapp.jpg"
              alt="profile-sample4"
              class="profile"
            />
            <h2>
            FERDA DURDU<span style={{color:'red'}}>CEO</span>
            </h2>
            <p style={{textAlign:"left"}}>
            {t('aboutUsHumanFerdaBreif')}
            </p>
            <p style={{textAlign:"left"}}>
            {t('aboutUsHumanFerdaBreif2')}
            </p>
            
          </figcaption>
        </figure>
        <figure class="snip1336 hover">
          <img
            src="/img/turku_bk.jpg"
            alt="sample74"
          />
          <figcaption>
            <img
              src="/img/turkupp.jpg"
              alt="profile-sample2"
              class="profile"
            />
            <h2>
            TÜRKÜ AÇAR<span style={{color:'red'}}>CTO</span>
            </h2>
            <p style={{textAlign:"left"}}>
            {t('aboutUsHumanTurkuBreif')}
            </p>
            <p style={{textAlign:"left"}}>
            {t('aboutUsHumanTurkuBreif2')}
            </p>
            
          </figcaption>
        </figure>
        </div>
      </section>
    </>
  );
};

export default About;
