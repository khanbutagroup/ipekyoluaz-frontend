import React, {useEffect, useState} from "react";
import Link from 'next/link'
import MyAccountVendorDetails from "./MyAccountVendorDetails";
import Select from "react-select";
import {subSubCategories} from "../../../../services/subSubCategories";
import {deleteProduct} from "../../../../services/products/deleteProduct";
import {userProducts} from "../../../../services/myAccount/userProducts";
import {storeOrders} from "../../../../services/storeOrders";
export default function MyAccountShop(){
const logout = () =>{
    localStorage.setItem('token',null)
    localStorage.setItem('username',null)
}
    const [optionsTitle, optionsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        let options = []
        subSubCategories()
            .then(items => {
                if(mounted) {
                    const data = items.data.map(e=>{
                        options.push({value:e['id'], label:e['title']})
                    })
                    optionsData(options)
                }
            })
        return () => mounted = false;
    }, [])
    let handleChange = (selectedOptions) => {
        sendDataUrl(selectedOptions)
    }
    function deleteUserProduct(id){
        swal({
            title: "Əminsinizmi?!",
            icon: "warning",
            buttons: ["Bağla", "Sil"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteProduct(id)
                        .then(items => {
                            swal("Silindi!", {
                                icon: "success",
                                button: ["Bağla"],
                            });
                        }).catch((e)=>{
                        console.log(e)
                    })

                } else {
                    swal("Silinmədi");
                }
            });
    }
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [userProductsTitle, userProductsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        userProducts()
            .then(items => {
                if(mounted) {
                    userProductsData(items.data)
                }

            }).catch((e)=>{
            console.log(e)
        })
        return () => mounted = false;
    }, [])

    const [createListItem, setCreateList] = useState([]);
    const createInput = () =>{
        setCreateList([{DD:"DD"}])
        console.log(createListItem)
    }

    let windowPassword,
        windowPassword2,
        windowPassword3,
        windowName,
        windowLastName,
        windowPhoneNumber,
        windowEmail,
        windowOthersPlace
    if (typeof window !== 'undefined' && localStorage.getItem('userData')){
        //JSON.parse(localStorage.getItem('userData')).is_store
            windowPassword =  JSON.parse(localStorage.getItem('userData')).address ?  JSON.parse(localStorage.getItem('userData')).address : null
            windowName = JSON.parse(localStorage.getItem('userData')).name ? JSON.parse(localStorage.getItem('userData')).name : null
            windowPhoneNumber = JSON.parse(localStorage.getItem('userData')).number ? JSON.parse(localStorage.getItem('userData')).number : null
            windowEmail = JSON.parse(localStorage.getItem('userData')).email ? JSON.parse(localStorage.getItem('userData')).email : null
    }
    const [password3, setPassword3] = useState(windowPassword3);
    const [password2, setPassword2] = useState(windowPassword2);
    const [password, setPassword] = useState(windowPassword);
    const [name, setName] = useState(windowName);
    const [lastName, setLastName] = useState(windowLastName);
    const [phoneNumber, setPhoneNumber] = useState(windowPhoneNumber);
    const [email, setEmail] = useState(windowEmail);
    const [othersPlace, setOthersPlace] = useState(windowOthersPlace);

    const saveChange = () => {
        console.log(name)
    }


    const [storeOrdersTitle, storeOrdersData] = useState([]);
    useEffect(() => {
        storeOrders(localStorage.getItem("userId"))
            .then(items => {
                console.log(items.data,"drrrrrrrrrrrrrrrrrrrrrd")
                if (items.product_version){
                    console.log(items.product_version,"ddd")
                    storeOrdersData(items.product_version)
                }


            }).catch((e)=>{
            console.log(e)
        })
    }, [])
    return (
        <>
            <style jsx>{`
                    .shopShop-table tbody td:not(:first-child), .shopShop-table thead th:not(:first-child) {
                        padding-left: 4rem !important;
                    }
                .span-link:hover {
                   color: #1914fe !important;
                   cursor: pointer;
                  }
                   .inputFile {
                width: 0.1px !important;
                height: 0.1px !important;
                opacity: 0 !important;
                overflow: hidden !important;
                position: absolute !important;
                z-index: -1 !important;
              }

              .inputFile + label {
                background-color: #f5f5f5;
                display: inline-block;
              }
            `}</style>
            <div className="page-wrapper">
                <main className="main">
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title mb-0">Hesabım</h1>
                        </div>
                    </div>
                    <nav className="breadcrumb-nav">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li><a href="/">Ana Səhifə</a></li>
                                <li>Hesabım</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="page-content pt-2">
                        <div className="container">
                            <div className="tab tab-vertical row gutter-lg">
                                <ul className="nav nav-tabs mb-6" role="tablist">
                                    <li className="nav-item">
                                        <a href="#account-dashboard" className="nav-link active">İdarə paneli</a>
                                    </li>
                                    <hr className="product-divider"/>
                                    <li className="nav-item">
                                        <a href="#account-details" className="nav-link">HESAB MƏLUMATLARI</a>
                                    </li>
                                    <hr className="product-divider"/>
                                    <li className="nav-item">
                                        <a href="#account-orders" className="nav-link">SİFARİŞLƏR</a>
                                    </li>
                                    <hr className="product-divider"/>
                                    <li className="link-item">
                                        <Link href="/wishlist">
                                            <span  className="nav-link span-link">Bəyəndiklərim</span>
                                        </Link>

                                    </li>
                                    <hr className="product-divider"/>
                                    <li className="link-item">
                                        <Link href="#">
                                            <span  className="nav-link span-link" onClick={()=>{logout()}}>ÇIXIŞ</span>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="tab-content mb-6">
                                    <div className="tab-pane active in" id="account-dashboard">
                                        <p className="greeting">
                                            <span>İpək Yoluna Xoş Gəldiniz!</span>
                                            
                                            <a href="#" style={{marginLeft:"1%"}} className="text-primary">ÇIXIŞ</a>
                                        </p>

        

                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                <a href="#account-orders" className="link-to-tab">
                                                    <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-orders">
                                                    <i className="w-icon-orders" style={{fontSize:'52px'}}></i>
                                                </span>
                                                        <div className="icon-box-content">
                                                            <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>SİFARİŞLƏR</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                <a href="#account-details" className="link-to-tab">
                                                    <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-account">
                                                    <i className="w-icon-user"style={{fontSize:'52px'}}></i>
                                                </span>
                                                        <div className="icon-box-content">
                                                            <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Hesab Təfərrüatları</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                <a href="wishlist.html" className="link-to-tab">
                                                    <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-wishlist">
                                                    <i className="w-icon-heart" style={{fontSize:'52px'}}></i>
                                                </span>
                                                        <div className="icon-box-content">
                                                            <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Bəyəndiklərim</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                <a href="#">
                                                    <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-logout">
                                                    <i className="w-icon-logout" style={{fontSize:'52px'}}></i>
                                                </span>
                                                        <div className="icon-box-content">
                                                            <p className="text-uppercase mb-0" style={{fontSize:'18px'}} onClick={()=>{logout()}}>ÇIXIŞ</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane mb-4" id="account-orders">
                                        {/*        <div className="icon-box icon-box-side icon-box-light">*/}
                                        {/*<span className="icon-box-icon icon-orders">*/}
                                        {/*    <i className="w-icon-orders"></i>*/}
                                        {/*</span>*/}
                                        {/*            <div className="icon-box-content">*/}
                                        {/*                <h4 className="icon-box-title text-capitalize ls-normal mb-0">Orders</h4>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}

                                        <table className="shop-table account-orders-table mb-6">
                                            <thead>
                                            <tr>
                                                <th className="order-id">Order</th>
                                                <th className="order-date">Date</th>
                                                <th className="order-status">Status</th>
                                                <th className="order-total">Total</th>
                                                <th className="order-actions">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="order-id">#2321</td>
                                                <td className="order-date">August 20, 2021</td>
                                                <td className="order-status">Processing</td>
                                                <td className="order-total">
                                                    <span className="order-price">$121.00</span> for
                                                    <span className="order-quantity"> 1</span> item
                                                </td>
                                                <td className="order-action">
                                                    <a href="#"
                                                       className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <a href="/shop" className="btn btn-dark btn-rounded btn-icon-right">MAĞAZA KEÇİN<i className="w-icon-long-arrow-right"></i></a>

                                     </div>

                                    <div className="tab-pane" id="account-downloads">
                                        {/*        <div className="icon-box icon-box-side icon-box-light">*/}
                                        {/*<span className="icon-box-icon icon-downloads mr-2">*/}
                                        {/*    <i className="w-icon-download"></i>*/}
                                        {/*</span>*/}
                                        {/*            <div className="icon-box-content">*/}
                                        {/*                <h4 className="icon-box-title ls-normal">Məhsul əlavə et</h4>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        <MyAccountVendorDetails/>
                                    </div>

                                    <div className="tab-pane" id="account-details">
                                        <form className="form account-details-form" action="#" method="post">
                                            <div className="row " style={{margin:"1px"}}>
                                                <div className="col-md-6 mt-2">
                                                    <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                        <input type="text"  style={{backgroundColor:"#ffff",marginTop: '7px'}}
                                                                 value={name}
                                                               onChange={e=>setName(e.target.value)}
                                                               id="firstname" name="firstname" placeholder="Adı" className="form-control form-control-md"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-2">
                                                    <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                        <input type="tel" style={{backgroundColor:"#ffff",marginTop: '7px'}}
                                                               value={lastName}
                                                               onChange={e=>setLastName(e.target.value)}
                                                               id="display-name" name="display_name" placeholder="Soyadı" className="form-control form-control-md"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row " style={{margin:"1px"}}>
                                                <div className="col-md-6 mt-2">
                                                    <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                        <input type="text"  style={{backgroundColor:"#ffff",marginTop: '7px'}}
                                                               value={phoneNumber}
                                                               onChange={e=>setPhoneNumber(e.target.value)}
                                                               id="firstname" name="firstname" placeholder="Telefon nömrəsi" className="form-control form-control-md"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mt-2">
                                                    <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                        <input type="tel" style={{backgroundColor:"#ffff",marginTop: '7px'}}
                                                               value={email}
                                                               onChange={e=>setEmail(e.target.value)}
                                                               id="display-name" name="display_name" placeholder="E-poçt ünvanı" className="form-control form-control-md"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-4 mb-5 ml-2 mr-2 pb-3" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px",margin:"5px"}}>
                                                <label htmlFor="display-name">Ünvan</label>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <Select
                                                            name="colors"
                                                            options={optionsTitle}
                                                            className="basic-multi-select"
                                                            placeholder={"Şəhər"}
                                                            classNamePrefix="select"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <Select
                                                            name="colors"
                                                            options={optionsTitle}
                                                            className="basic-multi-select"
                                                            placeholder={"Rayon"}
                                                            classNamePrefix="select"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <Select
                                                            name="colors"
                                                            options={optionsTitle}
                                                            className="basic-multi-select"
                                                            placeholder={"Qəsəbə"}
                                                            classNamePrefix="select"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <Select
                                                            name="colors"
                                                            options={optionsTitle}
                                                            className="basic-multi-select"
                                                            placeholder={"Küçə"}
                                                            classNamePrefix="select"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" id="display-name"
                                                               style={{backgroundColor:"#ffff",marginTop: '7px'}} name="display_name"
                                                               value={othersPlace}
                                                               onChange={e=>setOthersPlace(e.target.value)}
                                                               placeholder="Digəri" className="form-control form-control-md mb-0"/>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="form-group mb-3" >
                                                <div className="row">
                                                    <div className="col-8 p-2">
                                                        <form className="ml-5">
                                                            <input type="file"
                                                                   accept=".jpg, .jpeg, .png"
                                                                   name="frr" id="frr"
                                                                   className="inputFile"
                                                                   onChange={(event) => setSelectedFile1(window.URL.createObjectURL(event.target.files[0]))}/>
                                                            <label htmlFor="frr" style={{backgroundImage:"url(" + selectedFile1 + ")",width:'500px', height:'200px',}}>
                                                                <span style={{justifyContent:"center", display:"flex",position:"relative", top:"80px",  fontSize:"20px"}}><i className="w-icon-map-marker mr-1"></i></span>
                                                            </label>
                                                        </form>
                                                    </div>
                                                    <div className="col-4">
                                                        <form  className="p-5">
                                                            <input type="file"
                                                                   accept=".jpg, .jpeg, .png"
                                                                   name="dd" id="dd"
                                                                   className="inputFile"
                                                                   onChange={(event) => setSelectedFile2(window.URL.createObjectURL(event.target.files[0]))}/>
                                                            <label htmlFor="dd" style={{backgroundImage:"url(" + selectedFile2 + ")",width:'600px', height:'200px',}}>
                                                                <span style={{justifyContent:"center", display:"flex",position:"relative", top:"80px", left:"-150px",  fontSize:"20px"}}><i className="w-icon-map-marker mr-1"></i></span>
                                                            </label>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-5 row">
                                                <h4 className="title title-password ls-25 font-weight-bold">Şifrə dəyişikliyi</h4>
                                                <div className="col-4">
                                                    <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem",padding:"7px",margin:"5px"}}>
                                                        <input type="password"
                                                               id="display-name"
                                                               value={password}
                                                               onChange={e=>setPassword(e.target.value)}
                                                               style={{backgroundColor:"#ffff",marginTop: '5px'}} name="display_name" placeholder="Cari Şifrə" className="form-control form-control-md mb-0"/>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem",padding:"7px",margin:"5px"}}>
                                                        <input type="password"
                                                               id="display-name"
                                                               value={password2}
                                                               onChange={e=>setPassword2(e.target.value)}
                                                               style={{backgroundColor:"#ffff",marginTop: '5px'}} name="display_name" placeholder="Yeni Şifrəni Əlavə Edin" className="form-control form-control-md mb-0"/>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem",padding:"7px",margin:"5px"}}>
                                                        <input type="password"
                                                               id="display-name"
                                                               value={password3}
                                                               onChange={e=>setPassword3(e.target.value)}
                                                               style={{backgroundColor:"#ffff",marginTop: '5px'}} name="display_name" placeholder="Şifrəni təsdiqləyin" className="form-control form-control-md mb-0"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button"
                                                    onClick={()=>{saveChange()}}
                                                    className="btn btn-dark btn-rounded btn-sm mb-4 mt-5">Dəyişiklikləri yadda saxla
                                            </button>
                                            <div> <label htmlFor="display-name">Açilma tarixi: 1/31/2022</label></div>
                                        </form>
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
                        <p>Axtar</p>
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