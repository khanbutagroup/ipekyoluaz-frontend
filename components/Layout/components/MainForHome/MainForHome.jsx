import React, { useEffect, useState } from "react";
import { sliders } from "../../../../services/sliders";
import { displayedCategories } from "../../../../services/displayedCategories";
import { benefits } from "../../../../services/benefits";
import { allProducts } from "../../../../services/products/allProducts";
import { partners } from "../../../../services/partners";
import { getUserDataByToken } from "../../../../services/auth/getUserDataByToken";
import { addToWishlist } from "../../../../services/wishlist/AddToWishlist";
import { addToCard } from "../../../../services/card/addToCard";
import { allDiscount } from "../../../../services/discount/allDiscount";
import { productFilter } from "../../../../services/productFilter";
import { useDispatch, useSelector } from "react-redux";
import { addToCardMain } from "../../../../store/actions";
import { cartByUserID } from "../../../../services/card/cartByUserID";
import { vendors } from "../../../../services/vendors/vendors";
import axios from 'axios'
import styles from '../../../../public/assets/css/newShopSlider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'
import { MobileFooter } from "../MobileFooter/MobileFooter";





const MainForHome = (props) => {
  const [optionsTitle, setOptionsData] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]

  };
  useEffect(() => {
    if (localStorage.getItem("optionsTitle")) {
      setOptionsData(JSON.parse(localStorage.getItem("optionsTitle")));
      sliders().then((items) => {
        localStorage.setItem("optionsTitle", JSON.stringify(items?.data));
        JSON.parse(localStorage.getItem("optionsTitle"))
          ? setOptionsData(JSON.parse(localStorage.getItem("optionsTitle")))
          : [];
      });
    } else {
      sliders().then((items) => {
        localStorage.setItem("optionsTitle", JSON.stringify(items?.data));
        JSON.parse(localStorage.getItem("optionsTitle"))
          ? setOptionsData(JSON.parse(localStorage.getItem("optionsTitle")))
          : [];
      });
    }
  }, []);

  useEffect(() => {
    sliders().then((items) => {
      setOptionsData(items?.data);
    });
  }, []);

  const [displayedCategoriesTitle, setDisplayedCategoriesData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("displayedCategoriesTitle")) {
      setDisplayedCategoriesData(
        JSON.parse(localStorage.getItem("displayedCategoriesTitle"))
      );
      displayedCategories().then((items) => {
        localStorage.setItem(
          "displayedCategoriesTitle",
          JSON.stringify(items?.data)
        );
        JSON.parse(localStorage.getItem("displayedCategoriesTitle"))
          ? setDisplayedCategoriesData(
              JSON.parse(localStorage.getItem("displayedCategoriesTitle"))
            )
          : [];
      });
    } else {
      displayedCategories().then((items) => {
        localStorage.setItem(
          "displayedCategoriesTitle",
          JSON.stringify(items?.data)
        );
        JSON.parse(localStorage.getItem("displayedCategoriesTitle"))
          ? setDisplayedCategoriesData(
              JSON.parse(localStorage.getItem("displayedCategoriesTitle"))
            )
          : [];
      });
    }
  }, []);

  const [displayedBenefits, setDisplayedBenefitsData] = useState([]);

  useEffect(() => {
    benefits().then((items) => {
      setDisplayedBenefitsData(items.data);
    });
  }, []);

  const [allProductsTitle, setAllProductsData] = useState([]);
  useEffect(() => {
    productFilter({}).then((items) => {
      console.log(items.data.results, "dsjkahdjkash");
      setAllProductsData(items.data.results);
    });
  }, []);



  const [data2, setData2] = useState([])

useEffect(() => {
  getData()
},[])
  


