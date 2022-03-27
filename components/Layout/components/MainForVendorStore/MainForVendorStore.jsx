import React, {useEffect, useState} from "react";
import {categories} from "../../../../services/categories";
import {subCategories} from "../../../../services/subCategories";
import {subSubCategories} from "../../../../services/subSubCategories";
import {filtersBySubsub} from "../../../../services/filtersBySubsub";
import {allProducts} from "../../../../services/products/allProducts";
import {subByCategory} from "../../../../services/subByCategory";
import {subBySubsub} from "../../../../services/subBySubsub";
import {productsPost} from "../../../../services/productsPost";
import {productByUser} from "../../../../services/products/productByUser";
import {productById} from "../../../../services/products/productById";
import {productByUserGet} from "../../../../services/products/productByUserGet";

export default function MainForVendorStore(){
    const [optionsTitle, optionsData] = useState([]);
    const [displayedBenefits, displayedBenefitsData] = useState([]);
    const [subSubCategoriesTitle, subSubCategoriesData] = useState([]);
    const [subCategoriesTitle, subCategoriesData] = useState([]);
    const [filtersBySubsubTitle, filtersBySubsubData] = useState([]);
    let dataClass = "null"
    useEffect(() => {
        let mounted = true;
        categories()
            .then(items => {
                if(mounted) {
                    optionsData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    useEffect(() => {
        let mounted = true;
        subCategories()
            .then(items => {
                if(mounted) {
                    displayedBenefitsData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    useEffect(() => {
        let mounted = true;
        subSubCategories()
            .then(items => {
                if(mounted) {
                    subSubCategoriesData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    useEffect(() => {
        let mounted = true;
        subCategories()
            .then(items => {
                if(mounted) {
                    subCategoriesData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    const [allProductsTitle, allProductsData] = useState([]);
    const [paginationPrev, paginationPrevData] = useState([]);
    const [paginationNext, paginationNextData] = useState([]);



    const [page, setPage] = useState(null);
    const [sizeForPage, setsizeForPage] = useState(null);
    const [count, setCount] = useState([]);

    const [sizeAllData, setSizeAllData] = useState([]);
    useEffect(() => {
        let mounted = true;
        productByUserGet(page,sizeForPage,window.location.href.split('/')[4])
            .then(items => {
                if(mounted) {
                    if (items){
                        let sizeData =[]
                        for (let i=0;i<= items.data.count;i++){
                            if (i%12==0){
                                sizeData.push({size:12})
                            }
                        }
                        setSizeAllData(sizeData)
                        setCount(items.data.count)
                        allProductsData([])
                    }
                }
            })
        return () => mounted = false;
    }, [])


    const [showMe, setShowMe] = useState(true);
    function toggle(e){
        if (e==='grid'){
            setShowMe(true);
        }else{
            setShowMe(false);
        }

    }
    function testTitle(e){
        if (dataClass){
            console.log(e)
            dataClass = "dd"
        }else {
            console.log(e)
            dataClass = "dd"
        }

    }
    function subId(e){
        filtersBySubsub(e.id)
            .then(items => {
                filtersBySubsubData(items.data)
            })
    }

    let endData = []
    let price = []
    const defaultData = [
        { id: 1, name: "apple", isChecked: false },
        { id: 2, name: "banana", isChecked: false },
        { id: 3, name: "mango", isChecked: false },
        { id: 4, name: "grape", isChecked: false },
        { id: 5, name: "carrot", isChecked: false }
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

    const handleChangeSubCategories = (e,id,title) =>{
        let data = {'sub_category': title}
        productByUser(window.location.href.split('/')[4], data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                allProductsData(e.data.results)
            })
        subBySubsub(id)
            .then((item)=>{
                subSubCategoriesData(item.data)
            })
        let value = null
        if( e == "CleanAll" ){
            value = null
        } else {
            value = e.target.value;
        }
        const modifiedData = [...subCategoriesTitle];
        modifiedData.map((item) => {
            item.isChecked = item.id === +value;
            return item;
        });
        subCategoriesData(modifiedData);
    }

    const handleChangeAllCategories = (e,id,title) => {
        let data = {'category': title}
        productByUser(window.location.href.split('/')[4], data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                allProductsData(e.data.results)
            })
        subByCategory(id)
            .then((item)=>{
                subCategoriesData(item.data)
            })
        let value = null
        if( e == "CleanAll" ){
            value = null
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

    function handleChangeSubSubCategories(e,id,title) {
        let data = {'sub_sub_category': title}
        productByUser(window.location.href.split('/')[4], data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                allProductsData(e.data.results)
            })
        // const value = e.target.value;
        // const modifiedData = [...optionsTitle];
        // modifiedData.map((item) => {
        //     item.isChecked = item.id === +value;
        //     return item;
        // });
        // optionsData(modifiedData);
    }
    const handleChangeCleanAll = () =>{
        handleChangeAllCategories("CleanAll",null,null)
        handleChangeSubCategories("CleanAll",null,null)
    }


    const [minPrice, setMinPrice] = useState([]);
    const [maxPrice, setMaxPrice] = useState([]);
    const sentPrice = (e) => {
        price.push(e)
        let data = {'price': price}
        productByUser(window.location.href.split('/')[4], data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                allProductsData(e.data.results)
            })
    }
    const setAllPriceData = () =>{
        price.push([ Number(minPrice),Number(maxPrice)])
        let data = {'price': price}
        productByUser(window.location.href.split('/')[4], data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                allProductsData(e.data.results)
            })
    }
    const setPageFunc = (p,s) =>{
        productById(p,s,window.location.href.split('/')[3])
            .then(items => {
                allProductsData(items.data.results)
            })
    }
    const setPartnersPost = (sortByArray) =>{
        let data = {[sortByArray] : [sortByArray]}
        productsPost(data)
            .then(items => {
                allProductsData(items.data.results)
            })
    }
    return (
        <>
            <div className="page-wrapper">
                <main className="main">
                    <nav className="breadcrumb-nav">
                        <style jsx>{`
                    .right-scroll {
                                overflow-y: auto;
                                height: 400px;
                                overflow-x: hidden;
                              }
                        .product-action .btn-product:hover {
                                         background-color: #ed711b !important;
                                         color: #fff !important;
                                         border-color: #ed711b !important;
                                    }`

                        }

                        </style>
                        <div className="container">
                            <ul className="breadcrumb bb-no">
                                <li><a href="/">Ana Səhifə</a></li>
                                <li><a href="#">Satıcılar</a></li>
                                <li>Mağaza</li>
                            </ul>
                        </div>
                    </nav>

                    <div className="page-content">
                        <div className="container">
                            <div className="store store-wcfm-banner">
                                <figure className="store-media">
                                    <img src="assets/images/vendor/wcfm/1.jpg" alt="Vendor" width="1240" height="460"
                                         style={{backgroundColor: '#40475e'}}/>
                                </figure>
                                <div className="store-content">
                                    <div className="store-content-left mr-auto">
                                        <div className="personal-info">
                                            <figure className="seller-brand">
                                                <img src="assets/images/vendor/brand/2-100x100.png" alt="Brand" width="100"
                                                     height="100"/>
                                            </figure>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width: '100%'}}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="address-info">
                                            <h4 className="store-title">Vendor 1</h4>
                                            <span style={{color:"white"}}>Electronics</span>
                                            <ul className="seller-info-list list-style-none">
                                                <li className="store-address">
                                                    <i className="w-icon-map-marker"></i>
                                                    Street1, Street2, Great Area, California, United States (US), 92090El
                                                    Carjon,
                                                </li>
                                                <li className="store-phone">
                                                    <a href="tel:123456789">
                                                        <i className="w-icon-phone"></i>
                                                        0(800)123-456
                                                    </a>
                                                </li>
                                                <li className="store-email">
                                                    <a href="email:#">
                                                        <i className="far fa-envelope"></i>
                                                        wc@vendor.com
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="store-content-right">
                                        <div className="social-icons social-icons-colored border-thin">
                                            <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                            <a href="#" className="social-icon social-twitter fab fa-telegram"></a>
                                            <a href="#" className="social-icon social-linkedin fab fa-linkedin"></a>
                                            <a href="#" className="social-icon social-youtube w-icon-youtube"></a>
                                            <a href="#" className="social-icon social-instagram w-icon-instagram"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-content row gutter-lg mb-10">
                                <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                                    <div className="sidebar-overlay"></div>
                                    <a className="sidebar-close" href="#"><i className="close-icon"></i></a>
                                    <div className="sidebar-content scrollable">
                                        <div className="sticky-sidebar">
                                            <div className="filter-actions">
                                                <label>Filter :</label>
                                                <a href="#" className="btn btn-dark btn-link filter-clean" onClick={() => handleChangeCleanAll()}>Hamısını təmizləyin</a>
                                            </div>
                                            <div className="widget widget-collapsible">
                                                <h3 className="widget-title"><span>Bütün Kateqoriyalar</span></h3>
                                                <ul className="widget-body filter-items item-check mt-1 right-scroll" style={{ overflowY: 'auto', height:' 300px',minHeight:'200px', overflowX: 'hidden'}}>
                                                    {optionsTitle.map((item, index) => (
                                                        <div  onChange={(e) => handleChangeAllCategories(e,item.id,item.title)}>
                                                            <div key={item.id} className="mt-2">
                                                                <input
                                                                    type="checkbox"
                                                                    value={item.id}
                                                                    style={{width:' 20px', height: '24px'}}
                                                                    checked={item.isChecked}
                                                                    id={`options` + item.id}
                                                                />
                                                                <label htmlFor={`options` + item.id} className="ml-2" style={{ overflowY: 'auto', height:' 300px',minHeight:'200px', overflowX: 'hidden'}}>{item.title}</label>
                                                                <br />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="widget widget-collapsible">
                                                <h3 className="widget-title"><span>Alt Kateqoriyalar</span></h3>
                                                <ul className="widget-body filter-items item-check mt-1" style={{ overflowY: 'auto', height:' 300px',minHeight:'200px', overflowX: 'hidden'}}>
                                                    {subCategoriesTitle.map((item, index) => (
                                                        <div  onChange={(e) => handleChangeSubCategories(e,item.id,item.title)}>
                                                            <div key={item.id} className="mt-2">
                                                                <input
                                                                    type="checkbox"
                                                                    value={item.id}
                                                                    style={{width:' 20px', height: '24px'}}
                                                                    checked={item.isChecked}
                                                                    id={`sub` + item.id}
                                                                />
                                                                <label htmlFor={`sub` + item.id} className="ml-2" style={{position:"relative", top:'-5px',cursor:"pointer"}}>{item.title}</label>
                                                                <br />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="widget widget-collapsible">
                                                <h3 className="widget-title"><span>Sub Kateqoriyalar</span></h3>
                                                <ul className="widget-body filter-items item-check mt-1" style={{ overflowY: 'auto', height:' 400px', overflowX: 'hidden'}}>
                                                    {subSubCategoriesTitle.map((item, index) => (
                                                        <div  onChange={(e) => handleChangeSubSubCategories(e,item.id,item.title)}>
                                                            <div key={item.id} className="mt-2">
                                                                <input
                                                                    type="checkbox"
                                                                    value={item.id}
                                                                    style={{width:' 20px', height: '24px'}}
                                                                    checked={item.isChecked}
                                                                    id={`subSub` + item.id}
                                                                />
                                                                <label htmlFor={`subSub` + item.id} className="ml-2" style={{position:"relative", top:'-5px',cursor:"pointer"}}>{item.title}</label>
                                                                <br />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>
                                            {filtersBySubsubTitle.map(e=>(
                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title"><span>{e.title}</span></h3>
                                                    <ul className="widget-body filter-items item-check mt-1">

                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </aside>
                                <div className="main-content">
                                    <nav className="toolbox sticky-toolbox sticky-content fix-top">
                                        <div className="toolbox-left">
                                            <a href="#" className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle
                                        btn-icon-left d-block d-lg-none"><i
                                                className="w-icon-category"></i><span>Filters</span></a>
                                            <div className="toolbox-item toolbox-sort select-box text-dark">
                                                <label>Sırala :</label>
                                                <select name="orderby" className="form-control"  onClick={(e)=> setPartnersPost(e.target.value)}>
                                                    <option value="az">A-Z</option>
                                                    <option value="za">Z-A</option>
                                                    <option value="cheap">Ucuz-Baha</option>
                                                    <option value="expensive">Baha-Ucuz</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="toolbox-right">
                                            <div className="toolbox-item toolbox-show select-box">
                                                <select name="count" className="form-control" onClick={(e)=> setPageFunc(1,e.target.value)}>
                                                    <option value="9">Show 9</option>
                                                    <option value="12" selected="selected">Show 12</option>
                                                    <option value="24">Show 24</option>
                                                    <option value="36">Show 36</option>
                                                </select>
                                            </div>
                                            <div className="toolbox-item toolbox-layout">
                                                <a onClick={() => toggle('grid')}
                                                   className={`icon-mode-grid btn-layout  ${showMe  ? "active" : ""}`} >
                                                    <i className="w-icon-grid"></i>
                                                </a>
                                                <a onClick={() => toggle('list')}
                                                   className={`icon-mode-list btn-layout  ${showMe ? "" : "active"}`}
                                                >
                                                    <i className="w-icon-list"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </nav>

                                    <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2" style={{display: showMe?" ":"none"}}>
                                        {allProductsTitle.map(e=>(
                                            <div className="product-wrap">
                                                <div className="product text-center">
                                                    <figure className="product-media">
                                                        <a href={`/${e.id}`}>
                                                            <img src={e.images[0]} alt="Product" width="300"
                                                                 height="338"/>
                                                        </a>
                                                        <div className="product-action-horizontal">
                                                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                               title="Add to cart"></a>
                                                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                               title="Bəyəndiklərim"></a>
                                                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                               title="Müqayisə"></a>
                                                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                               title="Cəld Baxış"></a>
                                                        </div>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="product-cat">
                                                            <a href="shop-banner-sidebar.html">sub_sub_category</a>
                                                        </div>
                                                        <h3 className="product-name">
                                                            <a href="product-default.html">{e.title}</a>
                                                        </h3>
                                                        <div className="ratings-container">
                                                            <div className="ratings-full">
                                                                <span className="ratings"  style={{width: `${(18 * e.rating)+'%'}` }}></span>
                                                                <span className="tooltiptext tooltip-top"></span>
                                                            </div>
                                                            <a href="product-default.html" className="rating-reviews">({e.rating}
                                                                reviews)</a>
                                                        </div>
                                                        <div className="product-pa-wrapper">
                                                            <div className="product-price">
                                                                {e.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div >


                                    <div className="product-wrapper row cols-xl-1 cols-sm-1 cols-xs-1 cols-1" style={{display: showMe?"none":" "}}>
                                        {allProductsTitle.map(e=>(
                                            <div className="product product-list">
                                                <figure className="product-media">
                                                    <a href={`/${e.id}`}>
                                                        <img src={e.images[0]} alt="Product" width="300"
                                                             height="338"/>
                                                    </a>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                           title="Cəld Baxış"></a>
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
                                                        <a href="shop-banner-sidebar.html">sub_sub_category</a>
                                                    </div>
                                                    <h4 className="product-name">
                                                        <a href="product-default.html">{e.title}</a>
                                                    </h4>
                                                    <div className="ratings-container">
                                                        <div className="ratings-full">
                                                            <span className="ratings"  style={{width: `${(18 * e.rating)+'%'}` }}></span>
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        <a href="product-default.html" className="rating-reviews">({e.rating}
                                                            Reviews)</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <ins className="new-price">{e.price}</ins>
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
                                                        <a href="#" className="btn-product btn-cart" title="Səbətə əlavə et"><i
                                                            className="w-icon-cart"></i> Səbətə əlavə et</a>
                                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                           title="Bəyəndiklərim"></a>
                                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                           title="Müqayisə"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>





                                    <div className="toolbox toolbox-pagination justify-content-between">
                                        {/*<p className="showing-info mb-2 mb-sm-0">*/}
                                        {/*    Showing<span>1-12 of 60</span>Products*/}
                                        {/*</p>*/}
                                        <ul className="pagination">
                                            <li className="prev disabled">
                                                <a href={paginationPrev} aria-label="Previous" tabIndex="-1" aria-disabled="true">
                                                    <i className="w-icon-long-arrow-left"></i>Əvvəlki
                                                </a>
                                            </li>
                                            {sizeAllData.map((e,i)=>(
                                                <li className="page-item active">
                                                    <a className="page-link" href="#" onClick={()=>setPageFunc(i+1,e.size)}>{i+1}</a>
                                                </li>
                                            ))}
                                            <li className="next">
                                                <a href={paginationNext} aria-label="Next">
                                                    Sonrakı<i className="w-icon-long-arrow-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
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
            <div className="sticky-footer sticky-content fix-bottom">
                <a href="demo7.html" className="sticky-link active">
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

        </>
    )}