import React from 'react';
import {useTranslation} from "react-i18next";

const IstekAlu = () => {
   

    const {t}=useTranslation();
    return (
        <>
          <section className="site-section" id="next-section">
                <div className="container">
                <h1 style={{padding:'10px', marginTop:'20px'}}>HUMAN RESOURCES</h1>
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src="/assets/inovasyonImg.jpg" alt="" className="img-fluid img-shadow" id="firstImgInAbout" />
                        </div>
                        <div className="col-lg-5 ml-auto">
                            <h2 className="section-title mb-3">
                                TURKU ACAR 
                            </h2>
                            <p>
                                {t('aboutUsHumanTurku1')}
                            </p>
                            <p>
                                {t('aboutUsHumanTurku2')}
                            </p>
                            <p>
                                {t('aboutUsHumanTurku3')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IstekAlu;