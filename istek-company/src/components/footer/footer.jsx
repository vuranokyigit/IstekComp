import React from "react";
import '../styles/component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {  faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {useTranslation} from "react-i18next";
const Footer = () => {
    const {t}=useTranslation();

    return(
        <>
            <footer className="site-footer slanted-footer" style={{marginTop:"-60px"}}>
                <a href="#top" className="smoothscroll scroll-top" style={{marginTop:"45px"}}>
                    <span><FontAwesomeIcon icon={faArrowUp} /></span>
                </a>
                <div className="container">
                    <div className="row mb-3" id="footerInfoSection">
                        <div className="col-6 col-md-4 mb-4 mb-md-0">
                            <h3 style={{textTransform:"uppercase"}}>{t('footerProductsTitle')}</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/istek/product">{t('footerProducts1')}</a>
                                </li>
                                <li>
                                    <a href="/istek/product">{t('footerProducts2')}</a>
                                </li>
                                <li>
                                    <a href="/istek/product">{t('footerProducts3')}</a>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 mb-4 mb-md-0">
                            <h3 style={{textTransform:"uppercase"}}>{t('footerCompanyTitle')}</h3>
                            <ul  className="list-unstyled">
                                <li>
                                    <a href="/istek/about">{t('footerCompanyLink1')}</a>
                                </li>
                                <li>
                                    <a href="/istek/product">{t('footerCompanyLink2')}</a>
                                </li>
                                <li>
                                    <a href="/istek/maintenance">{t('footerCompanyLink4')}</a>
                                </li>
                                <li>
                                    <a href="/istek/contact">{t('footerCompanyLink3')}</a>
                                </li>
                            </ul>
                        </div>

                        <div  className="col-6 col-md-4 mb-4 mb-md-0" id="footerContactSection">
                            <h3>{t('footerContactTitle')}</h3>
                            <div className="footerContact">
                                <h3>
                                +90 242 323 22 13 / TR
                                </h3>
                                <h3>
                                +90 536 774 57 59 / GSM & <span> <FontAwesomeIcon icon={faWhatsapp} size="xl" /></span>
                                </h3>
                                
                                <h6>{t('contactInfoAddress')}</h6>
                                <a href="/istek/contact"><button className="btn btn-outline-white btn-sm " style={{color: "white"}}>{t('footerContactButton')}</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="container">
                        <div className="col-12">
                            <a href="/istek"><img id="footerImg" style={{width:"15%"}}  src="/Istek_Logo_Version_red_copy.png" alt=" "/></a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="copyRight">
                    <p className="copyright" style={{ color: "whitesmoke", fontSize: "1rem"}}>
                        &copy; {new Date().getFullYear()} {t('footerCopyRightText')} ISTEK
                    </p>
                </div>

            </footer>
            <footer style={{backgroundColor:"#000"}}>
                <div className="container">
                    <div className="row" >
                        <div className="col" style={{height:"40px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <p href=" " style={{color:"white", textDecoration:"none"}}>{t("footerPrivacy")}</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;