import React, { useEffect, useState } from "react";
import { cartByUserID } from "../../../../services/card/cartByUserID";
import { removeFromCart } from "../../../../services/card/removeFromCart";
import { partners } from "../../../../services/partners";

export default function Card() {
  const [cartByUserIDItem, setCartByUserIDItem] = React.useState([]);
  const [cartCount, setCartCountItem] = React.useState(0);
  const [allCardPrice, setAllCardPrice] = React.useState(0);
  useEffect(() => {
    let cardPrice = 0;
    let userId = localStorage.getItem("userId");
    if (userId) {
      cartByUserID(userId).then((items) => {
        setCartByUserIDItem(items.data.product_version);
        setCartCountItem(items.data.product_version.length);
        items.data.product_version.map(
          (c) => (cardPrice += Number(c.final_price))
        );
        setAllCardPrice(cardPrice);
      });
    }
  }, []);
  const deleteCardProduct = ({ quantity: quantity, productId: productId }) => {
    let data = {
      user: Number(localStorage.getItem("userId")),
      product: Number(productId),
    };
    removeFromCart(data)
      .then((e) => {
        let cardPrice = 0;
        let userId = localStorage.getItem("userId");
        cartByUserID(userId).then((items) => {
          setCartByUserIDItem(items.data.product_version);
          setCartCountItem(items.data.product_version.length);
          items.data.product_version.map(
            (c) => (cardPrice += Number(c.final_price))
          );
          setAllCardPrice(cardPrice);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const [partnersTitle, partnersData] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("partnersTitle"))) {
      partnersData(JSON.parse(localStorage.getItem("partnersTitle")));
    } else {
      partners().then((items) => {
        localStorage.setItem("partnersTitle", JSON.stringify(items.data));
        JSON.parse(localStorage.getItem("partnersTitle"))
          ? partnersData(JSON.parse(localStorage.getItem("partnersTitle")))
          : [];
      });
    }
  }, []);
  return (
    <>
      <div className="page-wrapper">
        <main className="main cart">
          <section className="grey-section pt-10" style={{ display: "none" }}>
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
          <nav className="breadcrumb-nav">
            <div className="container">
              <ul className="breadcrumb shop-breadcrumb bb-no">
                <li className="active">
                  <a href="/card">Alış-veriş kartı</a>
                </li>
                <li>
                  <a href="/checkout">Yoxla</a>
                </li>
                <li>
                  <a href="/order">Sifariş tamamlandı</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="page-content">
            <div className="container">
              <div className="row gutter-lg mb-10">
                <div className="col-lg-8 pr-lg-4 mb-6" style={{marginLeft: "25%"}}>
                  <table className="shop-table cart-table">
                    <thead>
                      <tr>
                        <th className="product-name">
                          <span>Məhsul</span>
                        </th>
                        <th></th>
                        <th className="product-price">
                          <span>Qiymət</span>
                        </th>
                        <th className="product-quantity">
                          <span>Kəmiyyət</span>
                        </th>
                        <th className="product-subtotal">
                          <span>Ara cəmi</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartByUserIDItem.map((e) => (
                        <tr>
                          <td className="product-thumbnail">
                            <div className="p-relative">
                              <a href="product-default.html">
                                <figure>
                                  <img
                                    src={`http://34.125.5.25${e.product.main_image}`}
                                    alt="product"
                                    width="300"
                                    height="338"
                                  />
                                </figure>
                              </a>
                              <button
                                type="submit"
                                className="btn btn-close"
                                onClick={() => {
                                  deleteCardProduct({
                                    quantity: e.quantity,
                                    productId: e.id,
                                  });
                                }}
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          </td>
                          <td className="product-name">
                            <a href="product-default.html">{e.product.title}</a>
                          </td>
                          <td className="product-price">
                            <span className="amount">₼ {e.product.price}</span>
                          </td>
                          <td className="product-quantity">
                            <div className="input-group">
                              <input
                                className="quantity form-control"
                                type="number"
                                min="1"
                                max="100000"
                              />
                              <button className="quantity-plus w-icon-plus"></button>
                              <button className="quantity-minus w-icon-minus"></button>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount"> ₼ {allCardPrice}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="cart-action mb-6">
                    <a
                      href="/shop"
                      className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"
                    >
                      <i className="w-icon-long-arrow-left"></i>ALIŞVERİŞƏ DAVAM
                      EDİN
                    </a>
                    {/*<button type="submit" className="btn btn-rounded btn-default btn-clear"*/}
                    {/*        name="clear_cart" value="Clear Cart">Clear Cart*/}
                    {/*</button>*/}
                    {/*<button type="submit" className="btn btn-rounded btn-update disabled"*/}
                    {/*        name="update_cart" value="Update Cart">Update Cart*/}
                    {/*</button>*/}
                  </div>
                </div>
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
