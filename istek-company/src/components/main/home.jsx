import React, { useState } from 'react';
import CountUp from 'react-countup';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleCheck, faTrophy, faGlobe, faCartShopping, faHammer,faTty } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { t } = useTranslation();
  const [boylerSonuc, setBoylerSonuc] = useState('');
  const [kollektorlSonuc, setKollektorlSonuc] = useState('');
  const [kollektorsSonuc, setKollektorsSonuc] = useState('');
  const [kisiSayisi, setKisiSayisi] = useState(10);
  const [yapiTipi, setYapiTipi] = useState(7); // Varsayılan olarak "Spor Salonu"

  const hesapla = () => {
    const kisiSayisiHesap = kisiSayisi * 40;
    const katsayi = yapiTipi / 10;
    const boylerSonucHesap = katsayi * kisiSayisiHesap;
    const kollektorlSonucHesap = (kisiSayisiHesap / 120 / 11 / 3) * 20;
    const kollektorsSonucHesap = kollektorlSonucHesap * 1.375;

    setBoylerSonuc(Math.round(boylerSonucHesap) + ' Litre');
    setKollektorlSonuc(Math.round(kollektorlSonucHesap) + ' Adet');
    setKollektorsSonuc(Math.round(kollektorsSonucHesap) + ' Adet');
  };

  return (
    <>
      <section>
        <div className="bgContainer">
          <div className="overlay">
            <video
              src="https://cdn.cmsfly.com/6322e8cf4b31e900424a9af7/video-Wyag5K.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-md-8 text-center"
                id="evaPortWelcome"
                style={{ marginTop: '200px' }}
              >
                <h1 className="animated-heading" style={{ fontWeight: 'bolder' }}>
                  {t('homeWelcome')}
                </h1>
                <h1 className="animated-heading" style={{ fontWeight: 'bolder' }}>
                  {t('homeWelcome2')}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="site-section">
        <div
          className="site-section"
          id="next-section"
          style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'-10%' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="/img/gunes_kollektoru.jpg"
                  alt=""
                  className="img-fluid img-shadow"
                  id="firstImgInAbout"
                />
              </div>
              <div className="col-lg-5 ml-auto">
                <h1 className="section-title mb-3">{t('energyNaturalTitle')}</h1>
                <p>{t('energyNaturalParagraph')}</p>
              </div>
            </div>
          </div>
        </div>
        <div
      className="row pb-0 border-top pt-5 block__19738 section-counter"
      id="counterMainDiv"
    >
      <div className="container" id="counterCont">
        {/* Production Counter */}
        <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
          <span className="homeIcon">
            <FontAwesomeIcon icon={faTrophy} size="2xl" />
          </span>
          <div
            className="d-flex align-items-center justify-content-center mb-2"
            id="infoNumber"
          >
            <span className="icon-line-mobile mr-3" />
            <span className="number">
              <CountUp start={0} end={40} duration={2.5} />+
            </span>
          </div>
          <span className="caption">{t('homeCounterBrands')}</span>
        </div>

        {/* Workers Counter */}
        <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
          <span className="homeIcon">
            <FontAwesomeIcon icon={faGlobe} size="2xl" />
          </span>
          <div
            className="d-flex align-items-center justify-content-center mb-2"
            id="infoNumber"
          >
            <span className="icon-line-lightbulb mr-3" />
            <span className="number">
              <CountUp start={0} end={7} duration={2.5} />
            </span>
          </div>
          <span className="caption">{t('homeCounterArea')}</span>
        </div>

        {/* Factory Area Counter */}
        <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
          <span className="homeIcon">
            <FontAwesomeIcon icon={faFileCircleCheck} size="2xl" />
          </span>
          <div
            className="d-flex align-items-center justify-content-center mb-2"
            id="infoNumber"
          >
            <span className="number">
              <CountUp start={0} end={1000} duration={2.5} />+
            </span>
          </div>
          <span className="caption">
            {t('homeCounterProject')}
          </span>
        </div>
      </div>
    </div>
      </section>

      <section
        style={{
          backgroundColor: 'white',
          marginTop: '-66px',
          borderRadius: '50px 50px 0px 0px',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <h1 style={{ color: 'black'  }}>{t('ourServicesTitle')}</h1>
        <h6 style={{ color: 'black', fontWeight: 'lighter', margin:"auto",width:"50%",fontSize:"smaller"}}>
          {t('ourServicesParagraph')}
        </h6>

        <div class="container2" style={{ justifyContent: 'center', marginTop: '50px' }}>
          <div class="card" style={{ height: '350px', minWidth: '350px' }}>
            <div class="box" style={{alignItems:"flex-start"}}>
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>

                <h3>{t('ourServicesCard1Title')}</h3>
                <p style={{fontSize:"smaller"}}>
                {t('ourServicesCard1Paragraph')}{' '}
                </p>
              </div>
            </div>
          </div>
          <div class="card" style={{ height: '350px', minWidth: '350px' }}>
            <div class="box" style={{alignItems:"flex-start"}}>
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faHammer}
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>

                <h3>{t('ourServicesCard2Title')}</h3>
                <p style={{fontSize:"smaller"}}>{t('ourServicesCard2Paragraph')}</p>
              </div>
            </div>
          </div>

          <div class="card" style={{ height: '350px', minWidth: '350px' }}>
            <div class="box" style={{alignItems:"flex-start"}}>
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faTty} 
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>
                <h3>{t('ourServicesCard3Title')}</h3>
                <p style={{fontSize:"smaller"}}>{t('ourServicesCard3Paragraph')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: 'black',
          marginTop: '-66px',
          borderRadius: '50px 50px 0px 0px',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <h1 style={{ color: 'white' }}>{t('recentProjectsTitle')}</h1>
        <h6  style={{
            color: 'white',
            fontWeight: 'lighter',
            padding: '30px',
            fontSize: 'smaller',
            width: '50%',
            margin: 'auto',
          }}>
         {t('recentProjectsParagraph')}
        </h6>
        <div className="container2" id='ourRecentProject'>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="/img/gunes_kollektoru.jpg"
              alt=""
              className="img-fluid img-shadow"
              id="firstImgInAbout2"
            />
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="/img/gunes_kollektoru.jpg"
              alt=""
              className="img-fluid img-shadow"
              id="firstImgInAbout2"
            />
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="/img/gunes_kollektoru.jpg"
              alt=""
              className="img-fluid img-shadow"
              id="firstImgInAbout2"
            />
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
        id="solarEnergySystemCalculation"
      >
        <h1 style={{ color: 'black' }}>Solar Energy System Calculation</h1>
        <div
          className="uk-bg-white br-20 mk5-ic uk-position-relative min-h500 ic-color"
          id="uk-bg-white"
        >
          <div>
            <div className="uk-heading-line uk-text-center fw-5 fs-20">
              <span style={{ color: 'black' }}></span>
            </div>
            <div className="uk-form-horizontal uk-margin-large">
              {/* Yapı Tipi Seçimi */}
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="yapiTipi" style={{ color: 'black' }}>
                  {t('yapiTipi')}:
                </label>
                <div className="uk-form-controls">
                  <select
                    className="uk-select"
                    id="yapiTipi"
                    value={yapiTipi}
                    onChange={e => setYapiTipi(parseFloat(e.target.value))}
                  >
                    <option value={7}>{t('picklistSporSalonu')}</option>
                    <option value={15}>{t('picklistHastane')}</option>
                    <option value={18.5}>{t('picklistApartmanLux')}</option>
                    <option value={5}>{t('picklistApartman')}</option>
                    <option value={20}>{t('picklistYurt')}</option>
                    <option value={10}>{t('picklistOtel1')}</option>
                    <option value={10}>{t('picklistOtel2')}</option>
                    <option value={10}>{t('picklistPansiyon')}</option>
                    <option value={20}>{t('picklistFabrika')}</option>
                    <option value={10}>{t('picklistLokanta')}</option>
                    <option value={10}>{t('picklistHavuz')}</option>
                    <option value={20}>{t('picklistOkul')}</option>
                    <option value={10}>{t('picklistBuro')}</option>
                    <option value={10}>{t('picklistVilla')}</option>
                  </select>
                </div>
              </div>

              {/* Kişi Sayısı Girişi */}
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="kisiSayisi" style={{ color: 'black' }}>
                {t('yapıdaBulunanKişiSayısı')}:
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="kisiSayisi"
                    type="number"
                    placeholder="Yapıda Bulunan Kişi Sayısı"
                    value={kisiSayisi}
                    onChange={e => setKisiSayisi(parseInt(e.target.value))}
                  />
                </div>
              </div>

              {/* Hesaplama Butonu */}
              <div className="uk-margin">
                <div
                  className="uk-form-controls"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <button
                    className="uk-button uk-w-100"
                    onClick={hesapla}
                    style={{
                      color: 'black',
                      padding: ' 8px 20px',
                      borderRadius: '5px',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2);',
                      transition: '0.5s',
                    }}
                  >
                    {t('hesaplaButonu')}
                  </button>
                </div>
              </div>

              {/* Sonuç Alanları */}
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="boylerSonuc" style={{ color: 'black' }}>
                {t('BoylerNeed')}:
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="boylerSonuc"
                    type="text"
                    disabled
                    value={boylerSonuc}
                  />
                </div>
              </div>
              <div className="uk-margin">
                <label
                  className="uk-form-label"
                  htmlFor="kollektorlSonuc"
                  style={{ color: 'black' }}
                >
                  {t('KollektorL')}:
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="kollektorlSonuc"
                    type="text"
                    disabled
                    value={kollektorlSonuc}
                  />
                </div>
              </div>
              <div className="uk-margin">
                <label
                  className="uk-form-label"
                  htmlFor="kollektorsSonuc"
                  style={{ color: 'black' }}
                >
                  {t('KollektorS')}:
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="kollektorsSonuc"
                    type="text"
                    disabled
                    value={kollektorsSonuc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
