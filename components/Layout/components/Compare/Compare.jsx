import React, {useEffect, useState} from 'react'
import {partners} from "../../../../services/partners";

export default function Compare(){

    const [compareItem, compareData] = useState([]);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('compare'))){
            compareData(JSON.parse(localStorage.getItem('compare')))
        }
    }, [])
   const removeProduct = (id) =>{
       const filterCompareItem = compareItem.filter( x => x.id !== id);
       localStorage.setItem('compare',  JSON.stringify(filterCompareItem));
       compareData(filterCompareItem)
   }
    const [partnersTitle, partnersData] = useState([]);
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('partnersTitle'))){
            partnersData(JSON.parse(localStorage.getItem('partnersTitle')))
        }
        else{
            partners()
                .then(items => {
                    localStorage.setItem('partnersTitle',  JSON.stringify(items.data));
                    JSON.parse(localStorage.getItem('partnersTitle')) ? partnersData(JSON.parse(localStorage.getItem('partnersTitle'))) : []
                })
        }
    }, [])
    return (
    <>
        <div className="page-wrapper">
            <main className="main">

                <section className="grey-section pt-10" style={{display:"none"}}>
                    <div className="container mt-3 mb-1">
                        <h2 className="title text-left mb-5 appear-animate">Bizim Partnyorlar</h2>
                        <div className="swiper-container swiper-theme brands-wrapper mb-10 bg-white appear-animate"
                             data-swiper-options="{
                        'slidesPerView': 1,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 3
                            },
                            '768': {
                                'slidesPerView': 4
                            },
                            '992': {
                                'slidesPerView': 5
                            }
                        }
                    }">
                            <div className="swiper-wrapper row gutter-no cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                                {partnersTitle.map(e=>(
                                    <div className="swiper-slide brand-col">
                                        <div style={{width:"80%", height:"10%" , position:"relative" , left:"40px"}} >
                                            <figure className="brand-wrapper" style={{display:'flex',justifyContent:'center'}}>
                                                <img src={e.logo} alt="Brand" style={{display:'flex',justifyContent:'center',maxHeight:"150px"}}/>
                                            </figure>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </section>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Müqayisə</h1>
                        </div>
                    </div>
                    <nav className="breadcrumb-nav mb-2">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li><a href="/">Ana Səhifə</a></li>
                                <li>Müqayisə</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="page-content mb-10 pb-2">
                        <div className="container">
                            <div className="compare-table">
                                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-products">
                                    <div className="compare-col compare-field">Məhsul</div>
                                    {compareItem.map(e=>(
                                        <div className="compare-col compare-product">
                                            <a href="#" className="btn remove-product" onClick={()=>{removeProduct(e.id)}}><i
                                                className="w-icon-times-solid"></i></a>
                                            <div className="product text-center">
                                                <figure className="product-media">
                                                    <a href="product-default.html">
                                                        <img src={e.main_image} alt="Product"
                                                             width="228"
                                                             height="257"/>
                                                    </a>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"></a>
                                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name"><a href="product-default.html">Electronics
                                                        Black Wrist
                                                        Watch</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-price">
                                    <div className="compare-col compare-field">Qiymət</div>
                                    {compareItem.map(e=>(
                                        <div className="compare-col compare-value">
                                            <div className="product-price">
                                                <span className="new-price">₼{e.price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-description">
                                    <div className="compare-col compare-field">Təsviri</div>
                                    {compareItem.map(e=>(
                                        <div className="compare-col compare-value">
                                            <ul className="list-style-none list-type-check">
                                                <li>{e.short_desc1}</li>
                                                <li>{e.short_desc2}</li>
                                                <li>{e.short_desc3}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-reviews">
                                    <div className="compare-col compare-field">Reytinqlər &amp; Rəylər</div>
                                    {compareItem.map(e=>(
                                        <div className="compare-col compare-rating">
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings"  style={{width: `${(18 * e.rating)+'%'}` }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-default.html" className="rating-reviews">({e.rating}
                                                    Reviews)</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-category">
                                    <div className="compare-col compare-field">Kateqoriya</div>
                                    {compareItem.map(e=>(
                                        <div className="compare-col compare-value">Watches</div>
                                    ))}
                                </div>
                                {compareItem.map(e=>(
                                    <div>
                                        {e.filter_values.map(k=>(
                                            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-meta">
                                                <div className="compare-col compare-field">SKU</div>
                                                <div className="compare-col compare-value">MS46891344</div>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
            </main>
        </div>
        <div className="sticky-footer sticky-content fix-bottom">
            <a href="demo1.html" className="sticky-link active">
                <i className="w-icon-home"></i>
                <p>Home</p>
            </a>
            <a href="shop-banner-sidebar.html" className="sticky-link">
                <i className="w-icon-category"></i>
                <p>Shop</p>
            </a>
            <a href="my-account.html" className="sticky-link">
                <i className="w-icon-account"></i>
                <p>Account</p>
            </a>
            <div className="cart-dropdown dir-up">
                <a href="cart.html" className="sticky-link">
                    <i className="w-icon-cart"></i>
                    <p>Cart</p>
                </a>
                <div className="dropdown-box">
                    <div className="products">
                        <div className="product product-cart">
                            <div className="product-detail">
                                <h3 className="product-name">
                                    <a href="product-default.html">Beige knitted elas<br/>tic
                                        runner shoes</a>
                                </h3>
                                <div className="price-box">
                                    <span className="product-quantity">1</span>
                                    <span className="product-price">$25.68</span>
                                </div>
                            </div>
                            <figure className="product-media">
                                <a href="product-default.html">
                                    <img src="assets/images/cart/product-1.jpg" alt="product" height="84"
                                         width="94"/>
                                </a>
                            </figure>
                            <button className="btn btn-link btn-close" aria-label="button">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="product product-cart">
                            <div className="product-detail">
                                <h3 className="product-name">
                                    <a href="product-default.html">Blue utility pina<br/>fore
                                        denim dress</a>
                                </h3>
                                <div className="price-box">
                                    <span className="product-quantity">1</span>
                                    <span className="product-price">$32.99</span>
                                </div>
                            </div>
                            <figure className="product-media">
                                <a href="product-default.html">
                                    <img src="assets/images/cart/product-2.jpg" alt="product" width="84"
                                         height="94"/>
                                </a>
                            </figure>
                            <button className="btn btn-link btn-close" aria-label="button">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    <div className="cart-total">
                        <label>Subtotal:</label>
                        <span className="price">$58.67</span>
                    </div>

                    <div className="cart-action">
                        <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">View Cart</a>
                        <a href="checkout.html" className="btn btn-primary  btn-rounded">Checkout</a>
                    </div>
                </div>
            </div>

            <div className="header-search hs-toggle dir-up">
                <a href="#" className="search-toggle sticky-link">
                    <i className="w-icon-search"></i>
                    <p>Search</p>
                </a>
                <form action="#" className="input-wrapper">
                    <input type="text" className="form-control" name="search" autoComplete="off"
                           placeholder="Search"
                           required/>
                    <button className="btn btn-search" type="submit">
                        <i className="w-icon-search"></i>
                    </button>
                </form>
            </div>
        </div>

        <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i
            className="w-icon-angle-up"></i>
            <svg
                version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                <circle id="progress-indicator" fill="transparent" stroke="#000000" stroke-miterlimit="10" cx="35"
                        cy="35"
                        r="34" ></circle>
            </svg>
        </a>
    </>
    )}