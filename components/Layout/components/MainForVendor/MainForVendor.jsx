import React, {useEffect, useState} from "react";
import {vendors} from "../../../../services/vendors/vendors";
import {categories} from "../../../../services/categories";
import {subCategories} from "../../../../services/subCategories";
import {subSubCategories} from "../../../../services/subSubCategories";
import {allProducts} from "../../../../services/products/allProducts";
import {filtersBySubsub} from "../../../../services/filtersBySubsub";
import {productFilter} from "../../../../services/productFilter";
import {subBySubsub} from "../../../../services/subBySubsub";
import {subByCategory} from "../../../../services/subByCategory";
import {productsPost} from "../../../../services/productsPost";
import axios from "axios";
import { MobileFooter } from "../MobileFooter/MobileFooter";

export default function MainForVendor() {
    const [orderbyTitle, setOrderby] = useState([]);

    const [vendorsData, setVendorsData] = useState([]);

    

    const getData = () => (
        axios.get("https://api.ipekyolu.az/api/auth/vendors/")
        .then(res => setVendorsData(res.data.results))
        .catch(err => err)
    )

    useEffect(() => {
        getData()
        // vendors()
        //     .then(items => {
        //         vendorsData(items.data.results)
        //     })
        //     .catch((e)=>{
        //         console.log(e)
        //     })
    }, [])


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
    const [paginationPrev, paginationPrevData] = useState([]);
    const [paginationNext, paginationNextData] = useState([]);



    const [page, setPage] = useState(null);
    const [sizeForPage, setsizeForPage] = useState(null);
    const [count, setCount] = useState([]);

    const [sizeAllData, setSizeAllData] = useState([]);
    // useEffect(() => {
    //     let mounted = true;
    //     allProducts(page,sizeForPage)
    //         .then(items => {
    //             if(mounted) {
    //                 let sizeData =[]
    //                 for (let i=0;i<= items.data.count;i++){
    //                     if (i%12==0){
    //                         sizeData.push({size:12})
    //                     }
    //                 }
    //                 setSizeAllData(sizeData)
    //                 setCount(items.data.count)
    //                 vendorsData(items.data.results)
    //             }
    //         })
    //     return () => mounted = false;
    // }, [])


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
        productsPost(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                setVendorsData(e.data.results)
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
        productsPost(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                setVendorsData(e.data.results)
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
        productsPost(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                setVendorsData(e.data.results)
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
    const [searchVendor, searchVendorTitle] = useState([]);
    const sentPrice = (e) => {
        price.push(e)
        let data = {'price': price}
        productFilter(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                setVendorsData(e.data.results)
            })
    }
    const setAllPriceData = () =>{
        price.push([ Number(minPrice),Number(maxPrice)])
        let data = {'price': price}
        productFilter(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                setVendorsData(e.data.results)
            })
    }
    const setPageFunc = (p,s) =>{
        allProducts(p,s)
            .then(items => {
                setVendorsData(items.data.results)
            })
    }
    const setPartnersPost = (sortByArray) =>{
        let data = {[sortByArray] : [sortByArray]}
        productsPost(data)
            .then(items => {
                setVendorsData(items.data.results)
            })
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
            height: 400px;
            overflow-x: hidden;
          }
        `}
            </style>
            <div  className="page-wrapper">
                <main className="main">
                    <nav className="breadcrumb-nav">
                        <div className="container">
                            <ul className="breadcrumb bb-no">
                                <li><a href="/">Ana Səhifə</a></li>
                                <li><a href="/vendor">Saticilar</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="page-content mb-8">
                        <div className="container">
                            <div className="row gutter-lg">
                                <aside  className="sidebar  vendor-sidebar sticky-sidebar-wrapper left-sidebar sidebar-fixed">
                                    <div className="sidebar-overlay"></div>
                                    <a className="sidebar-close" href="#"><i className="close-icon"></i></a>
                                    <a href="#" className="sidebar-toggle"><i className="fas fa-chevron-right"></i></a>
                                    <div className="sidebar-content">
                                        <div className="sticky-sidebar">
                                            <div className="widget widget-search-form">
                                                <div className="widget-body">
                                                    <form action="#" method="GET"
                                                          className="input-wrapper input-wrapper-inline">
                                                        <input type="text" className="form-control" placeholder="Axtar ..."
                                                               onChange={e=>searchVendorTitle(e.target.value)}
                                                               autoComplete="off" required=""/>
                                                        <button className="btn btn-search"><i className="w-icon-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>


                                            <div className="widget widget-collapsible ">
                                                <h3 className="widget-title"><span>Bütün Kateqoriyalar</span></h3>
                                                <ul className="widget-body filter-items item-check mt-1 right-scroll">
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
                                                                <label htmlFor={`options` + item.id} className="ml-2" style={{position:"relative", top:'-5px',cursor:"pointer"}}>{item.title}</label>
                                                                <br />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="widget widget-collapsible">
                                                <h3 className="widget-title"><span>Alt Kateqoriyalar</span></h3>
                                                <ul className="widget-body filter-items item-check mt-1 right-scroll" >
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
                                                <ul className="widget-body filter-items item-check mt-1 right-scroll">
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
                                        </div>
                                    </div>
                                </aside>
                                <div className="main-content">
                                    <div className="toolbox wcfm-toolbox">
                                        <div className="toolbox-left">
                                            <form className="select-box toolbox-item">
                                                <select name="orderby" className="form-control" onClick={(e)=> setPartnersPost(e.target.value)}>
                                                    <option value="low-high">reytinqə : aşağıdan yuxarıya</option>
                                                    <option value="high-low">reytinqə : yuxarıdan aşağıya</option>
                                                    <option value="old-new">əlifba sırası : A-dan Z-yə</option>
                                                    <option value="old-new">əlifba sırası : Z-dən A</option>
                                                </select>
                                            </form>
                                        </div>
                                        <div className="toolbox-right">
                                            <div className="toolbox-item">
                                                {/*<label className="showing-info">Showing 1-2 of 2 result</label>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row cols-sm-2">
                                       {vendorsData.map((vendorData) => (
                                          
                                            <div className="store-wrap mb-4">
                                                <div className="store store-grid store-wcfm">
                                                    <div className="store-header">
                                                        <figure className="store-banner">
                                                            <img src={vendorData.cover_image} alt="Vendor" width="400"
                                                                 height="194" style={{backgroundColor: '#40475E',maxWidth:"454px",maxHeight:"194.1px",objectFit:"cover"}}/>
                                                        </figure>
                                                    </div>
                                                    <div className="store-content">
                                                        <h4 className="store-title" style={{marginBottom: '0.9rem',marginTop:'2.9rem'}}>
                                                            <a href="vendor-dokan-store.html">{vendorData.name}</a>
                                                        </h4>
                                                        <span style={{color:"white"}}>{vendorData.category?.title}</span>
                                                        <ul className="seller-info-list list-style-none">
                                                            <li className="store-phone">
                                                                <a href="tel:123456789">
                                                                    <i className="w-icon-phone"></i>
                                                                    {vendorData.number}
                                                                </a>
                                                            </li>
                                                            <li className="store-address">
                                                                <i className="w-icon-map-marker"></i>
                                                                {vendorData.address + " " + vendorData.address_addtional}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="store-footer">
                                                        <figure className="seller-brand" style={{backgroundColor: "#0b899b"}}> 
                                                            <img src={vendorData.logo} alt="Brand" width="80"
                                                                 height="80"/>
                                                        </figure>
                                                        <a href={`/vendorStore/${vendorData.id}`} className="btn btn-rounded btn-visit">Ziyarət Edin</a>
                                                    </div>
                                                </div>
                                            </div>
                                        

                                            
                                       ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <MobileFooter/>

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
    )
}