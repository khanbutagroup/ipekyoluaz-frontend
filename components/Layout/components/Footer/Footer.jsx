import React, {useEffect, useState, useContext} from 'react'
import {allCategories} from "../../../../services/allCategories";
import {subCategories} from "../../../../services/subCategories";
import {phoneNumber} from "../../../../services/phoneNumber";
import {logo} from "../../../../services/logo";
import {urlTopForImg} from "../../../../services/apiUrl/urlTopForImg";
import {subscribers} from "../../../../services/subscribers";
import {socilaLinks} from "../../../../services/socilaLinks";





export default function Footer(){
    const [categorieTitle, categorieData] = useState([]);
    const [subCategoriesTitle, subCategoriesData] = useState([]);
    const [phoneNumberTitle, sphoneNumberData] = useState(null);
    const [logoTitle, logoData] = useState(null);

    const [socilaIconLink, setSocilaIconLink] = useState(null);








    useEffect(() => {
        allCategories()
                .then(items => {
                    categorieData(items.data)
                })
            logo()
                .then(items => {
                    logoData(urlTopForImg()+items.data.image)
                })
        subCategories()
            .then(items => {
                subCategoriesData(items.data)
            })
        phoneNumber()
            .then(items => {
                if (items.data.number) {
                    sphoneNumberData(items.data.number)
                }
            })
        // socilaLinks()
        //     .then(items => {
        //         if (items.data) {
        //             setSocilaIconLink(items.data)
        //         }
        //     })
    }, [])

    const [subscriberTitle, subscriberData] = useState(null);
    const setSubscribersEmail = (email) =>{
        subscriberData(email)
    }
    const clickButtonSubscribersEmail = () =>{
        subscribers({email:subscriberTitle}).then(e=>{
            console.log(e)
        }).catch((e)=>{
            console.log(e)
        })
    }




    return (
        <div>
            <style jsx>{`
             .btn-primary {
                    color: #fff;
                    border-color: #0b899b;
                    background-color: #0b899b;
                }
                .btn {
                    display: inline-block;
                    border: 2px solid #ccc;
                    background-color: #fff;
                    color: #666;
                    outline: 0;
                    border-radius: 0;
                    font-family: inherit;
                    font-weight: 600;
                    font-size: 1.4rem;
                    padding: 0.93em 1.98em;
                    line-height: 1;
                    text-transform: uppercase;
                    text-align: center;
                    -webkit-transition: color 0.3s, border-color 0.3s, background-color 0.3s, -webkit-box-shadow 0.3s;
                    transition: color 0.3s, border-color 0.3s, background-color 0.3s, -webkit-box-shadow 0.3s;
                    transition: color 0.3s, border-color 0.3s, background-color 0.3s, box-shadow 0.3s;
                    transition: color 0.3s, border-color 0.3s, background-color 0.3s, box-shadow 0.3s, -webkit-box-shadow 0.3s;
                    white-space: nowrap;
                    cursor: pointer;
                }
            .footer-bottom {
                padding: 3.1rem 0 3rem;
                background: #f5f5f5 !important;
                color: #999;
            }
            .btn-primary:active, .btn-primary:focus, .btn-primary:hover {
                color: #fff !important;
                border-color: #cd2027 !important;
                background-color: #cd2027 !important;
            }
            .btn-primary:active, .btn-primary:focus, .btn-primary{
                color: #fff !important;
                border-color: #cd2027 !important;
                background-color: #cd2027 !important;
            }
            .footer-newsletter {
                padding-bottom: 2.7rem;
                background-color: #0b899b !important;
            }`}
            </style>
            <footer className="footer appear-animate" data-animation-options="{ 'name': 'fadeIn'}">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-5 col-lg-6">
                                <div className="icon-box icon-box-side text-white">
                                    <div className="icon-box-icon d-inline-flex">
                                        <i className="w-icon-envelop3"></i>
                                    </div>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title text-white text-uppercase font-weight-bold">Abunə olun</h4>
                                        <p className="text-white">Tədbirlər, Satışlar və Təkliflər haqqında ən son məlumatları əldə edin.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                                <form action="#" method="get"
                                      className="input-wrapper input-wrapper-inline input-wrapper-rounded">
                                    <input type="email" onChange={(e)=>setSubscribersEmail(e.target.value)} className="form-control mr-2 bg-white pl-3" name="email" id="email"
                                           placeholder="E-poçt ünvanınız" required/>
                                    <button className="btn btn-primary btn-rounded" onClick={()=>{clickButtonSubscribersEmail()}} type="button">Abunə ol
                                        <i className="w-icon-long-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="widget widget-about mt-0 mb-4">
                                    <a href="/" className="logo-footer">
                                        <img src={logoTitle} alt="logo-footer" width="145" height="45"/>
                                    </a>
                                    <div className="widget-body">
                                        <p className="widget-about-title">Sualınız var? 24/7 bizə zəng edin</p>
                                        <a href="tel:18005707777" className="widget-about-call">{phoneNumberTitle}</a>
                                        <p className="widget-about-desc">
                                            Pronot up ikonaları və kuponları haqqında yenilikləri əldə etmək üçün indi qeydiyyatdan keçin.
                                        </p>
                                        <div className="social-icons social-icons-colored">
                                            <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                            <a href="#" className="social-icon social-instagram w-icon-instagram"></a>
                                            <a href="#" className="social-icon social-whatsapp w-icon-whatsapp"> <i className="fab fa-whatsapp"></i> </a>
                                            <a href="#" className="social-icon social-youtube w-icon-youtube"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h3 className="widget-title">ŞİRKƏT</h3>
                                    <ul className="widget-body">
                                        <li><a href="/shop">Mağaza</a></li>
                                        <li><a href="/vendor">Satıcılar</a></li>
                                        <li><a href="/contact">Haqqımızda</a></li>
                                        <li><a href="/contact">Əlaqə</a></li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Hesabım</h4>
                                    <ul className="widget-body">
                                        <li><a href="#">Hesabım</a></li>
                                        <li><a href="cart.html">Səbət</a></li>
                                        <li><a href="wishlist.html">Bəyəndiklərim</a></li>
                                        <li><a href="#">Müqayisə</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget">
                                    <h4 className="widget-title">Müştəri Xidmətləri</h4>
                                    <ul className="widget-body">
                                        <li><a href="tel:#">Bizə zəng</a></li>
                                        <li><a href="#">Günün endirimləri</a></li>
                                        <li><a href="/faq">Faq</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-middle">
                        {categorieTitle.map(x=>(
                        <div className="widget widget-category">
                                <div className="category-box">
                                    <h6 className="category-name">{x.title}:</h6>
                                    {x.sub_categories.map(v=>(
                                        <a href="/shop">{v.title}</a>
                                    ))}
                                </div>
                        </div>
                        ))}
                    </div>
                    <div className="footer-bottom">
                        <span className="copyright" style={{margin:"auto"}}>Copyright © {new Date().getFullYear()}</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}