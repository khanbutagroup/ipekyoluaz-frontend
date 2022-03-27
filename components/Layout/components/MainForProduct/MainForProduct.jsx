import React, { useEffect, useState } from "react";
import MainForProductDetails from "./ MainForProductDetails";
import {productById} from "../../../../services/products/productById";
export default function MainForProduct() {
  const [productByIdTitle, productByIdData] = useState([]);
  const [productByIdURLTitle, productByIdURLData] = useState([]);
  useEffect(() => {
    let mounted = true;
    //window.location.pathname
    productById(window.location.href.split("/")[3]).then((items) => {
      if (mounted) {
        if (items){
          productByIdURLData(items.data.images,"kk")
          productByIdData([items.data]);
        }

      }
    });
    return () => (mounted = false);
  }, []);
  const [showMe, setShowMe] = useState("none");
  function showMeFunc() {
    if (showMe == "none") {
      setShowMe("block");
    } else {
      setShowMe("none");
    }
  }
  return (
    <>
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
<<<<<<< HEAD
            background: #0b899b;
=======
            background: #0088dd;
>>>>>>> master
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
                                  <div className="swiper-slide">
                                    <figure className="product-image">
                                      <img
                                        src="assets/images/products/accordion/2-800x900.jpg"
                                        data-zoom-image="assets/images/products/accordion/2-800x900.jpg"
                                        alt="Bodycare Smooth Powder"
                                        width="488"
                                        height="549"
                                      />
                                    </figure>
                                  </div>
                                  <div className="swiper-slide">
                                    <figure className="product-image">
                                      <img
                                        src="assets/images/products/accordion/3-800x900.jpg"
                                        data-zoom-image="assets/images/products/accordion/3-800x900.jpg"
                                        alt="Bodycare Smooth Powder"
                                        width="800"
                                        height="900"
                                      />
                                    </figure>
                                  </div>
                                  <div className="swiper-slide">
                                    <figure className="product-image">
                                      <img
                                        src="assets/images/products/accordion/4-800x900.jpg"
                                        data-zoom-image="assets/images/products/accordion/4-800x900.jpg"
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
                                  <div className="product-thumb swiper-slide">
                                    <img
                                      src="assets/images/products/accordion/1-800x900.jpg"
                                      alt="Product Thumb"
                                      width="800"
                                      height="900"
                                    />
                                  </div>
                                  <div className="product-thumb swiper-slide">
                                    <img
                                      src="assets/images/products/accordion/2-800x900.jpg"
                                      alt="Product Thumb"
                                      width="800"
                                      height="900"
                                    />
                                  </div>
                                  <div className="product-thumb swiper-slide">
                                    <img
                                      src="assets/images/products/accordion/3-800x900.jpg"
                                      alt="Product Thumb"
                                      width="800"
                                      height="900"
                                    />
                                  </div>
                                  <div className="product-thumb swiper-slide">
                                    <img
                                      src="assets/images/products/accordion/4-800x900.jpg"
                                      alt="Product Thumb"
                                      width="800"
                                      height="900"
                                    />
                                  </div>
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-6 mb-md-8">
                            <MainForProductDetails />
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
                        {productByIdURLTitle.map(e=>(
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
                                  {e.image(r=>( <div className="swiper-slide">
                                    <figure className="product-image">
                                      <img
                                          src="assets/images/products/accordion/1-800x900.jpg"
                                          data-zoom-image="assets/images/products/accordion/1-800x900.jpg"
                                          alt="Bodycare Smooth Powder"
                                          width="800"
                                          height="900"
                                      />
                                    </figure>
                                  </div>))}
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
                                  {e.image(r=>( <div className="product-thumb swiper-slide">
                                    <img
                                        src="assets/images/products/accordion/1-800x900.jpg"
                                        alt="Product Thumb"
                                        width="800"
                                        height="900"
                                    />
                                  </div>))}
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                              </div>
                            </div>
                        ))}

                      </div>
                      <div className="col-md-6 mb-6 mb-md-8">
                        <MainForProductDetails />
                      </div>
                    </div>
                  </div>
                  <div className="accordion accordion-simple mb-9">
                    <div className="card">
                      <div className="card-header ls-normal">
                        <a href="#product-tab-description" className="collapse">
                          Description
                        </a>
                      </div>
                      <div
                        className="card-body expanded"
                        id="product-tab-description"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <p className="mb-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt arcu cursus
                              vitae congue mauris. Sagittis id consectetur purus
                              ut. Tellus rutrum tellus pelle Vel pretium lectus
                              quam id leo in vitae turpis massa.
                            </p>
                            <ul className="list-type-check list-style-none pl-0">
                              <li>
                                Nunc nec porttitor turpis. In eu risus enim. In
                                vitae mollis elit.
                              </li>
                              <li>Vivamus finibus vel mauris ut vehicula.</li>
                              <li>
                                Nullam a magna porttitor, dictum risus nec,
                                faucibus sapien.
                              </li>
                              <li>
                                Ultrices eros in cursus turpis massa tincidunt
                                ante in nibh mauris.
                              </li>
                            </ul>
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
                        <a href="#product-tab-reviews" className="expand">
                          Customer Reviews(3)
                        </a>
                      </div>
                      <div
                        className="card-body collapsed"
                        id="product-tab-reviews"
                      >
                        <div className="row mb-4">
                          <div className="col-xl-4 col-lg-5 mb-4">
                            <div className="ratings-wrapper">
                              <div className="avg-rating-container">
                                <h4 className="avg-mark font-weight-bolder ls-50">
                                  3.3
                                </h4>
                                <div className="avg-rating">
                                  <p className="text-dark mb-1">
                                    Average Rating
                                  </p>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a href="#" className="rating-reviews">
                                      (3 Reviews)
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ratings-value d-flex align-items-center text-dark ls-25">
                                <span className="text-dark font-weight-bold">
                                  66.7%
                                </span>
                                Recommended
                                <span className="count">(2 of 3)</span>
                              </div>
                              <div className="ratings-list">
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                  <div className="progress-bar progress-bar-sm ">
                                    <span></span>
                                  </div>
                                  <div className="progress-value">
                                    <mark>70%</mark>
                                  </div>
                                </div>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                  <div className="progress-bar progress-bar-sm ">
                                    <span></span>
                                  </div>
                                  <div className="progress-value">
                                    <mark>30%</mark>
                                  </div>
                                </div>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                  <div className="progress-bar progress-bar-sm ">
                                    <span></span>
                                  </div>
                                  <div className="progress-value">
                                    <mark>40%</mark>
                                  </div>
                                </div>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "40%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                  <div className="progress-bar progress-bar-sm ">
                                    <span></span>
                                  </div>
                                  <div className="progress-value">
                                    <mark>0%</mark>
                                  </div>
                                </div>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "20%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                  <div className="progress-bar progress-bar-sm ">
                                    <span></span>
                                  </div>
                                  <div className="progress-value">
                                    <mark>0%</mark>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 mb-4">
                            <div className="review-form-wrapper">
                              <h3 className="title tab-pane-title font-weight-bold mb-1">
                                Submit Your Review
                              </h3>
                              <p className="mb-3">
                                Your email address will not be published.
                                Required fields are marked *
                              </p>
                              <form
                                action="#"
                                method="POST"
                                className="review-form"
                              >
                                <div className="rating-form">
                                  <label htmlFor="rating">
                                    Your Rating Of This Product :
                                  </label>
                                  <span className="rating-stars">
                                    <a className="star-1" href="#">
                                      1
                                    </a>
                                    <a className="star-2" href="#">
                                      2
                                    </a>
                                    <a className="star-3" href="#">
                                      3
                                    </a>
                                    <a className="star-4" href="#">
                                      4
                                    </a>
                                    <a className="star-5" href="#">
                                      5
                                    </a>
                                  </span>
                                  <select
                                    name="rating"
                                    id="rating"
                                    required=""
                                    style={{ display: "none" }}
                                  >
                                    <option value="">Rate…</option>
                                    <option value="5">Perfect</option>
                                    <option value="4">Good</option>
                                    <option value="3">Average</option>
                                    <option value="2">Not that bad</option>
                                    <option value="1">Very poor</option>
                                  </select>
                                </div>
                                <textarea
                                  cols="30"
                                  rows="6"
                                  placeholder="Write Your Review Here..."
                                  className="form-control"
                                  id="review"
                                ></textarea>
                                <div className="row gutter-md">
                                  <div className="col-md-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Your Name"
                                      id="author"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Your Email"
                                      id="email_1"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    id="save-checkbox"
                                  />
                                  <label htmlFor="save-checkbox">
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
                                  </label>
                                </div>
                                <button type="submit" className="btn btn-dark">
                                  Submit Review
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              <a href="#show-all" className="nav-link active">
                                Show All
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#helpful-positive" className="nav-link">
                                Most Helpful Positive
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#helpful-negative" className="nav-link">
                                Most Helpful Negative
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#highest-rating" className="nav-link">
                                Highest Rating
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#lowest-rating" className="nav-link">
                                Lowest Rating
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div className="tab-pane active" id="show-all">
                              <ul className="comments list-style-none">
                                <li className="comment">
                                  <div className="comment-body">
                                    <figure className="comment-avatar">
                                      <img
                                        src="assets/images/agents/1-100x100.png"
                                        alt="Commenter Avatar"
                                        width="90"
                                        height="90"
                                      />
                                    </figure>
                                    <div className="comment-content">
                                      <h4 className="comment-author">
                                        <a href="#">John Doe</a>
                                        <span className="comment-date">
                                          March 22, 2021 at 1:54 pm
                                        </span>
                                      </h4>
                                      <div className="ratings-container comment-rating">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: "60%" }}
                                          ></span>
                                          <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                      </div>
                                      <p>
                                        pellentesque habitant morbi tristique
                                        senectus et. In dictum non consectetur a
                                        erat. Nunc ultrices eros in cursus
                                        turpis massa tincidunt ante in nibh
                                        mauris cursus mattis. Cras ornare arcu
                                        dui vivamus arcu felis bibendum ut
                                        tristique.
                                      </p>
                                      <div className="comment-action">
                                        <a
                                          href="#"
                                          className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-up"></i>
                                          Helpful (1)
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-down"></i>
                                          Unhelpful (0)
                                        </a>
                                        <div className="review-image">
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-1.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="comment">
                                  <div className="comment-body">
                                    <figure className="comment-avatar">
                                      <img
                                        src="assets/images/agents/2-100x100.png"
                                        alt="Commenter Avatar"
                                        width="90"
                                        height="90"
                                      />
                                    </figure>
                                    <div className="comment-content">
                                      <h4 className="comment-author">
                                        <a href="#">John Doe</a>
                                        <span className="comment-date">
                                          March 22, 2021 at 1:52 pm
                                        </span>
                                      </h4>
                                      <div className="ratings-container comment-rating">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: " 80%" }}
                                          ></span>
                                          <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                      </div>
                                      <p>
                                        Nullam a magna porttitor, dictum risus
                                        nec, faucibus sapien. Ultrices eros in
                                        cursus turpis massa tincidunt ante in
                                        nibh mauris cursus mattis. Cras ornare
                                        arcu dui vivamus arcu felis bibendum ut
                                        tristique.
                                      </p>
                                      <div className="comment-action">
                                        <a
                                          href="#"
                                          className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-up"></i>
                                          Helpful (1)
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-down"></i>
                                          Unhelpful (0)
                                        </a>
                                        <div className="review-image">
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-2.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-3.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="comment">
                                  <div className="comment-body">
                                    <figure className="comment-avatar">
                                      <img
                                        src="assets/images/agents/3-100x100.png"
                                        alt="Commenter Avatar"
                                        width="90"
                                        height="90"
                                      />
                                    </figure>
                                    <div className="comment-content">
                                      <h4 className="comment-author">
                                        <a href="#">John Doe</a>
                                        <span className="comment-date">
                                          March 22, 2021 at 1:21 pm
                                        </span>
                                      </h4>
                                      <div className="ratings-container comment-rating">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: "60%" }}
                                          ></span>
                                          <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                      </div>
                                      <p>
                                        In fermentum et sollicitudin ac orci
                                        phasellus. A condimentum vitae sapien
                                        pellentesque habitant morbi tristique
                                        senectus et. In dictum non consectetur a
                                        erat. Nunc scelerisque viverra mauris in
                                        aliquam sem fringilla.
                                      </p>
                                      <div className="comment-action">
                                        <a
                                          href="#"
                                          className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-up"></i>
                                          Helpful (0)
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-down"></i>
                                          Unhelpful (1)
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-pane" id="helpful-positive">
                              <ul className="comments list-style-none">
                                <li className="comment">
                                  <div className="comment-body">
                                    <figure className="comment-avatar">
                                      <img
                                        src="assets/images/agents/1-100x100.png"
                                        alt="Commenter Avatar"
                                        width="90"
                                        height="90"
                                      />
                                    </figure>
                                    <div className="comment-content">
                                      <h4 className="comment-author">
                                        <a href="#">John Doe</a>
                                        <span className="comment-date">
                                          March 22, 2021 at 1:54 pm
                                        </span>
                                      </h4>
                                      <div className="ratings-container comment-rating">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: "60%" }}
                                          ></span>
                                          <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                      </div>
                                      <p>
                                        pellentesque habitant morbi tristique
                                        senectus et. In dictum non consectetur a
                                        erat. Nunc ultrices eros in cursus
                                        turpis massa tincidunt ante in nibh
                                        mauris cursus mattis. Cras ornare arcu
                                        dui vivamus arcu felis bibendum ut
                                        tristique.
                                      </p>
                                      <div className="comment-action">
                                        <a
                                          href="#"
                                          className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-up"></i>
                                          Helpful (1)
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-down"></i>
                                          Unhelpful (0)
                                        </a>
                                        <div className="review-image">
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-1.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="comment">
                                  <div className="comment-body">
                                    <figure className="comment-avatar">
                                      <img
                                        src="assets/images/agents/2-100x100.png"
                                        alt="Commenter Avatar"
                                        width="90"
                                        height="90"
                                      />
                                    </figure>
                                    <div className="comment-content">
                                      <h4 className="comment-author">
                                        <a href="#">John Doe</a>
                                        <span className="comment-date">
                                          March 22, 2021 at 1:52 pm
                                        </span>
                                      </h4>
                                      <div className="ratings-container comment-rating">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: "80%" }}
                                          ></span>
                                          <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                      </div>
                                      <p>
                                        Nullam a magna porttitor, dictum risus
                                        nec, faucibus sapien. Ultrices eros in
                                        cursus turpis massa tincidunt ante in
                                        nibh mauris cursus mattis. Cras ornare
                                        arcu dui vivamus arcu felis bibendum ut
                                        tristique.
                                      </p>
                                      <div className="comment-action">
                                        <a
                                          href="#"
                                          className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-up"></i>
                                          Helpful (1)
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-down"></i>
                                          Unhelpful (0)
                                        </a>
                                        <div className="review-image">
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-2.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-3.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-pane" id="helpful-negative">
                              <ul className="comments list-style-none">
                                <li className="comment">
                                  <div className="comment-body">
                                    <figure className="comment-avatar">
                                      <img
                                        src="assets/images/agents/3-100x100.png"
                                        alt="Commenter Avatar"
                                        width="90"
                                        height="90"
                                      />
                                    </figure>
                                    <div className="comment-content">
                                      <h4 className="comment-author">
                                        <a href="#">John Doe</a>
                                        <span className="comment-date">
                                          March 22, 2021 at 1:21 pm
                                        </span>
                                      </h4>
                                      <div className="ratings-container comment-rating">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: "60%" }}
                                          ></span>
                                          <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                      </div>
                                      <p>
                                        In fermentum et sollicitudin ac orci
                                        phasellus. A condimentum vitae sapien
                                        pellentesque habitant morbi tristique
                                        senectus et. In dictum non consectetur a
                                        erat. Nunc scelerisque viverra mauris in
                                        aliquam sem fringilla.
                                      </p>
                                      <div className="comment-action">
                                        <a
                                          href="#"
                                          className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-up"></i>
                                          Helpful (0)
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-down"></i>
                                          Unhelpful (1)
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-pane" id="highest-rating">
                              <ul className="comments list-style-none">
                                <li className="comment">
                                  <div className="comment-body">
                                    <figure className="comment-avatar">
                                      <img
                                        src="assets/images/agents/2-100x100.png"
                                        alt="Commenter Avatar"
                                        width="90"
                                        height="90"
                                      />
                                    </figure>
                                    <div className="comment-content">
                                      <h4 className="comment-author">
                                        <a href="#">John Doe</a>
                                        <span className="comment-date">
                                          March 22, 2021 at 1:52 pm
                                        </span>
                                      </h4>
                                      <div className="ratings-container comment-rating">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: "80%" }}
                                          ></span>
                                          <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                      </div>
                                      <p>
                                        Nullam a magna porttitor, dictum risus
                                        nec, faucibus sapien. Ultrices eros in
                                        cursus turpis massa tincidunt ante in
                                        nibh mauris cursus mattis. Cras ornare
                                        arcu dui vivamus arcu felis bibendum ut
                                        tristique.
                                      </p>
                                      <div className="comment-action">
                                        <a
                                          href="#"
                                          className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-up"></i>
                                          Helpful (1)
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-down"></i>
                                          Unhelpful (0)
                                        </a>
                                        <div className="review-image">
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-2.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-3.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-pane" id="lowest-rating">
                              <ul className="comments list-style-none">
                                <li className="comment">
                                  <div className="comment-body">
                                    <figure className="comment-avatar">
                                      <img
                                        src="assets/images/agents/1-100x100.png"
                                        alt="Commenter Avatar"
                                        width="90"
                                        height="90"
                                      />
                                    </figure>
                                    <div className="comment-content">
                                      <h4 className="comment-author">
                                        <a href="#">John Doe</a>
                                        <span className="comment-date">
                                          March 22, 2021 at 1:54 pm
                                        </span>
                                      </h4>
                                      <div className="ratings-container comment-rating">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: "60%" }}
                                          ></span>
                                          <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                      </div>
                                      <p>
                                        pellentesque habitant morbi tristique
                                        senectus et. In dictum non consectetur a
                                        erat. Nunc ultrices eros in cursus
                                        turpis massa tincidunt ante in nibh
                                        mauris cursus mattis. Cras ornare arcu
                                        dui vivamus arcu felis bibendum ut
                                        tristique.
                                      </p>
                                      <div className="comment-action">
                                        <a
                                          href="#"
                                          className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-up"></i>
                                          Helpful (1)
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                        >
                                          <i className="far fa-thumbs-down"></i>
                                          Unhelpful (0)
                                        </a>
                                        <div className="review-image">
                                          <a href="#">
                                            <figure>
                                              <img
                                                src="assets/images/products/default/review-img-3.jpg"
                                                width="60"
                                                height="60"
                                                alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              />
                                            </figure>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
                          Vendor Info
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
                                src="assets/images/products/vendor-banner.jpg"
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
                                    src="assets/images/products/vendor-logo.jpg"
                                    alt="Vendor Logo"
                                    width="80"
                                    height="80"
                                  />
                                </a>
                              </figure>
                              <div>
                                <div className="vendor-name">
                                  <a href="#">Jone Doe</a>
                                </div>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "90%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                  <a href="#" className="rating-reviews">
                                    (32 Reviews)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <ul className="vendor-info list-style-none pl-0">
                              <li className="store-name">
                                <label>Store Name:</label>
                                <span className="detail">OAIO Store</span>
                              </li>
                              <li className="store-address">
                                <label>Address:</label>
                                <span className="detail">
                                  Steven Street, El Carjon, CA 92020, United
                                  States (US)
                                </span>
                              </li>
                              <li className="store-phone">
                                <label>Phone:</label>
                                <a href="#tel:">1234567890</a>
                              </li>
                            </ul>
                            <a
                              href="vendor-dokan-store.html"
                              className="btn btn-dark btn-link btn-underline btn-icon-right"
                            >
                              Visit Store
                              <i className="w-icon-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="vendor-product-section">
                    <div className="title-link-wrapper mb-4">
                      <h4 className="title text-left">
                        More Products From This Vendor
                      </h4>
                      <a
                        href="#"
                        className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                      >
                        More Products<i className="w-icon-long-arrow-right"></i>
                      </a>
                    </div>
                    <div>
                      <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2">
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/1.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">3D Television</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (3 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$220.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/2-1.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                                <img
                                  src="assets/images/shop/2-2.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                              </a>
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
                              <div className="product-action-horizontal">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-cart w-icon-cart"
                                  title="SƏBƏTƏ ƏLAVƏ ET"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Alarm Clock With Lamp
                                </a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (10 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">
                                  <ins className="new-price">$30.00</ins>
                                  <del className="old-price">$60.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/3.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">Apple Laptop</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "80%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (5 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$1,000.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/4.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Attachable Charge Alarm
                                </a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "60%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (7 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$15.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/1.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">3D Television</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (3 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$220.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/2-1.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                                <img
                                  src="assets/images/shop/2-2.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                              </a>
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
                              <div className="product-action-horizontal">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-cart w-icon-cart"
                                  title="SƏBƏTƏ ƏLAVƏ ET"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Alarm Clock With Lamp
                                </a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (10 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">
                                  <ins className="new-price">$30.00</ins>
                                  <del className="old-price">$60.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/3.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">Apple Laptop</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "80%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (5 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$1,000.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/4.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Attachable Charge Alarm
                                </a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "60%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (7 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$15.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="related-product-section">
                    <div className="title-link-wrapper mb-4">
                      <h4 className="title">Related Products</h4>
                      <a
                        href="#"
                        className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                      >
                        More Products<i className="w-icon-long-arrow-right"></i>
                      </a>
                    </div>
                    <div className="container">
                      <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2">
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/1.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">3D Television</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (3 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$220.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/2-1.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                                <img
                                  src="assets/images/shop/2-2.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                              </a>
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
                              <div className="product-action-horizontal">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-cart w-icon-cart"
                                  title="SƏBƏTƏ ƏLAVƏ ET"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Alarm Clock With Lamp
                                </a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (10 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">
                                  <ins className="new-price">$30.00</ins>
                                  <del className="old-price">$60.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/3.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">Apple Laptop</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "80%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (5 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$1,000.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/4.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Attachable Charge Alarm
                                </a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "60%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (7 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$15.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/1.jpg"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">3D Television</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (3 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$220.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/2-1.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                                <img
                                  src="assets/images/shop/2-2.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                              </a>
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
                              <div className="product-action-horizontal">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-cart w-icon-cart"
                                  title="Add to cart"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Alarm Clock With Lamp
                                </a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (10 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">
                                  <ins className="new-price">$30.00</ins>
                                  <del className="old-price">$60.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/3.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                              </a>
                              <div className="product-action-horizontal">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-cart w-icon-cart"
                                  title="Add to cart"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">Apple Laptop</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "80%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (5 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$1,000.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src="assets/images/shop/4.jpg"
                                  alt="Product"
                                  width="300"
                                  height="338"
                                />
                              </a>
                              <div className="product-action-horizontal">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-cart w-icon-cart"
                                  title="Add to cart"
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
                                  Electronics
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Attachable Charge Alarm
                                </a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "60%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  (7 reviews)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">$15.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                            More Products
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
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/13.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Smart Watch</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">$80.00 </div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/14.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Sky Medical Facility</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">$58.00</div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/15.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Black Stunt Motor</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">$374.00</div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/13.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Smart Watch</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">
                                      $80.00 - $90.00
                                    </div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/14.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Sky Medical Facility</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">$58.00</div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/15.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Black Stunt Motor</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">$374.00</div>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-col swiper-slide right-scroll">
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/16.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Skate Pan</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">$278.00</div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/17.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Modern Cooker</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">$324.00</div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src="assets/images/shop/18.jpg"
                                        alt="Product"
                                        width="100"
                                        height="113"
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">CT Machine</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                      </div>
                                    </div>
                                    <div className="product-price">$236.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button className="swiper-button-next"></button>
                            <button className="swiper-button-prev"></button>
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
    </>
  );
}
