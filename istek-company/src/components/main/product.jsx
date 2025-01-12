import React from "react";
import {useTranslation} from "react-i18next";

const Product = () => {
    

    const {t}=useTranslation();
  return (
    <section>
<div class="container2">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>Cu</h2>
            <h3>İstek Cu</h3>
            <p>
            İstek Cu: Güneş Enerjisinde Güçlü ve Verimli Çözüm
            </p>
            <a href="/istek/istek-cu">{t('homeAboutUsLink')}</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>Cu+</h2>
            <h3>İstek Cu+</h3>
            <p>
            İstek Cu+: Güneş Enerjisinde Mükemmel
            Performans 
            </p>
            <a href="/istek/istek-cu-plus">{t('homeAboutUsLink')}</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>Alu</h2>
            <h3>İstek Alu</h3>
            <p>
            İstek Alu: Güneş Enerjisinde Güvenilir ve Ekonomik Çözüm
            </p>
            <a href="/istek/istek-alu">{t('homeAboutUsLink')}</a>
          </div>
        </div>
      </div>
    </div>

    </section>
    
  );
};

export default Product;
