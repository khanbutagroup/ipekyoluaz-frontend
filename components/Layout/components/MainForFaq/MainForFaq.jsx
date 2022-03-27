import React, {useEffect, useState} from "react";
import {faq} from "../../../../services/faq";

export default function MainForFaq(){
    const [faqTitle, faqData] = useState([]);
    useEffect(() => {
        faq()
            .then(items => {
                if(items.data) {
                    faqData(items.data)
                }
            })
    }, [])
    return (

    <>
        <div className="page-wrapper">
            <main className="main">
                <div className="page-header" style={{height: '180px'}}>
                    <div className="container">
                        <h1 className="page-title mb-0">FAQ</h1>
                    </div>
                </div>
                <nav className="breadcrumb-nav mb-10 pb-1">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="/">Ana Səhifə</a></li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content faq">
                    <div className="container">
                        <section className="content-title-section">
                            <h3 className="title title-simple justify-content-center bb-no pb-0">Tez-tez verilən suallar</h3>
                            <p className="description text-center">Siz tez-tez verilən sualları <b>Wolmart Elementləri</b> ilə asanlıqla göstərə bilərsiniz.</p>
                        </section>
                        {faqTitle.map(e=>(
                            <section className="mb-6">
                                <h4 className="title title-center mb-5">{e.title}</h4>
                                <div className="row">
                                    {e.faqs.map(m=>(
                                        <div className="col-md-6 mb-8">
                                            <div className="accordion accordion-bg accordion-gutter-md accordion-border">

                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse1-1" className="collapse">{m.question}</a>
                                                    </div>
                                                    <div id="collapse1-1" className="card-body expanded">
                                                        <p className="mb-0">
                                                            {m.answer}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
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