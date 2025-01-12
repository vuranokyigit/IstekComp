import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        style={{ backgroundImage: 'url("/img/solarpanelwgrass.jpg")' }}
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
      <h1 className="animated-heading" style={{ fontWeight: "bold" }}>
                {t("humanResourcesTitle")}
              </h1>
      <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
            FERDA DURDU<span style={{color:'red'}}>{t('aboutUsHumanFerdaBreif')}</span>
            </h2>
            <p>
            {t('aboutUsHumanFerda2')}
            </p>
            <a href="/istek/humanres/ferdadurdu" class="info">
            {t('homeAboutUsLink')}
            </a>
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
            TÜRKÜ AÇAR<span style={{color:'red'}}>{t('aboutUsHumanTurkuBreif')}</span>
            </h2>
            <p>
            {t('aboutUsHumanTurku3')}
            </p>
            <a href="/istek/humanres/turkuacar" class="info">
            {t('homeAboutUsLink')}
            </a>
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default About;
