import React, {useEffect, useState} from 'react'
import {partners} from "../../../../services/partners";

export default function Checkout(){
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

    const [name, setnName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [address, setAddress] = useState(null);
    const [ZIP, setZIP] = useState(null);
    const [text, setText] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);

    const setDataOrder = () =>{

    }
    return (
        <>
            <div className="page-wrapper">
                <main className="main checkout">
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
                    <nav className="breadcrumb-nav">
                        <div className="container">
                            <ul className="breadcrumb shop-breadcrumb bb-no">
                                <li className="passed"><a href="/card">Alış-veriş kartı</a></li>
                                <li className="active"><a href="/checkout" >Yoxla</a></li>
                                <li><a href="/order">Sifariş tamamlandı</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="page-content">
                        <div className="container">
                            <form className="form checkout-form" action="#" method="post">
                                <div className="row mb-9">
                                    <div className="col-lg-7 pr-lg-4 mb-4">
                                        <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                                            ƏTRAFLI
                                        </h3>
                                        <div className="row gutter-sm">
                                            <div className="col-xs-6">
                                                <div className="form-group">
                                                    <label>Ad *</label>
                                                    <input type="text"
                                                           onChange={e=>setnName(e.target.value)}
                                                           className="form-control form-control-md"
                                                           name="firstname"
                                                           required/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="form-group">
                                                    <label>Soyad *</label>
                                                    <input type="text"
                                                           onChange={e=>setLastName(e.target.value)}
                                                           className="form-control form-control-md"
                                                           name="lastname"
                                                           required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutter-sm">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Ünvan *</label>
                                                    <input type="text"
                                                           onChange={e=>setAddress(e.target.value)}
                                                           className="form-control form-control-md mb-2" name="street-address-1"
                                                           required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>E-poçt ünvanı *</label>
                                                    <input type="text"
                                                           onChange={e=>setEmailAddress(e.target.value)}
                                                           className="form-control form-control-md mb-2" name="street-address-1"
                                                           required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutter-sm">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>ZIP *</label>
                                                    <input type="text"
                                                           onChange={e=>setZIP(e.target.value)}
                                                           className="form-control form-control-md" name="zip"
                                                           required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Şirkət adı *</label>
                                                    <input type="text"
                                                           onChange={e=>setCompanyName(e.target.value)}
                                                           className="form-control form-control-md" name="zip"
                                                           required/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label htmlFor="order-notes">Sifariş qeydləri (istəyə görə)</label>
                                            <textarea className="form-control mb-0" id="order-notes" name="order-notes"
                                                      cols="30"
                                                      rows="4"
                                                      onChange={e=>setText(e.target.value)}
                                                      placeholder="Sifarişiniz haqqında qeydlər, məsələn, çatdırılma üçün xüsusi qeydlər"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-action mb-6">
                                    <a href="/order" onClick={()=>{setDataOrder()}} className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto">
                                        SIFARIŞ TAMAMLA <i className="w-icon-long-arrow-right"></i></a>
                                </div>
                            </form>
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