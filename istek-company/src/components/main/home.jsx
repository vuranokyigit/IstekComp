import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faIndustry, faCubes, faUserGroup } from '@fortawesome/free-solid-svg-icons';

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
                <h1 className="section-title mb-3">Doğanın enerjisini sizinle buluşturuyoruz.</h1>
                <p>Güneşin gücünü yakalayarak çevre dostu ve ekonomik enerji çözümleri sunuyoruz. Termal güneş kollektörlerinden enerji sistemlerine, yurtiçinde satış ve montaj hizmeti sağlarken, ürünlerimizi dünyanın dört bir yanına ihraç ederek küresel enerji dönüşümüne katkıda bulunuyoruz.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-0 border-top pt-5 block__19738 section-counter" id="counterMainDiv">
          <div className="container" id="counterCont">
            <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
              <span className="homeIcon">
                <FontAwesomeIcon icon={faCubes} size="2xl" />
              </span>
              <div
                className="d-flex align-items-center justify-content-center mb-2"
                id="infoNumber"
              >
                <span className="icon-line-mobile mr-3" />
                <span className="number" data-number={40}>40</span>
              </div>
              <span className="caption">{t('homeCounterProduction')} </span>
            </div>
            <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
              <span className="homeIcon">
                <FontAwesomeIcon icon={faUserGroup} size="2xl" />
              </span>
              <div
                className="d-flex align-items-center justify-content-center mb-2"
                id="infoNumber"
              >
                <span className="icon-line-lightbulb mr-3" />
                <span className="number" data-number={7}>7</span>
              </div>
              <span className="caption">{t('homeCounterWorkers')}</span>
            </div>
            <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
              <span className="homeIcon">
                <FontAwesomeIcon icon={faIndustry} size="2xl" />
              </span>
              <div
                className="d-flex align-items-center justify-content-center mb-2"
                id="infoNumber"
              >
                <span className="number" data-number={1000}>1000</span>
              </div>
              <span className="caption">
                m<sup>2</sup> {t('homeCounterFactoryArea')}
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
        <h1 style={{ color: 'black' }}>Our Services & Capability</h1>
        <h6 style={{ color: 'black', fontWeight: 'lighter' }}>
          Our expertise lies in providing top-quality solar collectors, water boilers, <br /> and
          complete solar energy systems tailored to your needs. <br />
          From installation to regular maintenance and after-sales support,
          <br /> we ensure your energy solutions run efficiently and sustainably.
        </h6>

        <div class="container2" style={{ justifyContent: 'center', marginTop: '50px' }}>
          <div class="card" style={{ height: '350px', minWidth: '350px' }}>
            <div class="box">
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>

                <h3>Satış</h3>
                <p>
                  İhtiyaçlarına cevap verecek şekilde uyarlayacağımız güneş kollektörü, boyler ve
                  güneş enerjisi sistemlerimizi bütün adımlarda size maksimum desteği sağlayarak
                  ulaştırıyoruz.{' '}
                </p>
              </div>
            </div>
          </div>
          <div class="card" style={{ height: '350px', minWidth: '350px' }}>
            <div class="box">
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>

                <h3>Anahtar teslim projeler</h3>
                <p>Proje planlaması ve montaj hizmetleri ile her adımda yanındayız.</p>
              </div>
            </div>
          </div>

          <div class="card" style={{ height: '350px', minWidth: '350px' }}>
            <div class="box">
              <div class="content">
                <span>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    size="2xl"
                    style={{ marginBottom: '30px', marginTop: '20px' }}
                  />
                </span>
                <h3>Satış Sonrası</h3>
                <p>Garanti kapsamında ve dışında bütün sorunlarınızda destek olacak teknik ekip.</p>
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
        <h1 style={{ color: 'white' }}>Our Recent Projects</h1>
        <h6 style={{ color: 'white', fontWeight: 'lighter' }}>
          Our expertise lies in providing top-quality solar collectors, water boilers, <br /> and
          complete solar energy systems tailored to your needs. <br />
          From installation to regular maintenance and after-sales support,
          <br /> we ensure your energy solutions run efficiently and sustainably.
        </h6>
        <div className="container2">
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
              <span style={{ color: 'black' }}>Güneş Enerjisi Toplu Sistemi Hesaplama</span>
            </div>
            <div className="uk-form-horizontal uk-margin-large">
              {/* Yapı Tipi Seçimi */}
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="yapiTipi" style={{ color: 'black' }}>
                  Yapı Tipi:
                </label>
                <div className="uk-form-controls">
                  <select
                    className="uk-select"
                    id="yapiTipi"
                    value={yapiTipi}
                    onChange={e => setYapiTipi(parseFloat(e.target.value))}
                  >
                    <option value={7}>Spor Salonu</option>
                    <option value={15}>Hastane</option>
                    <option value={18.5}>Apartman Lüx</option>
                    <option value={5}>Apartman</option>
                    <option value={20}>Öğrenci Yurdu</option>
                    <option value={10}>Otel (2-3 Yıldız)</option>
                    <option value={10}>Otel (4-7 Yıldız)</option>
                    <option value={10}>Pansiyon (Misafirhane)</option>
                    <option value={20}>Fabrika</option>
                    <option value={10}>Lokanta</option>
                    <option value={10}>Havuz</option>
                    <option value={20}>Okul</option>
                    <option value={10}>Büro / İşyeri</option>
                    <option value={10}>Müstakil Konut</option>
                  </select>
                </div>
              </div>

              {/* Kişi Sayısı Girişi */}
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="kisiSayisi" style={{ color: 'black' }}>
                  Yapıda Bulunan Kişi Sayısı:
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
                    Hesapla
                  </button>
                </div>
              </div>

              {/* Sonuç Alanları */}
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="boylerSonuc" style={{ color: 'black' }}>
                  Boyler İhtiyacı:
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
                  Kollektör Large:
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
                  Kollektör Small:
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
