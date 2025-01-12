import React from 'react';
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileInvoice} from "@fortawesome/free-solid-svg-icons";


const IstekAlu = () => {
   

    const {t}=useTranslation();
    return (
        <>
          <section
              className="home-section section-hero image-bg overlay-2 slanted"
              style={{ backgroundImage: 'url("/assets/Evarenew2.png")' }}
              id="home-section"
          >
              <div className="container">
                  <div className="row align-items-center justify-content-center">
                      <div className="col-md-8 text-center">
                          <h1 style={{textTransform:"capitalize"}}>Istek Alu</h1>
                          <div className="mx-auto w-75">
                              <p />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="site-section portfolio-single" id="next-section">
              <div className="container">
                  <div className="row mb-5">
                      <div className="col-md-6">
                          <p />
                      </div>
                  </div>
                  <div className="row mb-5 mt-5">
                      <div className="col-lg-6">
                          <figure>
                              <a href="assets/3.png" data-fancybox="gallery">
                              <img src="/img/solarcollector.jpg" alt="" className="img-fluid" />
                              </a>

                          </figure>
                      </div>
                      <div className="col-lg-5 ml-auto h-100 jm-sticky-top">
                          <div className="mb-5" id="paragraphEco">
                              <h3 className="mb-4 h4">Istek Alu</h3>
                              <p className="mb-0">
                                  {t('productEvaRenewParagraph')}
                              </p>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
          <section className="documentSection">
              <h1>{t('productEvaRenewCertificateTitle')}</h1>
              <div className="row pb-4 border-top pt-5 block__19738 section-counter">
                  <div className="col-12 col-md-12 col-lg-12 mb-7 mb-lg-0">
                      <a href="/scope.pdf" style={{color:"black"}} target="_blank" rel="noopener noreferrer"><span className="homeIcon"><FontAwesomeIcon icon={faFileInvoice} size="2xl" /></span></a>
                      <div className="d-flex align-items-center justify-content-center mb-2" id="infoNumber">
                          <span className="icon-line-mobile mr-3" />
                      </div>
                      <span className="caption">{t('productDocuments')}  </span>
                  </div>
                  <hr style={{
                      width:"50%", margin:"0 auto", marginTop:"5%"
                  }}/>
              </div>
              <h3 className="mb-4 h4"> Soğurma Oranı (%90)</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
           Siyah mat boyalı alüminyum yüzey, güneş
ışığını yüksek verimlilikle soğurur ve enerji dönüşümünü optimize
eder.
        </p>
            
            <h3 className="mb-4 mt-4 h4">İzolasyon</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
            Taş yünü izolasyonu, ısı kaybını en aza indirir.
        </p>
            <h3 className="mb-4 mt-4 h4">Kasa ve Malzeme</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
            Alüminyum geçme çıtalarla yapılan
kasa, eloksal kaplama ile korozyona karşı dirençlidir.
        </p>
        <h3 className="mb-4 mt-4 h4">Üst Örtü</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
            Düşük demir oksitli temperli cam, yüksek
mekanik dayanım ve verimli güneş ışığı soğurumu sağlar.
        </p>
        <h3 className="mb-4 mt-4 h4">Alt Örtü</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
           Gofrajlı alüminyum yapısı, ısı kayıplarını
minimize eder.
        </p>
        
        <h3 className="mb-4 mt-4 h4">Garanti ve Kullanım Alanı</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
          Garanti Süresi: 2 yıldır ve Kullanım Alanı her türlü insan faaliyeti yapılan alanlarda
sıcak su temini için verimli bir çözüm sunar. Standart
malzemeler ve bağlantı noktalarıyla farklı marka ve
sistemlere kolayca uyum sağlar, montajı basittir.
        </p>
        <h3 className="mb-4 mt-4 h4">Boyutlar ve Ağırlık</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
12 Borulu Model: 1935 mm x 1235 mm x 70 mm, 32 kg
        </p>
        <h3 className="mb-4 mt-4 h4">Performans Özellikleri</h3>
            <span className="text-danger"> *</span><p className="mb-0" style={{
            width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
        }}>
        Maksimum çalışma basıncı: 10 bar.

Maksimum sıcaklık: 211°C.
        </p>
          </section>
      </>
    );
};

export default IstekAlu;