const getData = async () => {
  await axios.get('https://api.ipekyolu.az/api/auth/vendors/')
  .then(res => setData2(res.data.results))
  .catch(err => console.log(err))
  
}

  const [partnersTitle, setPartnersData] = useState([]);
  useEffect(() => {
    partners().then((items) => {
      setPartnersData(items.data);
    });
  }, []);

  const [showMe, setShowMe] = useState("none");
  const showMeFunc = () => {
    if (showMe == "none") {
      setShowMe("block");
    } else {
      setShowMe("none");
    }
  };

  const [userId, userIdData] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem("username");
    if (token) {
      getUserDataByToken().then((items) => {
        if (items.data.id) {
          userIdData(items.data.id);
        }
      });
    }
  }, []);

  const addWishlist = (id) => {
    console.log("hello world");
    let data = { user: userId, product: id };
    addToWishlist(data)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addCompare = (row) => {
    if (JSON.parse(localStorage.getItem("compare")) == null) {
      localStorage.setItem("compare", JSON.stringify([row]));
    } else if (JSON.parse(localStorage.getItem("compare")).length == 1) {
      JSON.parse(localStorage.getItem("compare")).map((e) => {
        if (row.category == e.category) {
          let compareArray = JSON.parse(localStorage.getItem("compare"));
          compareArray.push(row);
          localStorage.setItem("compare", JSON.stringify(compareArray));
        } else {
          swal({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
            button: "ok",
          });
          console.log(row);
        }
      });
    } else if (JSON.parse(localStorage.getItem("compare")).length == 0) {
      localStorage.setItem("compare", JSON.stringify([row]));
    }
  };
  const dispatch = useDispatch();
  const addToCardFunc = (productId) => {
    let data = { quantity: 1, product: productId };
    addToCard(data)
      .then((e) => {
        cartByUserIDFunc();
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const cartByUserIDFunc = () => {
    let userId = localStorage.getItem("userId");
    cartByUserID(userId)
      .then((e) => {
        dispatch(addToCardMain(e.data.product_version));
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [quickviewList, setQuickviewList] = useState([]);
  const [quickviewListImages, setQuickviewListImages] = useState([]);
  const [quickviewListFilterValues, setQuickviewListFilterValues] = useState(
    []
  );
  const showQuickviewm = (e) => {
    setQuickviewList([e]);
    quickviewList.map((r) => {
      setQuickviewListImages(r.images);
    });
    quickviewList.map((r) => {
      setQuickviewListFilterValues(r.filter_values);
    });
  };
  console.log(quickviewList);

  const [allDiscountTitle, allDiscountData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("allDiscountTitle")) {
      allDiscountData(JSON.parse(localStorage.getItem("allDiscountTitle")));
    } else {
      allDiscount().then((items) => {
        localStorage.setItem(
          "allDiscountTitle",
          JSON.stringify(items.data.results)
        );
        JSON.parse(localStorage.getItem("allDiscountTitle"))
          ? allDiscountData(
              JSON.parse(localStorage.getItem("allDiscountTitle"))
            )
          : [];
      });
    }
  }, []);

  const productHome = useSelector((state) => state.productHome);
  return (
    <>
      <style jsx>
        {`
          @media only screen and (min-width: 769px) {
            .product-list {
              width: 700px !important;
            }
          }
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

          .ratings,
          .ratings-full {
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

          .ratings,
          .ratings-full {
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
            background: #0088dd;
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
            background: #0088dd;
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
        `}
      </style>
      <div className="page-wrapper">
        <main className="main">
          <div className="container pb-2">
            <div className="intro-wrapper mt-4">
              <div
                style={{zIndex: "-1"}}
                className="swiper-container swiper-theme pg-inner animation-slider row cols-1 gutter-no"
                data-swiper-options="{
                        'autoplay': {
                            'delay': 8000,
                            'disableOnInteraction': false
                        }
                    }"
              >
                <div className="swiper-wrapper">
                  {optionsTitle.map(
                    (e) => (
                      
                      (
                        <div
                          className="swiper-slide banner banner-fixed intro-slide intro-slide2 br-sm"
                          // style={{
                          //   backgroundImage: "url(" + e.image + ")",
                          //   backgroundColor: "#2e3233",
                          // }}
                        >
                          <img src={e?.image} alt="" />
                          <div className="banner-content y-50" style={{zIndex:"0"}}>
                            <div
                              className="slide-animate"
                              data-animation-options="{
                                        'name': 'flipInY', 'duration': '1s'
                                    }"
                            >
                              <h3 className="banner-subtitle text-white text-uppercase font-weight-bold">
                                {e.title}
                              </h3>
                                    
                              <p className="text-white">{e.description} </p>
                              <a
                                href={e.button_link}
                                className="btn btn-white btn-outline btn-rounded btn-icon-right"
                              >
                                {e.button_text}
                                <i className="w-icon-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  )}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
          <div className="container mb-10 pb-2">
            <div
              className="swiper-container swiper-theme icon-box-wrapper appear-animate br-sm bg-white"
              style={{ padding: "11px", zIndex: "-1" }}
              data-swiper-options="{
                    'loop': true,
                    'slidesPerView': 1,
                    'autoplay': {
                        'delay': 4000,
                        'disableOnInteraction': false
                    },
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 2
                        },
                        '768': {
                            'slidesPerView': 3
                        },
                        '992': {
                            'slidesPerView': 3
                        },
                        '1200': {
                            'slidesPerView': 4
                        }
                    }
                }"
            >
              <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
                {displayedBenefits.map((e) => (
                  <div className="swiper-slide icon-box icon-box-side text-dark">
                    <span className="icon-box-icon icon-shipping">
                      <img src={e.icon} style={{ width: "30px" }} />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">{e?.title}</h4>
                      <p className="text-default">{e?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="row category-wrapper cols-lg-3 cols-sm-2 mt-3 appear-animate ">
              {displayedCategoriesTitle.slice(0,6).map((e) => (
                <div className="category-wrap mb-4">
                  <div className="category category-group-image br-sm">
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href={`shop/${e.id}?card`}>{e.category.title}</a>
                      </h4>
                      <ul className="category-list">
                        {e.category.sub_categories.slice(0, 6).map((item) => (
                          <li>
                            <a href={`shop/${e.id}?card`}>{item.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href={`shop/${e.id}?card`}>
                      <figure className="category-media">
                        <img
                          src={e.image}
                          alt="Category"
                          width="190"
                          height="215"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container mt-1 pt-2">
            <h2 className="title title-underline mb-4 appear-animate">
              Ən yeni Mağazalar
            </h2>
            <div className={styles.newShopslider}>
              
              <Slider {...settings}>
                {data2.map((shop)=> (
                  <a href={`vendorStore/${shop.id}`}>
                  <div className={styles.cardContainer}>
                  <div className={styles.cardItem}>
                    <div className={styles.firstRow}>
                        <div className={styles.frImage}>
                          <img src={shop.cover_image} width="100%" height="100%" style={{objectFit: "contain"}}/>
                        </div>
                        <div className={styles.rRow}>
                          <div className={styles.shopName}>
                              {shop.name} 
                          </div>
                          <div className={styles.raiting}>
                            {[ ...Array(shop.rating)].map(star => (
                              <FaStar color="fda706"/>
                            ))}
                                
                          </div>
                        </div>
                    </div>
                    <div className={styles.secondRow}>
                        {shop.products.slice(0, 3).map((product) => (
                            <div className={styles.srImage}>
                              <img src={`${product.main_image}`} width="100%" height="100%" style={{"borderRadius": "10px", objectFit:"contain"}}/>
                            </div>
                        ))}
                        

                    </div>
                  </div>
                </div>
                </a>
                ))}
                
                
                
              </Slider>
              
            </div>
          </div>
          <div className="container mt-1 pt-2">
            <div className=" pb-5">
              <div className="title-link-wrapper title-deals appear-animate">
                <h2 className="title">Günün endirimləri</h2>
                <a href="/more-products" className="font-weight-bold ls-25">
                  Daha çox məhsul
                  <i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
              <div
                className="swiper-container swiper-theme icon-box-wrapper appear-animate br-sm bg-white"
                data-swiper-options="{
                    'loop': true,
                    'slidesPerView': 1,
                    'autoplay': {
                        'delay': 4000,
                        'disableOnInteraction': false
                    },
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 2
                        },
                        '768': {
                            'slidesPerView': 2
                        },
                        '992': {
                            'slidesPerView':2,
                            'spaceBetween': 20
                        },
                        '1200': {
                            'slidesPerView': 2,
                            'spaceBetween': 20
                        }
                    }
                }"
              >
                <div className="swiper-wrapper row cols-md-1 cols-sm-1 mt-3 cols-1">
                  {allDiscountTitle.map((e) => (
                    <div className="swiper-slide icon-box icon-box-side text-dark">
                      <div className="product product-list br-xs mb-0">
                        <figure className="product-media" >
                          <a href={`/moreProducts/${e.product.id}`}>
                            <img
                              src={e.product.main_image}
                              alt="Product"
                              width="315"
                              height="355"
                            />

                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              onClick={() => showQuickviewm(e.product)}
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="Cəld Baxış"
                            ></a>
                          </div>
                          <div
                            className="product-countdown-container"
                            style={{ height: "35px" }}
                          >
                            <div
                              className="product-countdown countdown-compact"
                              data-until="2021, 9, 9"
                              data-format="DHMS"
                              data-compact="false"
                              style={{ fontSize: "20px" }}
                              data-labels-short="Days, Hours, Mins, Secs"
                            >
                              00:00:00:00
                            </div>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href={`/moreProducts/${e.product.id}`}>
                              {e.product.title}
                            </a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{
                                  width: `${18 * e.product.rating + "%"}`,
                                }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a
                              href={`/${e.product.id}`}
                              className="rating-reviews"
                            >
                              ({e.product.rating}
                              reviews)
                            </a>
                          </div>
                          <div className="product-price">$235.35 </div>
                          <ul className="product-desc">
                            <li>{e.product.short_desc1}</li>
                            <li>{e.product.short_desc2}</li>
                            <li>{e.product.short_desc3}</li>
                          </ul>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              onClick={() => {
                                addToCardFunc(e.id);
                              }}
                              title="Add to Cart"
                            >
                              <i className="w-icon-cart"></i> Səbətə əlavə et
                            </a>
                            <a
                              href="#"
                              style={{ color: "#cd2027" }}
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              onClick={() => {
                                addWishlist(e.id);
                              }}
                              title="Bəyəndiklərim"
                            ></a>
                            <a
                              href="#"
                              onClick={() => {
                                addCompare(e);
                              }}
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Müqayisə"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-1 pt-2">
            <div className="filter-with-title appear-animate">
              <h2 className="title">Bütün məhsullar</h2>
              <ul
                className="nav-filters filter-boxed"
                data-target="#products-1" style={{display:"none"}}
              >
                <li>
                  <a href="#" className="nav-filter active" data-filter=".1-1">
                    YENİ MƏHSULLAR
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-filter" data-filter=".1-2">
                    ÇOX SATILAN
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-filter" data-filter=".1-3">
                    ƏN POPULYAR
                  </a>
                </li>
                <li>
                  <a href="/shop" className="nav-filter" data-filter="*">
                    HAMISINA BAX
                  </a>
                </li>
              </ul>
            </div>
            <div className="product-wrapper row cols-lg-5 cols-md-4 cols-sm-2 cols-2">
              
              {allProductsTitle && allProductsTitle.length > 0 && allProductsTitle.map((e) => (
                
                <div
                  className="product-wrap"
                  style={{ width: "50%", height: "50%" }}
                >
                  <div className="product text-center">
                    <figure className="product-media">
                      <Link href={`/${e.id}`}>
                        <img
                          src={e.main_image}
                          alt="Product"
                          style={{ maxHeight: "150px",objectFit:"contain" }}

                        />
                      </Link>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          onClick={() => {
                            addToCardFunc(e.id);
                          }}
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          onClick={() => {
                            addWishlist(e.id);
                          }}
                          title="Bəyəndiklərim"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon  w-icon-compare"
                          onClick={() => {
                            addCompare(e);
                          }}
                          title="Müqayisə"
                        ></a>
                        <a
                          href="#"
                          onClick={() => showQuickviewm(e)}
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="CƏLD BAXIŞ"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                      
                        <a href={`shop/${e.id}`}>{e.category.title}</a>
                      </div>
                      <h3 className="product-name">
                      <Link href={"/" + e.id}>
                        <span style={{cursor: "pointer"}}>{e.title}</span>
                      </Link>
                      </h3>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: `${18 * e.rating + "%"}` }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a href={`shop/${e.id}`} className="rating-reviews">
                          ({e.rating}
                          reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">₼ {e.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
            {/*<div className="toolbox toolbox-pagination justify-content-between">*/}
            {/*    <p className="showing-info mb-2 mb-sm-0">*/}
            {/*        Showing<span>1-12 of 60</span>Products*/}
            {/*    </p>*/}
            {/*    <ul className="pagination">*/}
            {/*        <li className="prev disabled">*/}
            {/*            <a href="#" aria-label="Previous" tabIndex="-1" aria-disabled="true">*/}
            {/*                <i className="w-icon-long-arrow-left"></i>Prev*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*        <li className="page-item active">*/}
            {/*            <a className="page-link" href="#">1</a>*/}
            {/*        </li>*/}
            {/*        <li className="page-item">*/}
            {/*            <a className="page-link" href="#">2</a>*/}
            {/*        </li>*/}
            {/*        <li className="next">*/}
            {/*            <a href="#" aria-label="Next">*/}
            {/*                Next<i className="w-icon-long-arrow-right"></i>*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
          </div>
          <section className="grey-section pt-10">
            <div className="container mt-3 mb-1">
              <h2 className="title text-left mb-5 appear-animate">
                Bizim Partnyorlar
              </h2>
              <div
                className="swiper-container swiper-theme brands-wrapper mb-10 bg-white appear-animate"
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
                    }"
              >
                <div className="swiper-wrapper row gutter-no cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                  {partnersTitle.map((e) => (
                    <div className="swiper-slide brand-col">
                      <div
                        style={{
                          width: "80%",
                          height: "10%",
                          position: "relative",
                          left: "40px",
                        }}
                      >
                        <figure
                          className="brand-wrapper"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            src={e.logo}
                            alt="Brand"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              maxHeight: "150px",
                            }}
                          />
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className="container pt-10">
            {/*<div className="swiper-container swiper-theme recent-view shadow-swiper appear-animate mb-8 pb-2"*/}
            {/*     data-swiper-options="{*/}
            {/*    'spaceBetween': 20,*/}
            {/*    'slidesPerView': 2,*/}
            {/*    'breakpoints': {*/}
            {/*        '576': {*/}
            {/*            'slidesPerView': 3*/}
            {/*        },*/}
            {/*        '768': {*/}
            {/*            'slidesPerView': 5*/}
            {/*        },*/}
            {/*        '992': {*/}
            {/*            'slidesPerView': 6*/}
            {/*        },*/}
            {/*        '1200': {*/}
            {/*            'slidesPerView': 8,*/}
            {/*            'dots': false*/}
            {/*        }*/}
            {/*    }*/}
            {/*}">*/}
            {/*    <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">*/}
            {/*        <div className="swiper-slide product-wrap">*/}
            {/*            <div className="product text-center product-absolute">*/}
            {/*                <figure className="product-media">*/}
            {/*                    <a href="product-defaproduct-default.html">*/}
            {/*                        <img src="assets/images/demos/demo11/products/1-1-1.jpg"*/}
            {/*                             alt="Category image"*/}
            {/*                             width="130" height="146"/>*/}
            {/*                    </a>*/}
            {/*                </figure>*/}
            {/*                <h4 className="product-name">*/}
            {/*                    <a href="product-default.html">Headkerchief</a>*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="swiper-slide product-wrap">*/}
            {/*            <div className="product text-center product-absolute">*/}
            {/*                <figure className="product-media">*/}
            {/*                    <a href="product-defaproduct-default.html">*/}
            {/*                        <img src="assets/images/demos/demo11/products/1-1-2.jpg"*/}
            {/*                             alt="Category image"*/}
            {/*                             width="130" height="146"/>*/}
            {/*                    </a>*/}
            {/*                </figure>*/}
            {/*                <h4 className="product-name">*/}
            {/*                    <a href="product-default.html">Leather Stripe Watch</a>*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="swiper-slide product-wrap">*/}
            {/*            <div className="product text-center product-absolute">*/}
            {/*                <figure className="product-media">*/}
            {/*                    <a href="product-defaproduct-default.html">*/}
            {/*                        <img src="assets/images/demos/demo11/products/4-1-1.jpg"*/}
            {/*                             alt="Category image"*/}
            {/*                             width="130" height="146"/>*/}
            {/*                    </a>*/}
            {/*                </figure>*/}
            {/*                <h4 className="product-name">*/}
            {/*                    <a href="product-default.html">Red Cap Sound Marker</a>*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="swiper-slide product-wrap">*/}
            {/*            <div className="product text-center product-absolute">*/}
            {/*                <figure className="product-media">*/}
            {/*                    <a href="product-defaproduct-default.html">*/}
            {/*                        <img src="assets/images/demos/demo11/products/2-3-1.jpg"*/}
            {/*                             alt="Category image"*/}
            {/*                             width="130" height="146"/>*/}
            {/*                    </a>*/}
            {/*                </figure>*/}
            {/*                <h4 className="product-name">*/}
            {/*                    <a href="product-default.html">Smartphone Electronic Charger</a>*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="swiper-slide product-wrap">*/}
            {/*            <div className="product text-center product-absolute">*/}
            {/*                <figure className="product-media">*/}
            {/*                    <a href="product-defaproduct-default.html">*/}
            {/*                        <img src="assets/images/demos/demo11/products/2-4-1.jpg"*/}
            {/*                             alt="Category image"*/}
            {/*                             width="130" height="146"/>*/}
            {/*                    </a>*/}
            {/*                </figure>*/}
            {/*                <h4 className="product-name">*/}
            {/*                    <a href="product-default.html">Blue Ski Boots</a>*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="swiper-slide product-wrap">*/}
            {/*            <div className="product text-center product-absolute">*/}
            {/*                <figure className="product-media">*/}
            {/*                    <a href="product-defaproduct-default.html">*/}
            {/*                        <img src="assets/images/demos/demo11/products/2-2-1.jpg"*/}
            {/*                             alt="Category image"*/}
            {/*                             width="130" height="146"/>*/}
            {/*                    </a>*/}
            {/*                </figure>*/}
            {/*                <h4 className="product-name">*/}
            {/*                    <a href="product-default.html">Soft Sound Marker</a>*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="swiper-slide product-wrap">*/}
            {/*            <div className="product text-center product-absolute">*/}
            {/*                <figure className="product-media">*/}
            {/*                    <a href="product-defaproduct-default.html">*/}
            {/*                        <img src="assets/images/demos/demo11/products/3-1-1.jpg"*/}
            {/*                             alt="Category image"*/}
            {/*                             width="130" height="146"/>*/}
            {/*                    </a>*/}
            {/*                </figure>*/}
            {/*                <h4 className="product-name">*/}
            {/*                    <a href="product-default.html">Multi function Watch</a>*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="swiper-slide product-wrap">*/}
            {/*            <div className="product text-center product-absolute">*/}
            {/*                <figure className="product-media">*/}
            {/*                    <a href="product-defaproduct-default.html">*/}
            {/*                        <img src="assets/images/demos/demo11/products/4-2-1.jpg"*/}
            {/*                             alt="Category image"*/}
            {/*                             width="130" height="146"/>*/}
            {/*                    </a>*/}
            {/*                </figure>*/}
            {/*                <h4 className="product-name">*/}
            {/*                    <a href="product-default.html">Running Machine</a>*/}
            {/*                </h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="swiper-pagination"></div>*/}
            {/*</div>*/}
          </div>
        </main>
      </div>
      <MobileFooter/>

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

      <div className="product product-single product-popup">
        <div className="row gutter-lg">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="product-gallery product-gallery-sticky">
              <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                <div className="swiper-wrapper row cols-1 gutter-no">
                  <div className="swiper-slide">
                    <figure className="product-image">
                      {quickviewList.map((e) => (
                        <img
                          src={e.main_image}
                          data-zoom-image={e.main_image}
                          alt="Water Boil Black Utensil"
                          width="800"
                          height="900"
                        />
                      ))}
                    </figure>
                  </div>
                  {quickviewListImages.map((e) => {
                    <div className="swiper-slide">
                      <figure className="product-image">
                        <img
                          src={e.image}
                          data-zoom-image={e.image}
                          alt="Water Boil Black Utensil"
                          width="800"
                          height="900"
                        />
                      </figure>
                    </div>;
                  })}
                </div>
                <button className="swiper-button-next"></button>
                <button className="swiper-button-prev"></button>
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
                  <div className="product-thumb swiper-slide">
                    {quickviewList.map((e) => (
                      <img
                        src={e.main_image}
                        alt="Product Thumb"
                        width="103"
                        height="116"
                      />
                    ))}
                  </div>
                  {quickviewListImages.map((e) => {
                    <div className="product-thumb swiper-slide">
                      <img
                        src={e.image}
                        alt="Product Thumb"
                        width="103"
                        height="116"
                      />
                    </div>;
                  })}
                </div>
                <button className="swiper-button-next"></button>
                <button className="swiper-button-prev"></button>
              </div>
            </div>
          </div>
          <div className="col-md-6 overflow-hidden p-relative">
            <div className="product-details scrollable pl-0">
              {quickviewList.map((e) => (
                <h2 className="product-title">{e.title}</h2>
              ))}
              <div className="product-bm-wrapper">
                <figure className="brand">
                  <img
                    src="assets/images/products/brand/brand-1.jpg"
                    alt="Brand"
                    width="102"
                    height="48"
                  />
                </figure>
                <div className="product-meta">
                  <div className="product-categories">
                    Category:
                    <span className="product-category">
                      <a href="#">Electronics</a>
                    </span>
                  </div>
                  <div className="product-sku">
                    SKU: <span>MS46891340</span>
                  </div>
                </div>
              </div>

              <hr className="product-divider" />
              {quickviewList.map((e) => (
                <div className="product-price">₼ {e.price}</div>
              ))}

              {quickviewList.map((e) => (
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span
                      className="ratings"
                      style={{ width: `${18 * e.rating + "%"}` }}
                    ></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="product-default.html" className="rating-reviews">
                    ({e.rating}
                    reviews)
                  </a>
                </div>
              ))}

              <div className="product-short-desc">
                <ul className="list-type-check list-style-none">
                  {quickviewList.map((e) => (
                    <li>{e.short_desc1}</li>
                  ))}
                  {quickviewList.map((e) => (
                    <li>{e.short_desc2}</li>
                  ))}
                  {quickviewList.map((e) => (
                    <li>{e.short_desc3}</li>
                  ))}
                </ul>
              </div>

              <hr className="product-divider" />
              <div className="product-form product-variation-form product-color-swatch">
                <div>
                  <div>
                    <div id="product-tab-specification">
                      <ul className="list-none">
                        {quickviewListFilterValues.map((m) => (
                          <li>
                            <label>{m.the_filter.title}</label>
                            <p>{m.value}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-form">
                <div className="product-qty-form">
                  <div className="input-group">
                    <input
                      className="quantity form-control"
                      type="number"
                      min="1"
                      max="10000000"
                    />
                    <button className="quantity-plus w-icon-plus"></button>
                    <button className="quantity-minus w-icon-minus"></button>
                  </div>
                </div>
                <button className="btn btn-primary btn-cart">
                  <i className="w-icon-cart"></i>
                  <span>Səbətə əlavə et</span>
                </button>
              </div>

              <div className="social-links-wrapper">
                <div className="social-links">
                  <div className="social-icons social-no-color border-thin">
                    <a
                      href="#"
                      className="social-icon social-facebook w-icon-facebook"
                    ></a>
                    <a
                      href="#"
                      className="social-icon social-instagram fab fa-instagram"
                    ></a>
                    <a
                      href="#"
                      className="social-icon social-twitter fab fa-telegram"
                    ></a>
                    <a
                      href="#"
                      className="social-icon social-whatsapp fab fa-whatsapp"
                    ></a>
                    <a
                      href="#"
                      className="social-icon social-youtube fab fa-linkedin-in"
                    ></a>
                  </div>
                </div>
                <span className="divider d-xs-show"></span>
                <div className="product-link-wrapper d-flex">
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                  >
                    <span></span>
                  </a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                  >
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainForHome;
