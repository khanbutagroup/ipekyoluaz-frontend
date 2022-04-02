import React, {useState} from "react";
import { FaStar } from 'react-icons/fa'
import { addToCard } from "../../../../services/card/addToCard";
import { cartByUserID } from "../../../../services/card/cartByUserID";
import { useDispatch, useSelector } from "react-redux";
import { addToCardMain } from "../../../../store/actions";
import axios from "axios";


export default function  MainForProductDetails(props){


    const userCardApi = "https://api.ipekyolu.az/api/add-to-cart/"
    const cardUserIdApi = "https://api.ipekyolu.az/api/user-cart/"


    const addToCardF = (id) => {
        const data = {quantity: 1, product: id}
        const userToken = localStorage.getItem("username")

        axios.post(userCardApi ,data, { 'headers': { 'Authorization': `Bearer ${userToken}` }})
        .then((res) => {cardByUserId() ;res.data})
        .catch(err => console.log(err, "lala"))

    }



    const cardByUserId = () => {
        const userId = localStorage.get("userId")
        return (
            axios.get(cardUserIdApi+userId)
            .then(dispatch(addToCardMain(res => res.data.product_version)))
            .catch(console.log(err => err))
        )
        
    }

 



    return (
        <div>

            <div className="product-details" data-sticky-options="{'minWidth': 767}">
                <h1 className="product-title">{props.product.title}</h1>
                <div className="product-bm-wrapper">
                    <figure className="brand">
                        <img src={`https://api.ipekyolu.az${props.product.user.logo}`} alt="Brand"
                             width="106" height="48"/>
                    </figure>
                    <div className="product-meta">
                        <div className="product-categories">
                            Category:
                            <span style={{marginLeft: "2%"}} className="product-category">{props.product.category.title}</span>
                        </div>
                        <div className="product-sku">
                            SKU: <span>{props.product.code}</span>
                        </div>
                    </div>
                </div>

                <hr className="product-divider"/>

                <div className="product-price">
                    <ins className="new-price">₼ {props.product.price}</ins>
                </div>

                <div className="ratings-container">
                {[ ...Array(props.product.rating)].map(star => (
                              <FaStar color="fda706"/>
                            ))}
                </div>

                <div className="product-short-desc">
                    <ul className="list-type-check list-style-none">
                        <li>{props.product.short_desc1}</li>
                        <li>{props.product.short_desc2}</li>
                        <li>{props.product.short_desc3}</li>                    
                    </ul>
                </div>

                <hr className="product-divider"/>

                <div
                    className="fix-bottom product-sticky-content sticky-content">
                    <div className="product-form container">
                        <div className="product-qty-form">
                            <div className="input-group">
                                <input className="quantity form-control"
                                        defaultValue={1}
                                       type="number" min="1"
                                       max="10000000"/>
                                <button
                                    className="quantity-plus w-icon-plus"></button>
                                <button
                                    className="quantity-minus w-icon-minus"></button>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-cart" onClick={() => {addToCardF(props.product.id)}}>
                            <i className="w-icon-cart"></i>
                            <span>Səbətə əlavə et</span>
                        </button>
                    </div>
                </div>

                <div className="social-links-wrapper">
                    <div className="social-links">
                        <div
                            className="social-icons social-no-color border-thin">
                            <a href="#"
                               className="social-icon social-facebook w-icon-facebook"></a>
                            <a href="#"
                               className="social-icon social-instagram fab fa-instagram"></a>
                            <a href="#"
                               className="social-icon social-twitter fab fa-telegram"></a>
                            <a href="#"
                               className="social-icon social-whatsapp fab fa-whatsapp"></a>
                            <a href="#"
                               className="social-icon social-youtube fab fa-linkedin-in"></a>
                        </div>
                    </div>
                    <span className="divider d-xs-show"></span>
                    <div className="product-link-wrapper d-flex">
                        <a href="#"
                           className="btn-product-icon btn-wishlist w-icon-heart"><span></span></a>
                        <a href="#"
                           className="btn-product-icon btn-compare btn-icon-left w-icon-compare"><span></span></a>
                    </div>
                </div>
            </div>

            {/* bura mobile navbar yeridir yeni footer */}

            <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i
                className="w-icon-angle-up"></i>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                    <circle id="progress-indicator" fill="transparent" stroke="#000000" stroke-miterlimit="10" cx="35"
                            cy="35" r="34"></circle>
                </svg>
            </a>

            <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="pswp__bg"></div>
                <div className="pswp__scroll-wrap">
                    <div className="pswp__container">
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                    </div>
                    <div className="pswp__ui pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            <div className="pswp__counter"></div>
                            <button className="pswp__button pswp__button--close" aria-label="Close (Esc)"></button>
                            <button className="pswp__button pswp__button--zoom" aria-label="Zoom in/out"></button>
                            <div className="pswp__preloader">
                                <div className="loading-spin"></div>
                            </div>
                        </div>

                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip"></div>
                        </div>

                        <button className="pswp__button--arrow--left" aria-label="Previous (arrow left)"></button>
                        <button className="pswp__button--arrow--right" aria-label="Next (arrow right)"></button>

                        <div className="pswp__caption">
                            <div className="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product product-single product-popup">
                <div className="row gutter-lg">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="product-gallery product-gallery-sticky">
                            <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                                <div className="swiper-wrapper row cols-1 gutter-no">
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/1-440x494.jpg"
                                                 data-zoom-image="assets/images/products/popup/1-800x900.jpg"
                                                 alt="Water Boil Black Utensil" width="800" height="900"/>
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/2-440x494.jpg"
                                                 data-zoom-image="assets/images/products/popup/2-800x900.jpg"
                                                 alt="Water Boil Black Utensil" width="800" height="900"/>
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/3-440x494.jpg"
                                                 data-zoom-image="assets/images/products/popup/3-800x900.jpg"
                                                 alt="Water Boil Black Utensil" width="800" height="900"/>
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/4-440x494.jpg"
                                                 data-zoom-image="assets/images/products/popup/4-800x900.jpg"
                                                 alt="Water Boil Black Utensil" width="800" height="900"/>
                                        </figure>
                                    </div>
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                            </div>
                            <div className="product-thumbs-wrap swiper-container" data-swiper-options="{
                        'navigation': {
                            'nextEl': '.swiper-button-next',
                            'prevEl': '.swiper-button-prev'
                        }
                    }">
                                <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/1-103x116.jpg" alt="Product Thumb"
                                             width="103"
                                             height="116"/>
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/2-103x116.jpg" alt="Product Thumb"
                                             width="103"
                                             height="116"/>
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/3-103x116.jpg" alt="Product Thumb"
                                             width="103"
                                             height="116"/>
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/4-103x116.jpg" alt="Product Thumb"
                                             width="103"
                                             height="116"/>
                                    </div>
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 overflow-hidden p-relative">
                        <div className="product-details scrollable pl-0">
                            <h2 className="product-title">Electronics Black Wrist Watch</h2>
                            <div className="product-bm-wrapper">
                                <figure className="brand">
                                    <img src="assets/images/products/brand/brand-1.jpg" alt="Brand" width="102"
                                         height="48"/>
                                </figure>
                                <div className="product-meta">
                                    <div className="product-categories">
                                        Category:
                                        <span className="product-category"><a href="#">Electronics</a></span>
                                    </div>
                                    <div className="product-sku">
                                        SKU: <span>MS46891340</span>
                                    </div>
                                </div>
                            </div>

                            <hr className="product-divider"/>

                            <div className="product-price">$40.00</div>

                            <div className="ratings-container">
                                <div className="ratings-full">
                                    <span className="ratings" style={{width:'80%'}}></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a href="#" className="rating-reviews">(3 Reviews)</a>
                            </div>

                            <div className="product-short-desc">
                                <ul className="list-type-check list-style-none">
                                    <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                                    <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                                    <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                                </ul>
                            </div>

                            <hr className="product-divider"/>
                            <div className="product-form product-variation-form product-color-swatch">
                                <div>
                                    <div>
                                        <div  id="product-tab-specification">
                                            <ul className="list-none">
                                                <li>
                                                    <label>Model</label>
                                                    <p>Skysuite 320</p>
                                                </li>
                                                <li>
                                                    <label>Color</label>
                                                    <p>Black</p>
                                                </li>
                                                <li>
                                                    <label>Size</label>
                                                    <p>Large, Small</p>
                                                </li>
                                                <li>
                                                    <label>Guarantee Time</label>
                                                    <p>3 Months</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-form">
                                <div className="product-qty-form">
                                    <div className="input-group">
                                        <input className="quantity form-control" type="number" min="1"
                                               max="10000000"/>
                                        <button className="quantity-plus w-icon-plus"></button>
                                        <button className="quantity-minus w-icon-minus"></button>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-cart">
                                    <i className="w-icon-cart"></i>
                                    <span>Add to Cart</span>
                                </button>
                            </div>

                            <div className="social-links-wrapper">
                                <div className="social-links">
                                    <div
                                        className="social-icons social-no-color border-thin">
                                        <a href="#"
                                           className="social-icon social-facebook w-icon-facebook"></a>
                                        <a href="#"
                                           className="social-icon social-instagram fab fa-instagram"></a>
                                        <a href="#"
                                           className="social-icon social-twitter fab fa-telegram"></a>
                                        <a href="#"
                                           className="social-icon social-whatsapp fab fa-whatsapp"></a>
                                        <a href="#"
                                           className="social-icon social-youtube fab fa-linkedin-in"></a>
                                    </div>
                                </div>
                                <span className="divider d-xs-show"></span>
                                <div className="product-link-wrapper d-flex">
                                    <a href="#"
                                       className="btn-product-icon btn-wishlist w-icon-heart"><span></span></a>
                                    <a href="#"
                                       className="btn-product-icon btn-compare btn-icon-left w-icon-compare"><span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}