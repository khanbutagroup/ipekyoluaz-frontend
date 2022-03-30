import React, { useEffect, useState } from "react";

import { getUserDataByToken } from "../../../../services/auth/getUserDataByToken";
import { getUserWishlist } from "../../../../services/wishlist/GetUserWishlist";
import { removeFromWishlist } from "../../../../services/wishlist/RemoveFromWishlist";

export default function MainForWishlist() {
  const [allGetUserDataItemsTitle, allGetUserDataItemsData] = useState([]);
  const [userId, userIdData] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("username");
    if (token) {
      getUserDataByToken().then((items) => {
        if (items.data.id) {
          console.log(items.data);
          localStorage.setItem("UserId", items.data.id);
          userIdData(items.data.id);
          getUserWishlist(items.data.id).then((itemsData) => {
            console.log(itemsData.data, 'wishlist data');
            if (itemsData.data.product) {
              allGetUserDataItemsData(itemsData.data.product);
            }
          });
        }
      });
    }
  }, []);

  const deleteWishlist = (id) => {
    let data = { user: userId, product: id };
    removeFromWishlist(data)
      .then((e) => {
        if (e) {
          getUserWishlist(userId).then((itemsData) => {
            if (itemsData.data.product) {
              allGetUserDataItemsData(itemsData.data.product);
            }
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <main className="main wishlist-page">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">Bəyəndiklərim</h1>
          </div>
        </div>
        <nav className="breadcrumb-nav mb-10">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="/">Ana Səhifə</a>
              </li>
              <li>Bəyəndiklərim</li>
            </ul>
          </div>
        </nav>
        <div className="page-content">
          <div className="container">
            <h3 className="wishlist-title">Bəyəndiklərim</h3>
            <table className="shop-table wishlist-table">
              <thead>
                <tr>
                  <th className="product-name">
                    <span>Məhsul</span>
                  </th>
                  <th></th>
                  <th className="product-price">
                    <span>Qiymət</span>
                  </th>
                  <th></th>
                  <th className="wishlist-action">Tədbirlər</th>
                </tr>
              </thead>
              <tbody>
                {allGetUserDataItemsTitle.map((e) => (
                  <tr>
                    <td className="product-thumbnail">
                      <div className="p-relative">
                        <a href="product-default.html">
                          <figure>
                            <img
                              src={`https://api.ipekyolu.az${e.main_image}`}
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
                            deleteWishlist(e.id);
                          }}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </td>
                    <td className="product-name">
                      <a href="product-default.html">{e.title}</a>
                    </td>
                    <td
                      className="product-price"
                      style={{ paddingLeft: "80px" }}
                    >
                      <ins className="new-price ">₼ {e.price}</ins>
                    </td>
                    <td className="product-stock-status">
                      <span className="wishlist-in-stock"></span>
                    </td>
                    <td className="wishlist-action">
                      <div className="d-lg-flex">
                        <a
                          href="#"
                          className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
                        >
                          TEZ BAXIŞ
                        </a>
                        <a
                          href="#"
                          className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart"
                        >
                          SƏBƏTƏ ƏLAVƏ EDİN
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
