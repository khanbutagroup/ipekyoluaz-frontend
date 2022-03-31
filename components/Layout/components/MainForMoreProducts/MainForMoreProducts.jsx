import React, {useEffect, useState} from 'react'
import {allDiscount} from "../../../../services/discount/allDiscount";
import Select from "react-select";
import {allSubSubCategories} from "../../../../services/allSubSubCategories";
import {discountFilter} from "../../../../services/discount/discountFilter";
import { MobileFooter } from "../MobileFooter/MobileFooter";
export default function MainForMoreProducts(){
    const [allDiscountTitle, allDiscountData] = useState([]);
    const [quickViewTitle, quickViewData] = useState(null);
    function handleChange(data){
        discountFilter({title:data.label})
            .then(items => {
                allDiscountData(items.data.results)
            })
    }
    useEffect(() => {
        discountFilter({})
            .then(items => {
                allDiscountData(items.data.results)
            })
    }, [])

    const [optionsTitle, optionsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        let options = []
        allSubSubCategories()
            .then(items => {
                if(mounted) {
                    const data = items.data.map(e=>{
                        options.push({value:e['id'], label:e['title']})
                    })
                    optionsData(options)
                }
            })
        return () => mounted = false;
    }, [])
    function quickViewFunc(id){
        quickViewData(allDiscountTitle.find(r=>r.product == id ? r : []))
    }

    return (
        <div>
            <style jsx>{`
                        .icon-box-wrapper {
                            border: 1px solid white; 
                            padding: 0px;
                        }
                      .product-list {
                          padding: 0.8rem;
                          border: 1px solid #ed711b;
                        }

                        .btn-product:hover {
                          background-color: #ed711b !important;
                          color: #fff !important;
                          border-color: #ed711b !important;
                          letter-spacing: 0 !important;
                        }

                        .product-name a:hover {
                          color: #ed711b;
                        }

                        .ratings-full {
                          cursor: pointer;
                          margin-right: 0.5rem;
                        }

                        .ratings:before {
                          content: "" "" "" "" "";
                          color: #666;
                        }

                        .ratings, .ratings-full {
                          position: relative;
                          font-family: "wolmart";
                          letter-spacing: 0.2em;
                        }

                        .ratings {
                          position: absolute;
                          top: 0;
                          left: 0;
                          white-space: nowrap;
                          overflow: hidden;
                        }

                        .product:not(.product-single):hover .product-countdown-container {
                          opacity: 0;
                          visibility: hidden;
                        }

                        .product.product-list .product-countdown-container {
                          background-color: #444;
                        }

                        .product:not(.product-single) .product-countdown-container {
                          position: absolute;
                          left: 10px;
                          right: 10px;
                          bottom: 10px;
                          white-space: nowrap;
                          overflow-x: auto;
                          background-color: rgba(34, 34, 34, 0.8);
                          color: #fff;
                          letter-spacing: -0.025em;
                          text-align: center;
                          border-radius: 0.3rem;
                          padding-left: 0;
                          padding-right: 0;
                          opacity: 1;
                          visibility: visible;
                          transition: opacity 0.3s, visibility 0.3s;
                        }
                        .product-list {
                          padding: 0.8rem;
                          border: 1px solid #ed711b;
                        }

                        .btn-product:hover {
                          background-color: #ed711b !important;
                          color: #fff !important;
                          border-color: #ed711b !important;
                          letter-spacing: 0 !important;
                        }

                        .product-name a:hover {
                          color: #ed711b;
                        }

                        .ratings-full {
                          cursor: pointer;
                          margin-right: 0.5rem;
                        }

                        .ratings:before {
                          content: "" "" "" "" "";
                          color: #666;
                        }

                        .ratings, .ratings-full {
                          position: relative;
                          font-family: "wolmart";
                          letter-spacing: 0.2em;
                        }

                        .ratings {
                          position: absolute;
                          top: 0;
                          left: 0;
                          white-space: nowrap;
                          overflow: hidden;
                        }

                        .product:not(.product-single):hover .product-countdown-container {
                          opacity: 0;
                          visibility: hidden;
                        }

                        .product.product-list .product-countdown-container {
                          background-color: #444;
                        }

                        .product:not(.product-single) .product-countdown-container {
                          position: absolute;
                          left: 10px;
                          right: 10px;
                          bottom: 10px;
                          white-space: nowrap;
                          overflow-x: auto;
                          background-color: rgba(34, 34, 34, 0.8);
                          color: #fff;
                          letter-spacing: -0.025em;
                          text-align: center;
                          border-radius: 0.3rem;
                          padding-left: 0;
                          padding-right: 0;
                          opacity: 1;
                          visibility: visible;
                          transition: opacity 0.3s, visibility 0.3s;
                        }
                      `}
            </style>
            <div className="page-wrapper">
                <main className="main">
                    <div className="page-content">
                        <div className="container">
                            <div className="filter-with-title appear-animate">
                                <h2 className="title">Günün endirimləri</h2>
                                <ul className="nav-filters filter-boxed" data-target="#products-1">
                                    <li>
                                        <Select
                                            name="colors"
                                            options={optionsTitle}
                                            className="basic-multi-select"
                                            placeholder={"Bütün kateqoriyalar"}
                                            classNamePrefix="select"
                                            onChange={handleChange}
                                        /></li>
                                </ul>
                            </div>
                            <div className="row appear-animate">
                                {allDiscountTitle.map(e=>(
                                    <div className="col-lg-6 mb-4">
                                        <div className="product product-list br-xs mb-0">
                                            <figure className="product-media">
                                                <a href={`/${e.product.id}`}>
                                                    <img src={e.product.main_image} alt="Product"
                                                         width="315"
                                                         height="355"/>
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                       title="Cəld Baxış" onClick={()=>{quickViewFunc(e.product.id)}}></a>
                                                </div>
                                                <div className="product-countdown-container" style={{height: '35px'}}>
                                                    <div className="product-countdown countdown-compact" data-until="2021, 9, 9"
                                                         data-format="DHMS" data-compact="false"
                                                         style={{fontSize: '20px'}}
                                                         data-labels-short="Days, Hours, Mins, Secs">
                                                        00:00:00:00
                                                    </div>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h4 className="product-name">
                                                    <a href={`/${e.product.id}`}>{e.product.title}</a>
                                                </h4>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings"  style={{width: `${(18 * e.product.rating)+'%'}` }}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                    <a href={`/${e.product.id}`} className="rating-reviews">({e.product.rating}
                                                        reviews)</a>
                                                </div>
                                                <div className="product-price">{e.discount_price}</div>
                                                <ul className="product-desc">
                                                    <li>{e.product.short_desc1}</li>
                                                    <li>{e.product.short_desc2}</li>
                                                    <li>{e.product.short_desc3}</li>
                                                </ul>
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to Cart"><i
                                                        className="w-icon-cart"></i>Səbətə əlavə et</a>
                                                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                       title="Bəyəndiklərim"></a>
                                                    <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                       title="Müqayisə"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <MobileFooter/>
            <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i
                className="w-icon-angle-up"></i>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                    <circle id="progress-indicator" fill="transparent" stroke="#000000" stroke-miterlimit="10" cx="35"
                            cy="35" r="34" ></circle>
                </svg>
            </a>
        </div>
    )}