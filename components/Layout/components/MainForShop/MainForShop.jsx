import React, { useEffect, useState } from "react";
import { categories } from "../../../../services/categories";
import { subCategories } from "../../../../services/subCategories";
import { subSubCategories } from "../../../../services/subSubCategories";
import { filtersBySubsub } from "../../../../services/filtersBySubsub";
import { allProducts } from "../../../../services/products/allProducts";
import { subByCategory } from "../../../../services/subByCategory";
import { subBySubsub } from "../../../../services/subBySubsub";
import { productFilter } from "../../../../services/productFilter";
import { productsPost } from "../../../../services/productsPost";
import { productById } from "../../../../services/products/productById";
import { categoryBanner } from "../../../../services/categoryBanner";
import parse from "html-react-parser";
import { filterPrices } from "../../../../services/filterPrices";
import { MobileFooter } from "../MobileFooter/MobileFooter";
import { useRouter } from "next/router";
import axios from "axios";

export default function MainForShop(props) {
  const [optionsTitle, optionsData] = useState([]);
  const [displayedBenefits, displayedBenefitsData] = useState([]);
  const [subSubCategoriesTitle, subSubCategoriesData] = useState([]);
  const [subCategoriesTitle, subCategoriesData] = useState([]);
  const [filtersBySubsubTitle, filtersBySubsubData] = useState([]);
  const [getCategory, setCategory] = useState([]);

  let dataClass = "null";
  useEffect(() => {
    let mounted = true;
    categories().then((items) => {
      if (mounted) {
        optionsData(items.data);
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    let mounted = true;
    subCategories().then((items) => {
      if (mounted) {
        displayedBenefitsData(items.data);
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    let mounted = true;
    subSubCategories().then((items) => {
      if (mounted) {
        subSubCategoriesData(items.data);
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    let mounted = true;
    subCategories().then((items) => {
      if (mounted) {
        subCategoriesData(items.data);
      }
    });
    return () => (mounted = false);
  }, []);
  const [allProductsTitle, allProductsData] = useState([]);
  const [paginationPrev, paginationPrevData] = useState("");
  const [paginationNext, paginationNextData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [page, setPage] = useState(null);
  const [sizeForPage, setsizeForPage] = useState(null);
  const [count, setCount] = useState([]);

  const [sizeAllData, setSizeAllData] = useState([]);
  useEffect(() => {
    let mounted = true;
    allProducts(page, sizeForPage).then((items) => {
      if (mounted) {
        let sizeData = [];
        for (let i = 0; i <= items.data.count; i++) {
          if (i % 12 == 0) {
            sizeData.push({ size: 12 });
          }
        }
        setSizeAllData(sizeData);
        setCount(items.data.count);
        allProductsData(items.data.results);
        paginationNextData(items.data.next);
      }
    });
    return () => (mounted = false);
  }, []);

  const pageChangeNext = () => {
    axios.get(paginationNext).then((res) => {
      allProductsData(res.data.results);
      paginationNextData(res.data.next);
      paginationPrevData(res.data.previous);
      setCurrentPage(currentPage + 1);
    });
  };

  const pageChangePrev = () => {
    axios.get(paginationPrev).then((res) => {
      allProductsData(res.data.results);
      paginationPrevData(res.data.previous);
      setCurrentPage(currentPage - 1);
    });
  };

  const [categoryBannerData, setCategoryBanner] = useState([]);
  useEffect(() => {
    categoryBanner().then((items) => {
      setCategoryBanner([items.data]);
    });
  }, []);
  const [filterPricesData, setFilterPrices] = useState([]);
  useEffect(() => {
    filterPrices().then((items) => {
      console.log(items.data);
      setFilterPrices([...items.data]);
    });
  }, []);

  const [showMe, setShowMe] = useState(true);
  function toggle(e) {
    if (e === "grid") {
      setShowMe(true);
    } else {
      setShowMe(false);
    }
  }
  function testTitle(e) {
    if (dataClass) {
      console.log(e);
      dataClass = "dd";
    } else {
      console.log(e);
      dataClass = "dd";
    }
  }
  function subId(e) {
    filtersBySubsub(e.id).then((items) => {
      filtersBySubsubData(items.data);
    });
  }

  let endData = [];
  let price = [];
  const defaultData = [
    { id: 1, name: "apple", isChecked: false },
    { id: 2, name: "banana", isChecked: false },
    { id: 3, name: "mango", isChecked: false },
    { id: 4, name: "grape", isChecked: false },
    { id: 5, name: "carrot", isChecked: false },
  ];
  // const [data, setData] = useState(defaultData);
  //
  // function handleChange(e) {
  //     const value = e.target.value;
  //     const modifiedData = [...filtersBySubsubTitle];
  //     modifiedData.map((item) => {
  //         item.isChecked = item.id === +value;
  //         return item;
  //     });
  //     filtersBySubsubData(modifiedData);
  // }

  const router = useRouter();
  const { query } = router;
  const [checkedData, setCheckedData] = useState(false);
  const [checkedData1, setCheckedData1] = useState(false);
  const [checkedData2, setCheckedData2] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subSubCategory, setSubSubCategory] = useState("");
  const searchAPI = "https://api.ipekyolu.az/api/product-search/";

  useEffect(() => {
    if (query.q && query.q !== "") {
      axios.post(searchAPI, { title: query.q }).then((res) => {
        allProductsData(res.data.results);
      });
    }

    if (query.main_category && query.sub_category && query.sub_sub_category) {
      setMainCategory(query.main_category);
      setSubCategory(query.sub_category);
      setSubSubCategory(query.sub_sub_category);
    }
  }, [query]);

  const handleChangeSubCategories = (e, id, title) => {
    let data = { sub_category: title };
    if (checkedData1 == false) {
      setCheckedData1(true);
      productFilter(data).then((e) => {
        let sizeData = [];
        for (let i = 0; i <= e.data.count; i++) {
          if (i % 12 == 0) {
            sizeData.push({ size: 12 });
          }
        }
        setSizeAllData(sizeData);
        setCount(e.data.count);
        allProductsData(e.data.results);
      });
      subBySubsub(id).then((item) => {
        subCategoriesData(item.data);
      });
      let value = null;
      if (e == "CleanAll") {
        value = null;
      } else {
        value = e.target.value;
      }
      const modifiedData = [...optionsTitle];
      modifiedData.map((item) => {
        item.isChecked = item.id === +value;
        return item;
      });
      optionsData(modifiedData);

      console.log(modifiedData);
    } else {
      setCheckedData1(false);
      productFilter({}).then((e) => {
        let sizeData = [];
        for (let i = 0; i <= e.data.count; i++) {
          if (i % 12 == 0) {
            sizeData.push({ size: 12 });
          }
        }
        setSizeAllData(sizeData);
        setCount(e.data.count);
        allProductsData(e.data.results);
      });
      subBySubsub().then((item) => {
        subCategoriesData(item.data);
      });
      let value = null;
      if (e == "CleanAll") {
        value = null;
      } else {
        value = e.target.value;
      }
      const modifiedData = [...optionsTitle];
      modifiedData.map((item) => {
        item.isChecked = item.id === +value;
        return item;
      });
      optionsData(modifiedData);
    }
  };

  const handleChangeAllCategories = (e, id, title) => {
    let data = { category: title };
    if (checkedData2 == false) {
      setCheckedData2(true);
      productFilter(data).then((e) => {
        let sizeData = [];
        for (let i = 0; i <= e.data.count; i++) {
          if (i % 12 == 0) {
            sizeData.push({ size: 12 });
          }
        }
        setSizeAllData(sizeData);
        setCount(e.data.count);
        allProductsData(e.data.results);
      });
      subByCategory(id).then((item) => {
        subCategoriesData(item.data);
      });
      let value = null;
      if (e == "CleanAll") {
        value = null;
      } else {
        value = e.target.value;
      }
      const modifiedData = [...optionsTitle];
      modifiedData.map((item) => {
        item.isChecked = item.id === +value;
        return item;
      });
      optionsData(modifiedData);

      console.log(modifiedData);
    } else {
      setCheckedData(false);
      productFilter({}).then((e) => {
        let sizeData = [];
        for (let i = 0; i <= e.data.count; i++) {
          if (i % 12 == 0) {
            sizeData.push({ size: 12 });
          }
        }
        setSizeAllData(sizeData);
        setCount(e.data.count);
        allProductsData(e.data.results);
      });
      subCategories().then((item) => {
        subCategoriesData(item.data);
      });
      let value = null;
      if (e == "CleanAll") {
        value = null;
      } else {
        value = e.target.value;
      }
      const modifiedData = [...optionsTitle];
      modifiedData.map((item) => {
        item.isChecked = item.id === +value;
        return item;
      });
      optionsData(modifiedData);
    }
  };

  function handleChangeSubSubCategories(e, id, title) {
    let data = { sub_sub_category: title };
    if (checkedData == false) {
      setCheckedData(false);
      productFilter(data).then((e) => {
        let sizeData = [];
        for (let i = 0; i <= e.data.count; i++) {
          if (i % 12 == 0) {
            sizeData.push({ size: 12 });
          }
        }
        setSizeAllData(sizeData);
        setCount(e.data.count);
        allProductsData(e.data.results);
      });
    } else {
      setCheckedData(false);
      productFilter({}).then((e) => {
        let sizeData = [];
        for (let i = 0; i <= e.data.count; i++) {
          if (i % 12 == 0) {
            sizeData.push({ size: 12 });
          }
        }
        setSizeAllData(sizeData);
        setCount(e.data.count);
        allProductsData(e.data.results);
      });
    }

    // const value = e.target.value;
    // const modifiedData = [...optionsTitle];
    // modifiedData.map((item) => {
    //     item.isChecked = item.id === +value;
    //     return item;
    // });
    // optionsData(modifiedData);
  }
  const handleChangeCleanAll = () => {
    handleChangeAllCategories("CleanAll", null, null);
    handleChangeSubCategories("CleanAll", null, null);
  };

  const [minPrice, setMinPrice] = useState([]);
  const [maxPrice, setMaxPrice] = useState([]);
  const sentPrice = (e) => {
    price.push(e);
    let data = { price: price };
    productFilter(data).then((e) => {
      let sizeData = [];
      for (let i = 0; i <= e.data.count; i++) {
        if (i % 12 == 0) {
          sizeData.push({ size: 12 });
        }
      }
      setSizeAllData(sizeData);
      setCount(e.data.count);
      allProductsData(e.data.results);
    });
  };
  const setAllPriceData = () => {
    price.push([Number(minPrice), Number(maxPrice)]);
    let data = { price: price };
    productFilter(data).then((e) => {
      let sizeData = [];
      for (let i = 0; i <= e.data.count; i++) {
        if (i % 12 == 0) {
          sizeData.push({ size: 12 });
        }
      }
      setSizeAllData(sizeData);
      setCount(e.data.count);
      allProductsData(e.data.results);
    });
  };
  const setPageFunc = (p, s) => {
    allProducts(p, s).then((items) => {
      allProductsData(items.data.results);
      paginationNextData(items.data.next);
      paginationPrevData(items.data.previous);
      setCurrentPage(p);
    });
  };
  const [productByIdItem, productByIdData] = useState([]);
  const [productByIdImages, productByIdImagesData] = useState([]);
  let test = "product product-single product-popup";
  const setProductByIdFunc = (id) => {
    productById(id)
      .then((items) => {
        console.log(items);
        productByIdData([items.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setPartnersPost = (sortByArray) => {
    let data = { [sortByArray]: [sortByArray] };
    productsPost(data).then((items) => {
      allProductsData(items.data.results);
    });
  };

  const [urlSubSubCategoriaId, setUrlSubSubCategoriaId] = useState(null);
  const [urlSubCategoriaId, setUrlSubCategoriaId] = useState(null);
  const [urlCategoriaId, setUrlCategoriaId] = useState(null);
  useEffect(() => {
    if (
      window.location.href.split("/")[4] &&
      window.location.href.split("?")[1] == "mdk"
    ) {
      setUrlCategoriaId(window.location.href.split("/")[4].split("?")[0]);
    } else if (
      window.location.href.split("/")[4] &&
      window.location.href.split("?")[1] == "card"
    ) {
      setUrlSubCategoriaId(window.location.href.split("/")[4].split("?")[0]);
      optionsTitle.map((e, i) => {
        e.sub_categories.map((k) =>
          k.id == urlSubCategoriaId ? setUrlCategoriaId(e.id) : null
        );
      });
    } else {
      console.log("window.location.href.split(" / ")");

      // subCategoriesTitle.map((e, i) => {
      //   e.sub_sub_categories.map((k) =>
      //   k.map((l) =>
      //     l.id == urlSubSubCategoriaId ? setUrlCategoriaId(e.id) : null
      //   ))
      // });

      subCategoriesTitle.map((item) => {
        console.log(item, "item111");
        setCategory(item?.sub_sub_categories);

        // setCategory(item);
        // item.id == urlSubSubCategoriaId ? setUrlCategoriaId(item.id) : null;
      });

      // getCategory.map((event) => {
      //   event.forEach((element) => {
      //     console.log(element,"dsajhdkjhsd");
      //     // element.id == urlSubSubCategoriaId ? setUrlCategoriaId(element.id) : null;
      //   });
      // });

      optionsTitle.map((e, i) => {
        e.sub_categories.map((k) =>
          k.id == urlSubCategoriaId ? setUrlCategoriaId(e.id) : null
        );
      });
      setUrlSubSubCategoriaId(window.location.href.split("/")[4]);
    }
  }, null);

  return (
    <>
      <div className="page-wrapper">
        <main className="main">
          <nav className="breadcrumb-nav">
            <style jsx>
              {`
                .right-scroll {
                  overflow-y: auto;
                  height: 400px;
                  overflow-x: hidden;
                }
                .product-action .btn-product:hover {
                  background-color: #ed711b !important;
                  color: #fff !important;
                  border-color: #ed711b !important;
                }
              `}
            </style>
            <div className="container">
              <ul className="breadcrumb bb-no">
                <li>
                  <a href="/">Ana S??hif??</a>
                </li>
                <li>
                  <a href="#">Ma??aza</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="page-content">
            <div className="container">
              <div style={{ height: "250px" }}>
                {categoryBannerData.map((e) => (
                  <div
                    className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
                    style={{
                      backgroundImage:
                        "url(" + "https://api.ipekyolu.az" + e.image + ")",
                      backgroundColor: "#FFC74E",
                    }}
                  >
                    <div className="banner-content" style={{ zIndex: "0" }}>
                      <h4 className="banner-subtitle font-weight-bold"></h4>
                      <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal"></h3>
                      <a
                        href={e.button_link}
                        className="btn btn-dark btn-rounded btn-icon-right"
                      >
                        {e.button_text}
                        <i className="w-icon-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="shop-content row gutter-lg mb-10">
                <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                  <div className="sidebar-overlay"></div>
                  <a className="sidebar-close" href="#">
                    <i className="close-icon"></i>
                  </a>
                  <div className="sidebar-content scrollable">
                    <div className="sticky-sidebar">
                      <div className="filter-actions">
                        <label>Filter :</label>
                        <a
                          href="#"
                          className="btn btn-dark btn-link filter-clean"
                          onClick={() => handleChangeCleanAll()}
                        >
                          Ham??s??n?? t??mizl??yin
                        </a>
                      </div>
                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <span>B??t??n Kateqoriyalar</span>
                        </h3>
                        <ul
                          className="widget-body filter-items item-check mt-1 right-scroll"
                          style={{
                            overflowY: "auto",
                            height: " 200px",
                            overflowX: "hidden",
                          }}
                        >
                          {optionsTitle.map(
                            (item, index) => (
                              console.log("item.id", mainCategory),
                              (
                                <div
                                  onChange={(e) =>
                                    handleChangeAllCategories(
                                      e,
                                      item.id,
                                      item.title
                                    )
                                  }
                                >
                                  <div key={item.id} className="mt-2">
                                    <input
                                      type="checkbox"
                                      value={item.id}
                                      style={{ width: " 20px", height: "24px" }}
                                      checked={mainCategory == item.id}
                                      id={`options` + item.id}
                                    />
                                    <label
                                      htmlFor={`options` + item.id}
                                      className="ml-2"
                                      style={{
                                        position: "relative",
                                        top: "-5px",
                                        cursor: "pointer",
                                      }}
                                    >
                                      {item.title}
                                    </label>
                                    <br />
                                  </div>
                                </div>
                              )
                            )
                          )}
                        </ul>
                      </div>
                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <span>Alt Kateqoriyalar</span>
                        </h3>
                        <ul
                          className="widget-body filter-items item-check mt-1 right-scroll"
                          style={{
                            overflowY: "auto",
                            height: " 200px",
                            overflowX: "hidden",
                          }}
                        >
                          {subCategoriesTitle?.map((item, index) => (
                            <div
                              onChange={(e) =>
                                handleChangeSubCategories(
                                  e,
                                  item?.id,
                                  item?.title
                                )
                              }
                            >
                              <div key={item.id} className="mt-2">
                                <input
                                  type="checkbox"
                                  value={item?.id}
                                  style={{ width: " 20px", height: "24px" }}
                                  checked={subCategory == item?.id}
                                  id={`sub` + item?.id}
                                />
                                <label
                                  htmlFor={`sub` + item?.id}
                                  className="ml-2"
                                  style={{
                                    position: "relative",
                                    top: "-5px",
                                    cursor: "pointer",
                                  }}
                                >
                                  {item.title}
                                </label>
                                <br />
                              </div>
                            </div>
                          ))}
                        </ul>
                      </div>
                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <span>Sub Kateqoriyalar</span>
                        </h3>
                        <ul
                          className="widget-body filter-items item-check mt-1 right-scroll"
                          style={{
                            overflowY: "auto",
                            height: " 200px",
                            overflowX: "hidden",
                          }}
                        >
                          {subSubCategoriesTitle?.map((item, index) => (
                            <div
                              onChange={(e) =>
                                handleChangeSubSubCategories(
                                  e,
                                  item?.id,
                                  item?.title
                                )
                              }
                            >
                              <div key={item?.id} className="mt-2">
                                <input
                                  type="checkbox"
                                  value={
                                    urlSubSubCategoriaId
                                      ? urlSubSubCategoriaId
                                      : item.id
                                  }
                                  style={{ width: " 20px", height: "24px" }}
                                  checked={subSubCategory == item?.id}
                                  id={`subSub` + item?.id}
                                />
                                <label
                                  htmlFor={`subSub` + item?.id}
                                  className="ml-2"
                                  style={{
                                    position: "relative",
                                    top: "-5px",
                                    cursor: "pointer",
                                  }}
                                >
                                  {item.title}
                                </label>
                                <br />
                              </div>
                            </div>
                          ))}
                        </ul>
                      </div>
                      {filtersBySubsubTitle?.map((e) => (
                        <div className="widget widget-collapsible">
                          <h3 className="widget-title">
                            <span>{e?.title}</span>
                          </h3>
                          <ul className="widget-body filter-items item-check mt-1"></ul>
                        </div>
                      ))}
                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <span>Qiym??t</span>
                        </h3>
                        <div className="widget-body">
                          <ul
                            className="filter-items search-ul"
                            style={{
                              overflowY: "auto",
                              height: " 200px",
                              overflowX: "hidden",
                            }}
                          >
                            {filterPricesData?.map((e) => (
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  onClick={() => sentPrice([e[0], e[1]])}
                                >
                                  ???{e[0]} - ???{e[1]}
                                </a>
                              </li>
                            ))}
                          </ul>
                          <form className="price-range">
                            <input
                              type="number"
                              name="min_price"
                              onChange={(e) => setMinPrice(e?.target?.value)}
                              className="min_price text-center"
                              placeholder="???min"
                            />
                            <span className="delimiter">-</span>
                            <input
                              type="number"
                              name="max_price"
                              onChange={(e) => setMaxPrice(e?.target?.value)}
                              className="max_price text-center"
                              placeholder="???max"
                            />
                            <a
                              href="javascript:void(0)"
                              className="btn btn-primary btn-rounded"
                              onClick={() => setAllPriceData()}
                            >
                              G??nd??r
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                <div className="main-content">
                  <nav className="toolbox sticky-toolbox sticky-content fix-top">
                    <div className="toolbox-left">
                      <a
                        href="#"
                        className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle
                                        btn-icon-left d-block d-lg-none"
                      >
                        <i className="w-icon-category"></i>
                        <span>Filters</span>
                      </a>
                      <div className="toolbox-item toolbox-sort select-box text-dark">
                        <label>S??rala :</label>
                        <select
                          name="orderby"
                          className="form-control"
                          onClick={(e) => setPartnersPost(e?.target?.value)}
                        >
                          <option value="az">A-Z</option>
                          <option value="za">Z-A</option>
                          <option value="cheap">Ucuz-Baha</option>
                          <option value="expensive">Baha-Ucuz</option>
                        </select>
                      </div>
                    </div>
                    <div className="toolbox-right">
                      <div className="toolbox-item toolbox-show select-box">
                        <select
                          name="count"
                          className="form-control"
                          onClick={(e) => setPageFunc(1, e?.target?.value)}
                        >
                          <option value="9">Show 9</option>
                          <option value="12" selected="selected">
                            Show 12
                          </option>
                          <option value="24">Show 24</option>
                          <option value="36">Show 36</option>
                        </select>
                      </div>
                      <div className="toolbox-item toolbox-layout">
                        <a
                          onClick={() => toggle("grid")}
                          className={`icon-mode-grid btn-layout  ${
                            showMe ? "active" : ""
                          }`}
                        >
                          <i className="w-icon-grid"></i>
                        </a>
                        <a
                          onClick={() => toggle("list")}
                          className={`icon-mode-list btn-layout  ${
                            showMe ? "" : "active"
                          }`}
                        >
                          <i className="w-icon-list"></i>
                        </a>
                      </div>
                    </div>
                  </nav>

                  <div
                    className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2"
                    style={{ display: showMe ? " " : "none" }}
                  >
                    {allProductsTitle.length > 0 ? (
                      allProductsTitle?.map((e) => (
                        <div className="product-wrap">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href={`/${e?.id}`}>
                                <img
                                  src={e?.main_image}
                                  alt="Product"
                                  width="300"
                                  height="338"
                                  style={{ maxHeight: "100px !important" }}
                                />
                              </a>
                              <div className="product-action-horizontal">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-cart w-icon-cart"
                                  title="S??b??t?? ??lav?? Et"
                                ></a>
                                <a
                                  href="#"
                                  className="btn-product-icon btn-wishlist w-icon-heart"
                                  title="B??y??ndikl??rim"
                                ></a>
                                <a
                                  href="#"
                                  className="btn-product-icon btn-compare w-icon-compare"
                                  title="M??qayis??"
                                ></a>
                                <a
                                  href="#"
                                  className="btn-product-icon btn-quickview w-icon-search"
                                  onClick={() => {
                                    setProductByIdFunc(e?.id);
                                  }}
                                  title="C??ld Bax????"
                                ></a>
                              </div>
                            </figure>
                            <div className="product-details">
                              <div className="product-cat">
                                <a href="shop-banner-sidebar.html">
                                  {e?.sub_sub_category?.title}
                                </a>
                              </div>
                              <h3 className="product-name">
                                <a href="product-default.html">{e?.title}</a>
                              </h3>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: `${18 * e?.rating + "%"}` }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a
                                  href="product-default.html"
                                  className="rating-reviews"
                                >
                                  ({e?.rating}
                                  Bax????)
                                </a>
                              </div>
                              <div className="product-pa-wrapper">
                                <div className="product-price">
                                  ??? {e?.price}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h3 style={{ textAlign: "center", marginTop: "10px" }}>
                        M??hsul tap??lmad??
                      </h3>
                    )}
                  </div>

                  <div
                    className="product-wrapper row cols-xl-1 cols-sm-1 cols-xs-1 cols-1"
                    style={{ display: showMe ? "none" : " " }}
                  >
                    {allProductsTitle.length > 0 ? (
                      allProductsTitle?.map((e) => (
                        <div className="product product-list">
                          <figure className="product-media">
                            <a href={`/${e.id}`}>
                              <img
                                src={`https://api.ipekyolu.az${e?.images[0]}`}
                                alt="Product"
                                width="300"
                                height="338"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="C??ld Bax????"
                              ></a>
                            </div>
                            {/*<div className="product-countdown-container" style={{height: '35px'}}>*/}
                            {/*    <div className="product-countdown countdown-compact" data-until="2021, 9, 9"*/}
                            {/*         data-format="DHMS" data-compact="false"*/}
                            {/*         style={{fontSize: '20px'}}*/}
                            {/*         data-labels-short="Days, Hours, Mins, Secs">*/}
                            {/*        00:00:00:00*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                          </figure>
                          <div className="product-details">
                            <div className="product-cat">
                              <a href="shop-banner-sidebar.html">
                                sub_sub_category
                              </a>
                            </div>
                            <h4 className="product-name">
                              <a href="product-default.html">{e.title}</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: `${18 * e.rating + "%"}` }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                ({e.rating}
                                Bax????)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">{e.price}???</ins>
                              {/*<del className="old-price">$60.00</del>*/}
                            </div>
                            <div className="product-desc">
                              <div className="product-short-desc">
                                <ul className="list-type-check list-style-none">
                                  <li>{e.short_desc1}</li>
                                  <li>{e.short_desc2}</li>
                                  <li>{e.short_desc3}</li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-action">
                              <a
                                href="#"
                                className="btn-product btn-cart"
                                title="S??b??t?? ??lav?? et"
                              >
                                <i className="w-icon-cart"></i> S??b??t?? ??lav?? et
                              </a>
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="B??y??ndikl??rim"
                              ></a>
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="M??qayis??"
                              ></a>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>Not found</p>
                    )}
                  </div>

                  <div className="toolbox toolbox-pagination justify-content-between">
                    {/*<p className="showing-info mb-2 mb-sm-0">*/}
                    {/*    Showing<span>1-12 of 60</span>Products*/}
                    {/*</p>*/}
                    <ul className="pagination">
                      <li className="prev disabled">
                        {paginationPrev && (
                          <a
                            onClick={() => pageChangePrev()}
                            href="#"
                            aria-label="Previous"
                            tabIndex="-1"
                            aria-disabled="true"
                          >
                            <i className="w-icon-long-arrow-left"></i>??vv??lki
                          </a>
                        )}
                      </li>
                      {sizeAllData.map((e, i) => (
                        <li
                          className={`page-item ${
                            currentPage === i + 1 && "active"
                          }`}
                        >
                          <a
                            className="page-link"
                            href="#"
                            onClick={() => setPageFunc(i + 1, e.size)}
                          >
                            {i + 1}
                          </a>
                        </li>
                      ))}
                      <li className="next">
                        {paginationNext && (
                          <a
                            onClick={() => pageChangeNext()}
                            href="#"
                            aria-label="Next"
                          >
                            Sonrak??<i className="w-icon-long-arrow-right"></i>
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <MobileFooter />
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
