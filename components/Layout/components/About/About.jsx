import React, {useEffect, useState} from 'react'
import {aboutUs} from "../../../../services/aboutUs";
import parse from 'html-react-parser'
export default function About(){
    const [aboutUsURLTitle, aboutUsURLData] = useState([]);
    useEffect(() => {
        let mounted = true;
        aboutUs()
            .then(items => {
                if(mounted) {
                    aboutUsURLData([items.data])
                }
            })
        return () => mounted = false;
    }, [])
    return (
        <>
            <style jsx>{`
          .member-name{
                margin-bottom:1rem!important;
            }
            .member-info{
                padding-top:1rem!important;
            } 
            .overlayYuxari{
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 79% !important;
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
              -webkit-box-orient: vertical !important;
              -webkit-box-direction: normal !important;
              -ms-flex-direction: column !important;
              flex-direction: column !important;
              -webkit-box-align: center !important;
              -ms-flex-align: center !important;
              align-items: center !important;
              -webkit-box-pack: center !important;
              -ms-flex-pack: center !important;
              justify-content: center !important;
              padding-top: 10rem !important;
              background: rgba(0, 0, 0, 0.3) !important;
              border-radius: 1.3rem !important;
              opacity: 0 !important;
              border-radius: 1.3rem !important;
              -webkit-transition: opacity 0.3s, padding-top 0.3s !important;
              transition: opacity 0.3s, padding-top 0.3s !important;
              cursor: pointer !important;
            }
            .devotedMarket {
              margin-bottom: 1.3rem;
              font-size: 3.4rem;
              -webkit-box-pack: center;
              justify-content: center;
              display: flex;
              flex-wrap: wrap;
              position: relative;
              -webkit-box-align: center;
              align-items: center;
                text-align: center;
                font-weight: 800;
                line-height: 1.2;
            }
            .fourText{
              text-align: center;
              font-size: 1.4rem;
              line-height: 1.86;
              margin-bottom: 4.3rem;
              max-width: 57rem;
              margin-left: auto !important;
              margin-right: auto !important;
            }
            .count-tos span {
            font-size: 6rem;
            font-weight: 800;
            color: #ccc;
            letter-spacing: -0.05em;
            line-height: 1.54;
        }
        .social-icons {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .meetOur {
    font-size: 3.4rem;
    justify-content: center;
    align-items: center;
    text-align: center;
}
        .fourWin {
        margin-bottom: 0;
        font-size: 2rem;
        color: #333;
        line-height: 1.6;
        letter-spacing: -0.025em;
    }
        .fourPicture{
          width: 109px!important;
          height:105px;
          margin: 0 auto 2rem;
        }
     `} </style>
            <div className="page-wrapper">
                <main className="main">
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title mb-0">Haqqımızda</h1>
                        </div>
                    </div>
                    <nav className="breadcrumb-nav mb-10 pb-8">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li><a href="/">Ana Səhifə</a></li>
                                <li>Ana Səhifə</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="page-content">
                        <div className="container">
                            {aboutUsURLTitle.map(e=>(parse(e.content)))}

                            {aboutUsURLTitle.map(e=>(
                                <section className="customer-service mb-7">
                                    <div className="row align-items-center">

                                        <div className="col-md-6 pr-lg-8 mb-8">
                                            <h2 className="provide" style={{fontSize: '3.4rem'}}> {e.service_title}</h2>
                                            <div className="accordion accordion-simple accordion-plus">
                                                {e.services.map(c=>(
                                                    <div className="card border-no">
                                                        <div className="card-header">
                                                            <a href="#collapse3-1" className="collapse" style={{fontSize: '2.2rem'}}>{c.title}</a>
                                                        </div>
                                                        <div className="card-body expanded" id="collapse3-1">
                                                            <p className="mb-0" style={{fontSize: '1.6rem'}}>
                                                                {c.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-8">
                                            <figure className="br-lg">
                                                <img src={e.service_image} alt="Banner"
                                                     width="610" height="500" style={{backgroundColor: '#CECECC'}}/>
                                            </figure>
                                        </div>
                                    </div>
                                </section>
                            ))}


                            <section className="count-section mb-10 pb-5">
                                <div className="swiper-container swiper-theme" data-swiper-options="{
                            'slidesPerView': 1,
                            'breakpoints': {
                                '768': {
                                    'slidesPerView': 2
                                },
                                '992': {
                                    'slidesPerView': 3
                                }
                            }
                        }">
                                    {aboutUsURLTitle.map(e=>(
                                        <div className="swiper-wrapper row cols-lg-3 cols-md-2 cols-1">
                                            {e.corousel.map(k=>(
                                                <div className="swiper-slide counter-wrap">
                                                    <div className="counter text-center count-tos">
                                                        <span className="count-to" data-to="15">{k.amount}</span>
                                                        <span>K+</span>
                                                        <h4 className="title title-center">{k.title}</h4>
                                                        <p>{k.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                    <div className="swiper-pagination"></div>
                                </div>
                            </section>
                        </div>
                        <section className="boost-sections pt-10 pb-10" style={{backgroundColor:'#fafafb'}}>
                            <div className="container mt-10 mb-9">
                                {aboutUsURLTitle.map(e=>(
                                    <div className="row align-items-center mb-10">
                                        <div className="col-md-6 mb-8">
                                            <figure className="br-lg">
                                                <img src="assets/images/pages/about_us/3.jpg" alt="Banner"
                                                     width="610" height="450" style={{backgroundColor: '#9E9DA2'}}/>
                                            </figure>
                                        </div>
                                        <div className="col-md-6 pl-lg-8 mb-8">
                                            <h4 className="weBoost" style={{fontSize: '3.4rem'}}>{e.banner_title}</h4>
                                            <p className="mb-6" style={{fontSizeize: '1.4rem'}}>{e.banner_text}</p>
                                            <a href={e.banner_button_link} className="btn btn-dark btn-rounded">{e.banner_button_text}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

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