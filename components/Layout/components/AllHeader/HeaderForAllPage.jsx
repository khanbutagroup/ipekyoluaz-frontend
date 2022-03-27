import {allCategories} from "../../../../services/allCategories";
import React, {useEffect, useState} from "react";
import {register} from "../../../../services/auth/register";
import {login} from "../../../../services/auth/login";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from "react-select";
import {categories} from "../../../../services/categories";
import {phoneNumber} from "../../../../services/phoneNumber";
import {cartByUserID} from "../../../../services/card/cartByUserID";
import {getUserDataByToken} from "../../../../services/auth/getUserDataByToken";
import {removeFromCart} from "../../../../services/card/removeFromCart";
import {logo} from "../../../../services/logo";
import {urlTopForImg} from "../../../../services/apiUrl/urlTopForImg";
import {headerText} from "../../../../services/headerText";
import {useDispatch, useSelector} from "react-redux";
export default function HeaderForAllPage(){
    const [logoPost, setLogoPost] = React.useState([]);
    useEffect(() => {
        let mounted = true;
        allCategories()
            .then(items => {
                if(mounted) {
                    setLogoPost(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    const style = {
        control: base => ({
            ...base,
            border: 0,
            boxShadow: 'none',
            backgroundColor: 'white'
        })
    };
    const [phone, setState] = useState("");
    const [number, setNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [isVendor, setIsVendor] = React.useState(false);
    const [isStore, setIsStore] = React.useState(false);
    const [registerPost, setRegisterPost] = React.useState([]);
    const [optionsTitle, optionsData] = useState([]);
    const [phoneNumberItem, setPhoneNumberItem] = React.useState(null);
    const [cartByUserIDItem, setCartByUserIDItem] = React.useState([]);
    const [cartCount, setCartCountItem] = React.useState(0);
    const [allCardPrice, setAllCardPrice] = React.useState(0);
    const [numberLogin, setNumberLogin] = React.useState("");
    const [passwordLogin, setPasswordLogin] = React.useState("");
    const [loginPost, setLoginPost] = React.useState([]);
    const [loginPhoneInput, setPhoneInput] = React.useState("");
    const [showMeNumber, setShowMeNumber] = useState("none");
    const [logoTitle, logoData] = useState(null);
    const [headerTextTitle, setHeaderText] = useState(null);

    const [hiddenText, setHiddenText] = useState(null);

    const handleLoginInput = () =>{
        let data = {number:loginPhoneInput,
            password:passwordLogin}
        login(data)
            .then(items => {
                localStorage.setItem('username', items.data.access);
                localStorage.setItem('token', items.data.refresh)
                setLoginPost(items.data)
                getUserDataByToken()
                    .then(e=>{
                        if (e){
                            setHiddenText("none")
                            setShowMe("none")
                            localStorage.setItem('userData',  JSON.stringify(e.data))
                            localStorage.setItem('userId', e.data.id);
                        }else {
                            setHiddenText("")
                            localStorage.setItem('userData',  JSON.stringify(e.data))
                            localStorage.setItem('userId', e.data.id);
                        }
                    })
            })
            .catch(e=>console.log(e))
    }

    useEffect(() => {
        phoneNumber()
            .then(items => {
                setPhoneNumberItem(items.data.number)
            })
        logo()
            .then(items => {
                logoData(urlTopForImg()+items.data.image)
            })
        headerText()
            .then(items => {
                setHeaderText(items.data.content)
            })
        let cardPrice = 0
        let  userId = localStorage.getItem('userId')
        if (userId){
            cartByUserID(userId)
                .then(items => {
                    setCartByUserIDItem(items.data.product_version)
                    setCartCountItem(items.data.product_version.length)
                    items.data.product_version.map(c=>cardPrice+=Number(c.final_price))
                    setAllCardPrice(cardPrice)
                })
        }
        let options = [{value:-1, label:"Bütün Kateqoriyalar"}]
        categories()
            .then(items => {
                const data = items.data.map(e=>{
                    options.push({value:e['id'], label:e['title']})
                })
                optionsData(options)

            })
    }, [])


    const [showMe, setShowMe] = useState("none");
    function showMeFunc(){
        if (showMe== 'none'){
            setShowMe("block");
        }else{
            setShowMe("none");
        }
    }


    function showMeNumberFunc(){
        if (showMeNumber== 'none'){
            setShowMeNumber("block");
        }else{
            setShowMeNumber("none");
        }


    }
    const handleRegisterInput = () =>{
        let data = {number:number,
            password:password,
            password2:password2,
            is_store:isStore,
        }
        register(data)
            .then(items => {
                showMeFunc()
                showMeNumberFunc()
            }).catch(e =>{
            console.log(e)
        })
        console.log(data)
    }
    const handleOnChange = (value) => {
        setPhoneInput(`+${value}`)
    };

        const deleteCardProduct = ({quantity:quantity,productId:productId}) => {
        let data = {user:Number(localStorage.getItem('userId')), product:Number(productId)}
        removeFromCart(data)
            .then((e)=>{
                let cardPrice = 0
                let  userId = localStorage.getItem('userId')
                cartByUserID(userId)
                    .then(items => {
                        setCartByUserIDItem(items.data.product_version)
                        setCartCountItem(items.data.product_version.length)
                        items.data.product_version.map(c=>cardPrice+=Number(c.final_price))
                        setAllCardPrice(cardPrice)
                    })
            })
            .catch((e)=>{
                console.log(e)
            })

    };
    const [forgotPassword, setForgotPassword] = useState("none");
    function forgotPasswordFunc(){
        if (forgotPassword== 'none'){
            setForgotPassword("block");
        }else{
            setForgotPassword("none");
        }
    }
    const handleForgotPasswordInput = () =>{
        let data = {number:number,
            password:password,
            password2:password2,
            is_vendor:isVendor,
            is_store:isStore,
        }
        register(data)
            .then(items => {
                showMeFunc()
                forgotPasswordFunc()
            }).catch(e =>{
            console.log(e)
        })
        console.log(data)
    }

    // search func
    const [selectData, setSelectData] = useState("");
    const [searchData, setSearchData] = useState("");
    let handleChange = (selectedOptions) => {
        setSelectData(selectedOptions.label)
    }

    const [productFilterData, setProductFilter] = useState([]);

    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const mainSearch = () =>{
        let data ={
            title:searchData,
            category:selectData
        }
        productFilter(data).then(e=>{
            setProductFilter(e.results)

        })
    }
    const addToCardData = useSelector((state) => state.addToCardData);

    return (
        <>

      <style jsx>{`
                      .btnColor{
                        color: white;
                        background-color: #0b899b;
                        outline: 0;
                        border-radius: 0;
                        font-family: inherit;
                        font-weight: 600;
                        font-size: 1.4rem;
                        padding: 0.93em 1.98em;
                        line-height: 1;
                        text-transform: uppercase;
                        text-align: center;
                        white-space: nowrap;
                        cursor: pointer;
                    }
                    .btnColor:hover{
                        color: white;
                        background-color: #cd2027;
                        outline: 0;
                        border-radius: 0;
                        font-family: inherit;
                        font-weight: 600;
                        font-size: 1.4rem;
                        padding: 0.93em 1.98em;
                        line-height: 1;
                        text-transform: uppercase;
                        text-align: center;
                        white-space: nowrap;
                        cursor: pointer;
                    }
                    .react-tel-input .form-control {
                        position: relative;
                        font-size: 14px;
                        letter-spacing: .01rem;
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                        padding-left: 48px;
                        margin-left: 0;
                        background: #FFFFFF;
                        border: 1px solid #CACACA;
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
                  background-color: rgb(0,0,0);
                  background-color: rgba(0,0,0,0.4);
                }
                .modal-content {
                  background-color: #fefefe;
                  margin: auto;
                  padding: 10px;
                  border: 1px solid #888;
                  width: 30%;
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
            .category-dropdown > a:not(.btn):hover {
                color: #336699 !important;
               }
               .header-search .btn-search:hover, .header-search .btn-search:active, .header-search .btn-search:focus {
                     color: #336699 !important; 
                    background-color:  white !important; 
                }
                .btn:hover, .btn:active, .btn:focus {
                    color: #666;
                    border-color: white; 
                    background-color: gainsboro;
                }
                .category-menu .megamenu {
                    min-width: 48rem !important;
                }
                .category-dropdown.show>a, .category-dropdown:hover>a {
                    color: #0088dd;
                    background-color: white;
                }
            `} </style>
      <header className="header">
                    <div className="header-top">
                        <div className="container">
                            <div className="header-left">
                                <p className="welcome-msg">{headerTextTitle}</p>
                            </div>
                            <div className="header-right">
                                <span className="divider d-lg-show"></span>
                                <a href="/contact-us" style={{color:"white", cursor:"pointer"}} className="d-lg-show" >Bizimlə Əlaqə</a>
                                <a href="/my-account-for-user" style={{color:"white", cursor:"pointer"}} className="d-lg-show">Hesabım</a>
                                <a onClick={showMeFunc} style={{color:"white", cursor:"pointer",display:hiddenText}}>
                                    <i className="w-icon-account"></i>Daxil ol</a>
                                <span className="delimiter d-lg-show" style={{display:hiddenText}}>/</span>
                                <a  onClick={showMeFunc} className="delimiter" style={{color:"white", cursor:"pointer",display:hiddenText}}>Qeydiyyat</a>
                            </div>
                        </div>
                    </div>
                    <div id="myModal" className="modal" style={{display:showMe}}>
                        <div className="modal-content">
                            <span className="close" onClick={showMeFunc}>&times;</span>
                            <div className="login-popup">
                                <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                                    <ul className="nav nav-tabs text-uppercase" role="tablist">
                                        <li className="nav-item">
                                            <a href="#sign-in" className="nav-link active">Daxil ol</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sign-up" className="nav-link">Qeydiyyat</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="sign-in">
                                            <div className="form-group">
                                                <label>Nömrənizi daxil edin *</label>
                                                <PhoneInput
                                                    country="az"
                                                    inputStyle={{width:"100%"}}
                                                    value={phone}
                                                    onChange={handleOnChange}/>

                                                {/*<input type="text" onChange={e=>setNumberLogin(e.target.value)} className="form-control" name="password_1" id="password_1"*/}
                                                {/*       required/>*/}
                                            </div>
                                            <div className="form-group mb-5">
                                                <label>Şifrənizi daxil edin *</label>
                                                <input type="text" onChange={e=>setPasswordLogin(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                       required/>
                                            </div>
                                            <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                <input type="checkbox" className="custom-checkbox" id="remember" name="remember"
                                                       required=""/>
                                                <label htmlFor="remember">Məni xatırla</label>
                                                <a href="#" onClick={()=> handleForgotPasswordInput()}>Parolu unutdunuz?</a>
                                            </div>


                                            <p onClick={()=> handleLoginInput()} className="btnColor">Daxil ol</p>
                                        </div>

                                        <div className="tab-pane" id="sign-up">
                                            <div className="form-group">
                                                <label>Nömrənizi daxil edin *</label>
                                                <PhoneInput
                                                    country="az"
                                                    inputStyle={{width:"100%"}}
                                                    value={phone}
                                                    onChange={handleOnChange}/>
                                            </div>
                                            <div className="form-group mb-5">
                                                <label>Şifrənizi daxil edin *</label>
                                                <input type="text" onChange={e=>setPassword(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                       required/>
                                            </div>
                                            <div className="form-group mb-5">
                                                <label>Şifrəni təkrar daxil edin *</label>
                                                <input type="text" onChange={e=>setPassword2(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                       required/>
                                            </div>
                                            <p>Şəxsi məlumatlarınız bu veb-saytda təcrübənizi dəstəkləmək, hesabınıza girişi idarə etmək və məxfilik siyasətimizdə təsvir olunan digər məqsədlər üçün istifadə olunacaq.</p>
                                            <div className="row mb-5">
                                                <div className="col-md-4">
                                                    <input type="checkbox" className="custom-checkbox" id="remember2" name="remember" onChange={e=>setIsStore(e.target.checked)}
                                                           required=""/>
                                                    <label htmlFor="remember">Mağaza</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <input type="checkbox" className="custom-checkbox" id="remember4" name="remember" required=""/>
                                                    <label htmlFor="remember">İstifadəçilər</label>
                                                </div>
                                            </div>
                                            <p onClick={handleRegisterInput} className="btnColor">Qeydiyyatdan keç</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div id="myModal" className="modal" style={{display:forgotPassword}}>*/}
                    {/*    <div className="modal-content">*/}
                    {/*        <span className="close" onClick={forgotPasswordFunc()}>&times;</span>*/}
                    {/*        <div className="login-popup">*/}
                    {/*            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">*/}
                    {/*                <div className="tab-content">*/}
                    {/*                    <div className="tab-pane active" id="sign-in">*/}
                    {/*                        <div className="form-group mb-5">*/}
                    {/*                            <label>Parolu unutdunuz?</label>*/}
                    {/*                            <input type="text" onChange={e=>setNumberLogin(e.target.value)} className="form-control" name="password_1" id="password_1"*/}
                    {/*                                   required/>*/}
                    {/*                        </div>*/}
                    {/*                        <a href="#" className="btn btn-primary" onClick={()=> handleLoginInput()}>Codu daxil edin</a>*/}
                    {/*                    </div>*/}

                    {/*                    <div className="tab-pane" id="sign-up">*/}
                    {/*                        <div className="form-group">*/}
                    {/*                            <label>Nömrənizi daxil edin *</label>*/}
                    {/*                            <PhoneInput*/}
                    {/*                                country="az"*/}
                    {/*                                inputStyle={{width:"100%"}}*/}
                    {/*                                value={phone}*/}
                    {/*                                onChange={handleOnChange}/>*/}
                    {/*                            /!*<input type="text" onChange={e=>setNumber(e.target.value)} className="form-control" name="password_1" id="password_1"*!/*/}
                    {/*                            /!*       required/>*!/*/}
                    {/*                        </div>*/}
                    {/*                        <div className="form-group mb-5">*/}
                    {/*                            <label>Şifrənizi daxil edin *</label>*/}
                    {/*                            <input type="text" onChange={e=>setPassword(e.target.value)} className="form-control" name="password_1" id="password_1"*/}
                    {/*                                   required/>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="form-group mb-5">*/}
                    {/*                            <label>Şifrəni təkrar daxil edin *</label>*/}
                    {/*                            <input type="text" onChange={e=>setPassword2(e.target.value)} className="form-control" name="password_1" id="password_1"*/}
                    {/*                                   required/>*/}
                    {/*                        </div>*/}
                    {/*                        <p>Şəxsi məlumatlarınız bu veb-saytda təcrübənizi dəstəkləmək, hesabınıza girişi idarə etmək və məxfilik siyasətimizdə təsvir olunan digər məqsədlər üçün istifadə olunacaq.</p>*/}

                    {/*                        <div className="form-checkbox d-flex align-items-center justify-content-between">*/}
                    {/*                            <input type="checkbox" className="custom-checkbox" id="remember2" name="remember" onChange={e=>setIsStore(e.target.checked)}*/}
                    {/*                                   required=""/>*/}
                    {/*                            <label htmlFor="remember">Mağaza</label>*/}
                    {/*                        </div>*/}
                    {/*                        /!* <div className="form-checkbox d-flex align-items-center justify-content-between">*/}
                    {/*                        <input type="checkbox" className="custom-checkbox" id="remember3" onChange={e=>setIsVendor(e.target.checked)} name="remember"*/}
                    {/*                               required=""/>*/}
                    {/*                        <label htmlFor="remember">Satıcı</label>*/}
                    {/*                    </div> *!/*/}
                    {/*                        <p onClick={handleRegisterInput} className="btnColor">Qeydiyyatdan keç</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div id="myModal" className="modal" style={{display:showMeNumber}}>
                        <div className="modal-content">
                            <span className="close" onClick={showMeFunc}>&times;</span>
                            <div className="login-popup">
                                <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="sign-in">
                                            <div className="form-group mb-5">
                                                <label>Codu daxil edin *</label>
                                                <input type="text" onChange={e=>setNumberLogin(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                       required/>
                                            </div>
                                            <a href="#" className="btn btn-primary" onClick={()=> handleLoginInput()}>Codu daxil edin</a>
                                        </div>

                                        <div className="tab-pane" id="sign-up">
                                            <div className="form-group">
                                                <label>Nömrənizi daxil edin *</label>
                                                <PhoneInput
                                                    country="az"
                                                    inputStyle={{width:"100%"}}
                                                    value={phone}
                                                    onChange={handleOnChange}/>
                                                {/*<input type="text" onChange={e=>setNumber(e.target.value)} className="form-control" name="password_1" id="password_1"*/}
                                                {/*       required/>*/}
                                            </div>
                                            <div className="form-group mb-5">
                                                <label>Şifrənizi daxil edin *</label>
                                                <input type="text" onChange={e=>setPassword(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                       required/>
                                            </div>
                                            <div className="form-group mb-5">
                                                <label>Şifrəni təkrar daxil edin *</label>
                                                <input type="text" onChange={e=>setPassword2(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                       required/>
                                            </div>
                                            <p>Şəxsi məlumatlarınız bu veb-saytda təcrübənizi dəstəkləmək, hesabınıza girişi idarə etmək və məxfilik siyasətimizdə təsvir olunan digər məqsədlər üçün istifadə olunacaq.</p>

                                            <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                <input type="checkbox" className="custom-checkbox" id="remember2" name="remember" onChange={e=>setIsStore(e.target.checked)}
                                                       required=""/>
                                                <label htmlFor="remember">Mağaza</label>
                                            </div>
                                            {/* <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                <input type="checkbox" className="custom-checkbox" id="remember3" onChange={e=>setIsVendor(e.target.checked)} name="remember"
                                                       required=""/>
                                                <label htmlFor="remember">Satıcı</label>
                                            </div> */}
                                            <p onClick={handleRegisterInput} className="btnColor">Qeydiyyatdan keç</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-middle">
                        <div className="container">
                            <div className="header-left mr-md-4">
                                <a href="#" className="mobile-menu-toggle text-white w-icon-hamburger" aria-label="menu-toggle">
                                </a>
                                <a href="/" className="logo ml-lg-0">
                                    <img src={logoTitle} alt="logo" width="82" height="45"/>
                                </a>
                                <form method="get" action="#"
                                      className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex">
                                    <div className="select-box bg-white" style={{zIndex:"9"}}>

                                        <Select
                                            name="colors"
                                            styles={style}
                                            options={optionsTitle}
                                            placeholder={"kateqoriya seç"}
                                            classNamePrefix="select"
                                            components={{
                                                IndicatorSeparator: () => null
                                            }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <input type="text" className="form-control bg-white" name="search" id="search" onChange={e=>setSearchData(e.target.value)}
                                           placeholder="Axtarın..." required/>
                                    <button className="btn btn-search" type="button" onClick={()=>mainSearch()}><i className="w-icon-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="header-right ml-4">
                                <div className="header-call d-xs-show d-lg-flex align-items-center">
                                    <a href="tel:#" className="w-icon-call text-white"></a>
                                    <div className="call-info d-lg-show">
                                        <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-white mb-0">
                                            <a href="mailto:#" className="text-capitalize text-white">Bizə zəng</a> </h4>
                                        <a href="tel:#" className="phone-number font-weight-bolder text-white ls-50">{phoneNumberItem}</a>
                                    </div>
                                </div>
                                <a className="wishlist label-down link d-xs-show" href="/wishlist">
                                    <i className="w-icon-heart"></i>

                                    <span className="wishlist-label d-lg-show">Bəyəndiklərim</span>
                                </a>
                                <a className="compare label-down link d-xs-show" href="/compare">
                                    <i className="w-icon-compare"></i>
                                    <span className="compare-label d-lg-show">Müqayisə</span>
                                </a>
                                <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                                    <div className="cart-overlay"></div>
                                    <a href="#" className="cart-toggle label-down link text-white">
                                        <i className="w-icon-cart">
                                            <span className="cart-count">{addToCardData.length}</span>
                                        </i>
                                        <span className="cart-label">Səbət</span>
                                    </a>
                                    <div className="dropdown-box">
                                        <div className="cart-header">
                                            <span>Alış-veriş səbəti</span>
                                            <a href="#" className="btn-close">Bağla<i className="w-icon-long-arrow-right"></i></a>
                                        </div>

                                        <div className="products">
                                            {addToCardData.map(e=>(
                                                <div className="product product-cart">
                                                    <div className="product-detail">
                                                        <a href="product-default.html" className="product-name">{e.product.title}</a>
                                                        <div className="price-box">
                                                            <span className="product-quantity">{e.quantity}</span>
                                                            <span className="product-price">₼ {e.product.price}</span>
                                                        </div>
                                                    </div>
                                                    <figure className="product-media">
                                                        <a href="product-default.html">
                                                            <img src={e.product.main_image} alt="product" height="84"
                                                                 width="94"/>
                                                        </a>
                                                    </figure>
                                                    <button className="btn btn-link btn-close" aria-label="button" onClick={()=>{deleteCardProduct({quantity:e.quantity,productId:e.id})}}>
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                </div>
                                            ))}

                                        </div>

                                        <div className="cart-total">
                                            <label>Ara cəmi:</label>
                                            <span className="price">{allCardPrice}</span>
                                        </div>

                                        <div className="cart-action">
                                            <a href="/card" className="btn btn-dark btn-outline btn-rounded">SƏBƏBƏTƏ BAXIN</a>
                                            <a href="/checkout" className="btn btn-primary  btn-rounded">Yoxla</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-bottom sticky-content fix-top sticky-header">
                        <div className="container">
                            <div className="inner-wrap">
                                <div className="header-left">
                                    <div className="dropdown category-dropdown has-border" data-visible="true">
                                        <a href="#" className="category-toggle" role="button" data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="true" data-display="static"
                                           title="Browse Categories">
                                            <i className="w-icon-category"></i>
                                            <span>BÜTÜN KATEQORİYALAR</span>
                                        </a>
                                        <div className="dropdown-box" >
                                            <ul className="menu vertical-menu category-menu" style={{zIndex:"1"}}>
                                                {logoPost.map(item => (
                                                    <li>
                                                        <a href="#">
                                                            <img src={`http://34.125.5.25${item.icon}`} width="20px" height="20px"/> {item.title}
                                                            <ul className="megamenu" >
                                                                <li>
                                                                    {item.sub_categories.map(e=>(
                                                                        <div>
                                                                            <h4 className="menu-title">{e.title}</h4>
                                                                            <hr className="divider"/>
                                                                            <ul>
                                                                                {e.sub_sub_categories.map(e=>(<li><a href={`/shop/${e.id}`}>{e.title}</a></li>))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}
                                                                </li>
                                                                <li>
                                                                    <div className="menu-banner banner-fixed menu-banner4">
                                                                        <figure>
                                                                            <img src="assets/images/menu/banner-4.jpg"
                                                                                 alt="Menu Banner"
                                                                                 width="235" height="433"/>
                                                                        </figure>
                                                                        <div className="banner-content">
                                                                            <h4 className="banner-subtitle font-weight-normal">Deals
                                                                                Of The
                                                                                Week</h4>
                                                                            <h3 className="banner-title text-white">Save On Smart
                                                                                EarPhone
                                                                            </h3>
                                                                            <div
                                                                                className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                                                                                20% Off
                                                                            </div>
                                                                            <a href="shop-banner-sidebar.html"
                                                                               className="btn btn-white btn-outline btn-sm btn-rounded">Shop
                                                                                Now</a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <nav className="main-nav">
                                        <ul className="menu active-underline">
                                            <li>
                                                <a href="/">Ana səhifə</a>
                                            </li>
                                            <li>
                                                <a href="/shop">Mağaza</a>
                                            </li>
                                            <li>
                                                <a href="/vendor">Satıcılar</a>
                                            </li>
                                            <li>
                                                <a href="/about">Haqqımızda</a>
                                            </li>
                                            <li>
                                                <a href="/contact">Əlaqə</a>
                                            </li>
                                            <li>
                                                <a href="/faq">Faq</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right">
                                    <a href="/more-products" className="d-xl-show" style={{color:'#cd2027'}}>Endirimli Məhsullar</a>
                                    {/* <a href="/order" className="d-xl-show"><i className="w-icon-map-marker mr-1"></i>Sifarişi izlə</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        </>
    )}