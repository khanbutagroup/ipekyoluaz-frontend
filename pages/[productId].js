import React, {useEffect, useState} from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Footer from "../components/Layout/components/Footer/Footer";
import axios from 'axios'
import MainForProductDetails from '../components/Layout/components/MainForProduct/ MainForProductDetails'
import { FaStar } from 'react-icons/fa'
import { addToCardMain } from '../store/actions';


const productId = (props) =>{

const [allProducts, setAllProducts] = useState([])


    const [showMe, setShowMe] = useState("none");
    function showMeFunc() {
    if (showMe == "none") {
      setShowMe("block");
    } else {
      setShowMe("none");
    }
  }
  
  useEffect(() => {
      getMoreProducts()
  }, [])

  console.log(props.product, "papa")


  const getMoreProducts = async() => {
       await axios.get(`https://api.ipekyolu.az/api/product-by-user-id/${props.product.user.id}`)
      .then(res => setAllProducts(res.data))
      .catch(err => err)
  }

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
      const userId = localStorage.getItem("userId")
      return (
          axios.get(cardUserIdApi+userId)
          .then(dispatch(addToCardMain(res => res.data.product_version)))
          .catch(console.log(err => err))
      )
      
  }



    return (
        <>
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            
        <style jsx>
        {`
          .react-tel-input .form-control {
            position: relative;
            font-size: 14px;
            letter-spacing: 0.01rem;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            padding-left: 48px;
            margin-left: 0;
            background: #ffffff;
            border: 1px solid #cacaca;
            border-radius: 5px;
            line-height: 25px;
            height: 35px;
            width: 100% !important;
            outline: none;
          }
          .header-top {
            background: #0b899b;
            font-size: 1.1rem;
            letter-spacing: -0.027em;
            text-transform: capitalize;
            color: #fff;
            border-bottom: 1px solid;
            border-color: rgba(238, 238, 238, 0.2);
          }
          .header-middle {
            padding-top: 3.2rem;
            padding-bottom: 3.2rem;
            color: #fff;
            background: #0b899b;
            font-size: 1.2rem;
            border-bottom: 0;
          }
          .modal {
            display: block;
            position: fixed;
            z-index: 9999;
            padding-top: 30px;
            left: 0;
            top: 0;
            min-width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
          }
          .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 10px;
            border: 1px solid #888;
            width: 57%;
          }

          .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            padding-left: 20px;
          }

          .close:hover,
          .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
            padding-left: 20px;
          }
          @media only screen and (max-width: 1000px) {
            .modal-content {
              background-color: #fefefe;
              margin: auto;
              padding: 10px;
              border: 1px solid #888;
              width: 85%;
            }
          }
          .header a:not(.btn):hover {
            color: #336699;
          }
          .right-scroll {
            overflow-y: auto;
            height: 600px;
            overflow-x: hidden;
          }
        `}
      </style>
      <div id="myModal" className="modal" style={{ display: showMe }}>
        <div className="modal-content">
          <span className="close" onClick={showMeFunc}>
            &times;
          </span>
          <div className="page-wrapper">
            <main className="main">
              <div className="page-content">
                <div>
                  <div className="row gutter-lg">
                    <div className="mt-5">
                      <div className="product product-single row">
                        <div className="product product-single row">
                          <div className="col-md-6 mb-4 mb-md-8">
                            <div className="product-gallery product-gallery-sticky">
                              <div
                                className="swiper-container product-single-swiper swiper-theme nav-inner"
                                data-swiper-options="{
                                            'navigation': {
                                                'nextEl': '.swiper-button-next',
                                                'prevEl': '.swiper-button-prev'
                                            }
                                        }"
                              >
                                <div className="swiper-wrapper row cols-1 gutter-no">
                                  <div className="swiper-slide">
                                    <figure className="product-image">
                                      <img
                                        src="assets/images/products/accordion/1-800x900.jpg"
                                        data-zoom-image="assets/images/products/accordion/1-800x900.jpg"
                                        alt="Bodycare Smooth Powder"
                                        width="800"
                                        height="900"
                                      />
                                    </figure>
                                  </div>
                                  
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                                <a
                                  href="#"
                                  className="product-gallery-btn product-image-full"
                                >
                                  <i className="w-icon-zoom"></i>
                                </a>
                              </div>

                              <div
                                className="product-thumbs-wrap swiper-container"
                                data-swiper-options="{
                                            'navigation': {
                                                'nextEl': '.swiper-button-next',
                                                'prevEl': '.swiper-button-prev'
                                            }
                                        }"
                              >
                                <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                                  {props.product.images?.map((img) => (
                                      <div className="product-thumb swiper-slide">
                                      <img
                                        src={img.image}
                                        alt="Product Thumb"
                                        width="800"
                                        height="900"
                                      />
                                    </div>
                                  ))}
                                  
                                  
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-6 mb-md-8">
                            {/* <MainForProductDetails /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <main className="main">
          <nav className="breadcrumb-nav container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="/">Ana Səhifə</a>
              </li>
              <li>Məhsullar</li>
            </ul>
          </nav>
          <div className="page-content">
            <div className="container">
              <div className="row gutter-lg">
                <div className="main-content">
                  <div className="product product-single row mb-2">
                    <div className="product product-single row mb-2">
                      <div className="col-md-6 mb-4 mb-md-8">
                          {/* Lazim olan maplama yeri */}
                            <div className="product-gallery product-gallery-sticky">
                              <div
                                  className="swiper-container product-single-swiper swiper-theme nav-inner"
                                  data-swiper-options="{
                                            'navigation': {
                                                'nextEl': '.swiper-button-next',
                                                'prevEl': '.swiper-button-prev'
                                            }
                                        }"
                              >
                                <div className="swiper-wrapper row cols-1 gutter-no" >
                                <div className="swiper-slide" style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
                                    <figure className="product-image">
                                      <img
                                          src={`https://api.ipekyolu.az${props.product.main_image}`}
                                          data-zoom-image={`https://api.ipekyolu.az${props.product.main_image}`}
                                          alt="Bodycare Smooth Powder"
                                          width="800"
                                          height="900"
                                          style={{objectFit: "contain"}}                                                
                                      />
                                    </figure>
                                  </div>
                                  {props.product.images?.map((img) => (
                                    <div className="swiper-slide" style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
                                    <figure className="product-image">
                                      <img
                                          src={`https://api.ipekyolu.az${img.image}`}
                                          data-zoom-image={`https://api.ipekyolu.az${img.image}`}
                                          alt="Bodycare Smooth Powder"
                                          width="800"
                                          height="900"
                                          style={{objectFit: "contain"}}                                                
                                      />
                                    </figure>
                                  </div>
                                  ))}
                                  
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                                <a
                                    href="#"
                                    className="product-gallery-btn product-image-full"
                                >
                                  <i className="w-icon-zoom"></i>
                                </a>
                              </div>

                              <div
                                  className="product-thumbs-wrap swiper-container"
                                  data-swiper-options="{
                                            'navigation': {
                                                'nextEl': '.swiper-button-next',
                                                'prevEl': '.swiper-button-prev'
                                            }
                                        }"
                              >

                                <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                                <div className="product-thumb swiper-slide" style={{width: "100px", "height": "150px", display:"flex", justifyContent:"center", alignItems: "center"}}>
                                      <img
                                      src={`https://api.ipekyolu.az${props.product.main_image}`}
                                      alt="Product Thumb"
                                      width="800"
                                      height="900"
                                      style={{objectFit: "contain !important"}}
                                      />
                                  </div>
                                    {props.product.images?.map((img) => (
                                      <div className="product-thumb swiper-slide" style={{width: "100px", "height": "150px", display:"flex", justifyContent:"center", alignItems: "center"}}>

                                        <img
                                        src={`https://api.ipekyolu.az${img.image}`}
                                        alt="Product Thumb"
                                        width="800"
                                        height="900"
                                        style={{objectFit: "contain !important"}}
                                    />
                                    </div>
                                    ))}
                                    
                                  
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                              </div>
                            </div>
                        

                      </div>
                      <div className="col-md-6 mb-6 mb-md-8">
                        <MainForProductDetails 
                        product = {props.product}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="accordion accordion-simple mb-9">
                    <div className="card">
                      <div className="card-header ls-normal">
                        <a href="#product-tab-description" className="collapse">
                          Ətraflı
                        </a>
                      </div>
                      <div
                        className="card-body expanded"
                        id="product-tab-description"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <p className="mb-4" style={{"height": "215px"}}>
                              {props.product.description}
                            </p>
                            
                          </div>
                          <div className="col-md-6">
                            <div className="banner banner-video product-video br-xs">
                              <figure className="banner-media">
                                <a href="#">
                                  <img
                                    src="assets/images/products/video-banner-610x300.jpg"
                                    alt="banner"
                                    width="610"
                                    height="300"
                                    style={{ backgroundColor: "#bebebe" }}
                                  />
                                </a>
                                <a
                                  className="btn-play-video btn-iframe"
                                  href="assets/video/memory-of-a-woman.mp4"
                                ></a>
                              </figure>
                            </div>
                          </div>
                        </div>
                        <div className="row cols-md-3">
                          <div className="mb-3">
                            <div
                              className="tab-pane"
                              id="product-tab-specification"
                            >
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
                    </div>
                    
                    <div className="card">
                      <div className="card-header ls-normal">
                        <a href="#product-tab-vendor" className="expand">
                          Mağaza haqqında 
                        </a>
                      </div>
                      <div
                        className="card-body collapsed"
                        id="product-tab-vendor"
                      >
                        <div className="row mb-3">
                          <div className="col-md-6 mb-4">
                            <figure className="vendor-banner br-sm">
                              <img
                                src={`https://api.ipekyolu.az${props.product.user.cover_image}`}
                                alt="Vendor Banner"
                                width="610"
                                height="295"
                                style={{ backgroundColor: "#353B55" }}
                              />
                            </figure>
                          </div>
                          <div className="col-md-6 pl-2 pl-md-6 mb-4">
                            <div className="vendor-user">
                              <figure className="vendor-logo mr-4">
                                <a href="#">
                                  <img
                                    src={`https://api.ipekyolu.az${props.product.user.logo}`}
                                    alt="Vendor Logo"
                                    width="80"
                                    height="80"
                                  />
                                </a>
                              </figure>
                              <div>
                                <div className="vendor-name">
                                  <a href={`vendorStore/${props.product.user.id}`}>{props.product.user.name}</a>
                                </div>
                                <div className="ratings-container">

                                  
                                  {[ ...Array(props.product.user.rating)].map(star => (
                                  <FaStar color="fda706"/>
                                    ))}
                                 
                                </div>
                              </div>
                            </div>
                            <ul className="vendor-info list-style-none pl-0">
                              <li className="store-name">
                                <label>Mağazanın adı: </label>
                                <span className="detail">{props.product.user.name}</span>
                              </li>
                              <li className="store-address">
                                <label>Ünvan: </label>
                                <span className="detail">
                                {props.product.user.city}
                                </span>
                              </li>
                              <li className="store-phone">
                                <label>Əlaqə:</label>
                                <a href="#tel:">{props.product.user.number}</a>
                              </li>
                            </ul>
                            <a
                              href={`vendorStore/${props.product.user.id}`}
                              className="btn btn-dark btn-link btn-underline btn-icon-right"
                            >
                              Mağazanı ziyarət et
                              <i className="w-icon-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="vendor-product-section">
                    <div className="title-link-wrapper mb-4">
                      <h4 className="title text-left" style={{fontWeight:"800"}}>
                      "{props.product.user.name}"dan daha çox məhsul
                      </h4>
                      <a
                        href={`vendorStore/${props.product.user.id}`}
                        className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                      >
                        Daha çox məhsul<i className="w-icon-long-arrow-right"></i>
                      </a>
                    </div>
                    <div>
                      <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2">
                       {allProducts?.slice(0,8).map((product) => (
                         <div className="product-wrap">
                         <div className="product text-center">
                           <figure className="product-media">
                             <a href="product-default.html">
                               <img
                                 src={`https://api.ipekyolu.az${product.main_image}`}
                                 alt="Product"
                                 width="300"
                                 height="338"
                               />
                             </a>
                             <div className="product-action-horizontal">
                               <a
                                 href="#"
                                 className="btn-product-icon btn-cart w-icon-cart"
                                 title="SƏBƏTƏ ƏLAVƏ ET"
                                 onClick={() => addToCardF(product.id)}
                               ></a>
                               <a
                                 href="#"
                                 className="btn-product-icon btn-wishlist w-icon-heart"
                                 title="Bəyəndiklərim"
                               ></a>
                               <a
                                 href="#"
                                 className="btn-product-icon btn-compare w-icon-compare"
                                 title="Müqayisə"
                               ></a>
                               <a
                                 href="#"
                                 className="btn-product-icon btn-quickview w-icon-search"
                                 title="Cəld Baxış"
                               ></a>
                             </div>
                           </figure>
                           <div className="product-details">
                             <div className="product-cat">
                               <a href="shop-banner-sidebar.html">
                                 {product.sub_sub_category.title}
                               </a>
                             </div>
                             <h3 className="product-name">
                               <a href="product-default.html">{product.title}</a>
                             </h3>
                             <div className="ratings-container">

                             </div>
                             <div className="product-pa-wrapper">
                               <div className="product-price">₼{product.price}</div>
                             </div>
                           </div>
                         </div>
                       </div>
                       ))}                 
                        

                      </div>
                    </div>
                  </section>
                  
                </div>
                <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
                  <div className="sidebar-overlay"></div>
                  <a className="sidebar-close" href="#">
                    <i className="close-icon"></i>
                  </a>
                  <a href="#" className="sidebar-toggle d-flex d-lg-none">
                    <i className="fas fa-chevron-left"></i>
                  </a>
                  <div className="sidebar-content scrollable">
                    <div className="sticky-sidebar">
                      <div className="widget widget-products">
                        <div className="title-link-wrapper mb-2">
                          <h4 className="title title-link font-weight-bold">
                            Digərləri
                          </h4>
                        </div>

                        <div className="swiper nav-top">
                          <div
                            className="swiper-container swiper-theme nav-top"
                            data-swiper-options="{
                                                'slidesPerView': 1,
                                                'spaceBetween': 20,
                                                'navigation': {
                                                    'prevEl': '.swiper-button-prev',
                                                    'nextEl': '.swiper-button-next'
                                                }
                                            }"
                          >
                            <div className="swiper-wrapper right-scroll">
                              <div className="widget-col swiper-slide">
                                {allProducts?.slice(0,6).map((product) => (
                                  <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href={`/${product.id}`}>
                                      <img
                                        src={`https://api.ipekyolu.az${product.main_image}`}
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href={`/${product.id}`}>{product.title}</a>
                                    </h4>
                                    <div className="ratings-container">
                                      
                                    {[ ...Array(product.rating)].map(star => (
                                    <FaStar color="fda706"/>
                                      ))}
                                    </div>
                                    <div className="product-price">₼ {product.price}</div>
                                  </div>
                                </div>
                                ))}
                                
                                
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
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
                    <a href="product-default.html">
                      Beige knitted elas
                      <br />
                      tic runner shoes
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$25.68</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/cart/product-1.jpg"
                      alt="product"
                      height="84"
                      width="94"
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      Blue utility pina
                      <br />
                      fore denim dress
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$32.99</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/cart/product-2.jpg"
                      alt="product"
                      width="84"
                      height="94"
                    />
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
              <a
                href="cart.html"
                className="btn btn-dark btn-outline btn-rounded"
              >
                View Cart
              </a>
              <a href="checkout.html" className="btn btn-primary  btn-rounded">
                Checkout
              </a>
            </div>
          </div>
        </div>

        <div className="header-search hs-toggle dir-up">
          <a href="#" className="search-toggle sticky-link">
            <i className="w-icon-search"></i>
            <p>Search</p>
          </a>
          <form action="#" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="Search"
              required
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search"></i>
            </button>
          </form>
        </div>
      </div>
      <a
        id="scroll-top"
        className="scroll-top"
        href="#top"
        title="Top"
        role="button"
      >
        {" "}
        <i className="w-icon-angle-up"></i>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
        >
          <circle
            id="progress-indicator"
            fill="transparent"
            stroke="#000000"
            stroke-miterlimit="10"
            cx="35"
            cy="35"
            r="34"
          ></circle>
        </svg>
      </a>
    
            <Footer/>
        </div>
        </>
    )
}


export default productId


export const getServerSideProps = async(context) => {
  const {productId} = context.query;
  const results = await axios.get(`https://api.ipekyolu.az/api/products/${productId}/`);
  return {
    props: {
      product: results.data,
    },
  };
}