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
                src="/img/kollector.jpg"
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
      <section >
        <div className="site-section"  style={{ display: 'flex', justifyContent: 'space-evenly',backgroundColor:"white",marginTop:"-110px" }} id="aboutHumanSection">
        <h2 style={{color:"black", display:"flex",alignItems:"center"}}>{t("aboutUsMeeting")}</h2>
        <figure class="snip1336">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
            alt="sample87"
          />
          <figcaption>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg"
              alt="profile-sample4"
              class="profile"
            />
            <h2>
            FERDA DURDU<span style={{color:'red'}}>CEO</span>
            </h2>
            <p>
            {t('aboutUsHumanFerdaBreif')}
            </p>
            
          </figcaption>
        </figure>
        <figure class="snip1336 hover">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg"
            alt="sample74"
          />
          <figcaption>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
              alt="profile-sample2"
              class="profile"
            />
            <h2>
            TÜRKÜ AÇAR<span style={{color:'red'}}>CTO</span>
            </h2>
            <p>
            {t('aboutUsHumanTurkuBreif')}
            </p>
            
          </figcaption>
        </figure>
        <figure class="snip1336 hover">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg"
            alt="sample74"
          />
          <figcaption>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
              alt="profile-sample2"
              class="profile"
            />
            <h2>
            MEHMET ATLI<span style={{color:'red'}}>CFO</span>
            </h2>
            <p>
            {t('aboutUsHumanTurku3')}
            </p>
            
          </figcaption>
        </figure>
        </div>
      </section>
    </>
  );
};

export default About;
