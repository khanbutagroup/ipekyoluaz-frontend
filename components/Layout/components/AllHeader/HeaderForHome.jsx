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
import {addToCard} from "../../../../services/card/addToCard";
import {logo} from "../../../../services/logo";
import {urlTopForImg} from "../../../../services/apiUrl/urlTopForImg";
import {headerText} from "../../../../services/headerText";
import {productFilter} from "../../../../services/productFilter";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import { homeProductFilter } from '../../../../store/actions';
import axios from 'axios'
import styles from '../../../../public/assets/css/mainForHome.module.css'
import { verifyNumber } from "../../../../services/auth/verifyNumber";


export default function HeaderForHome(){
    const dispatch = useDispatch();
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
    const [userId, setUserId] = useState(null);

    const [hiddenText, setHiddenText] = useState(null);


    const [situtaion, setSituation] = useState("none")

    useEffect(() => {
        if (products.length > 0){
            setSituation("block")
        }else{
            setSituation("none")
        }
    })

    



    const searchAPI = "https://api.ipekyolu.az/api/product-search/"
    const searchCategoryAPI= "https://api.ipekyolu.az/api/product-filter/"



    const handleLoginInput = () =>{
        let data = {number:number,
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

    const handleVerifyInput = () =>{
        let data = {
            id:userId,
            code:numberLogin}
        verifyNumber(data)
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
        if (localStorage.getItem('username') && localStorage.getItem('token') ){
            setHiddenText("none")
        }else {
            setHiddenText("")
        }
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
            is_vendor:isVendor,
            is_store:isStore,
        }
        register(data)
            .then(items => {
                setUserId(items.data.id)
                showMeFunc()
                showMeNumberFunc()
            }).catch(e =>{
            console.log(e)
        })
        console.log(data)
    }
    const handleOnChange = (value) => {
        setNumber(`+${value}`);
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

    // SEARCH FUNCTIONALITY
    const [searchData, setSearchData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [categoryId, setCategoryId] = useState("")
    const [products, setProducts] = useState([])
    const [url, setUrl] = useState("")




    
    useEffect(() => {

        console.log(window.location.href.split('/')[3],"dsads");
        setUrl(window.location.href.split('/')[3]);

        if (categoryId == ""){
            setProducts(searchData)
        }else{
            const results = searchData?.filter(product => product.category == categoryId)
            setProducts(results)
        }
    },[searchData, categoryId])


    
    
    const searchInput = (e) => {
        const body = {title : e.target.value}
        body.title != "" && axios.post(searchAPI, body)
            .then(res => setSearchData(res.data.results))
            .catch(err => err)
        

        categoryData.map((cd)=> (
            setCategoryId(cd.category.id)
        ))
    }

  
  

    const getCategory = (selectedOptions) => {
        const body = {category : selectedOptions.label}
        axios.post(searchCategoryAPI, body)
            .then(res => setCategoryData(res.data.results))
            .catch(err => err)    
    }
    
    
   




    const router = useRouter()
    const myAccountForUserOrVendor = () =>{
       if (localStorage.getItem('username') && localStorage.getItem('token') ){
           router.push('/my-account-for-user')
           router.push('/my-account-for-vendor')
       }else{
           setShowMe("block")
       }
    }


    const addToCardData = useSelector((state) => state.addToCardData);
    let cardPrice
    addToCardData.map(c=>cardPrice+=Number(c.final_price))
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
            <header className="header" style={{"position": "relative"}}>
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <p className="welcome-msg">{headerTextTitle}</p>
                        </div>
                        <div className="header-right">
                            <span className="divider d-lg-show"></span>
                            <a href="/contact-us" style={{color:"white", cursor:"pointer"}} className="d-lg-show" >Bizimlə Əlaqə</a>
                            <a href="javascript:void(0)" style={{color:"white", cursor:"pointer" }}onClick={()=>{myAccountForUserOrVendor()}} className="d-lg-show">Hesabım</a>
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
                                            <a href="#"  onClick={()=> handleForgotPasswordInput()}>Parolu unutdunuz?</a>
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
                                            {/* <div className="col-md-4">
                                                <input type="checkbox" className="custom-checkbox" id="remember3" onChange={e=>setIsVendor(e.target.checked)} name="remember"
                                                       required=""/>
                                                <label htmlFor="remember">Satıcı</label>
                                            </div> */}
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
                                        <a href="#" className="btn btn-primary" onClick={()=> handleVerifyInput()}>Codu daxil edin</a>
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
                {/*                            <input type="checkbox" className="custom-checkbox" id="remember3" onChange={e=>setIsVendor(e.target.checked)} name="remember"*/}
                {/*                                   required=""/>*/}
                {/*                            <label htmlFor="remember">Satıcı</label>*/}
                {/*                        </div> *!/*/}
                {/*                        <p onClick={handleRegisterInput} className="btnColor">Qeydiyyatdan keç</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="header-middle">
                    <div className="container" style={{position: "relative"}}>
                        
                        <div className={styles.searchContainer} style={{display: situtaion}}>
                            {products.map((product) => (
                                <div className={styles.searchItem}>
                                <div className={styles.itemImg}>
                                    <img src={product.main_image} width="100%" height="80% !important"/>
                                </div>
                                <div className={styles.rightSide}>
                                    <div className={styles.title}>{product.title}</div>
                                    <div className={styles.description}>{product.description}</div>
                                </div>
                                </div>
                                
                            ))}
                            
                            
                        </div>
                        <div className="header-left mr-md-4">
                            <a href="#" className="mobile-menu-toggle text-white w-icon-hamburger" aria-label="menu-toggle">
                            </a>
                            <a href="/" className="logo ml-lg-0">
                                <img src={logoTitle} alt="logo" width="150" height="150"/>
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
                                        onChange={getCategory}
                                    />
                                </div>
                                <input type="text" className="form-control bg-white" onChange={(e) => searchInput(e)} name="search" id="search"
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

                <div className="header-bottom sticky-content fix-top sticky-header has-dropdown" style={{position:"relative"}}>
                    <div className="container">
                        <div className="inner-wrap">
                            <div className="header-left">
                                <div className="dropdown category-dropdown has-border show-dropdown" data-visible="true">
                                    <a href="#" className="category-toggle text-dark bg-white text-capitalize" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                                       data-display="static" title="Browse Categories">
                                        <i className="w-icon-category"></i>
                                        <span>BÜTÜN KATEQORİYALAR</span>
                                    </a>

                                    {/*<div className="dropdown-box text-default" style={{zIndex:"1"}}>*/}
                                    {/*    <ul className="menu vertical-menu category-menu">*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-tshirt2"></i>Fashion*/}
                                    {/*            </a>*/}
                                    {/*            <ul className="megamenu">*/}
                                    {/*                <li>*/}
                                    {/*                    <h4 className="menu-title">Women</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">New Arrivals</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Best Sellers</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Trending</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Clothing</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Shoes</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Bags</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Accessories</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Jewlery &*/}
                                    {/*                            Watches</a></li>*/}

                                    {/*                    </ul>*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <h4 className="menu-title">Men</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">New Arrivals</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Best Sellers</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Trending</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Clothing</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Shoes</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Bags</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Accessories</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Jewlery &*/}
                                    {/*                            Watches</a></li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <div className="banner-fixed menu-banner menu-banner2">*/}
                                    {/*                        <figure>*/}
                                    {/*                            <img src="assets/images/menu/banner-2.jpg" alt="Menu Banner"*/}
                                    {/*                                 width="235" height="347"/>*/}
                                    {/*                        </figure>*/}
                                    {/*                        <div className="banner-content">*/}
                                    {/*                            <div className="banner-price-info mb-1 ls-normal">Get up to*/}
                                    {/*                                <strong*/}
                                    {/*                                    className="text-primary text-uppercase">20%Off</strong>*/}
                                    {/*                            </div>*/}
                                    {/*                            <h3 className="banner-title ls-normal">Hot Sales</h3>*/}
                                    {/*                            <a href="demo8-shopShop.html"*/}
                                    {/*                               className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right">*/}
                                    {/*                                Shop Now<i className="w-icon-long-arrow-right"></i>*/}
                                    {/*                            </a>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-home"></i>Home & Garden*/}
                                    {/*            </a>*/}
                                    {/*            <ul className="megamenu">*/}
                                    {/*                <li>*/}
                                    {/*                    <h4 className="menu-title">Bedroom</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Beds, Frames &*/}
                                    {/*                            Bases</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Dressers</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Nightstands</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Kids Beds &*/}
                                    {/*                            Headboards</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Armoires</a></li>*/}
                                    {/*                    </ul>*/}

                                    {/*                    <h4 className="menu-title mt-1">Living Room</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Coffee Tables</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Chairs</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Tables</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Futons & Sofa*/}
                                    {/*                            Beds</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Cabinets &*/}
                                    {/*                            Chests</a></li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <h4 className="menu-title">Office</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Office Chairs</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Desks</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Bookcases</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">File Cabinets</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Breakroom*/}
                                    {/*                            Tables</a></li>*/}
                                    {/*                    </ul>*/}

                                    {/*                    <h4 className="menu-title mt-1">Kitchen & Dining</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Dining Sets</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Kitchen Storage*/}
                                    {/*                            Cabinets</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Bashers Racks</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Dining Chairs</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Dining Room*/}
                                    {/*                            Tables</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Bar Stools</a></li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <div className="menu-banner banner-fixed menu-banner3">*/}
                                    {/*                        <figure>*/}
                                    {/*                            <img src="assets/images/menu/banner-3.jpg" alt="Menu Banner"*/}
                                    {/*                                 width="235" height="461"/>*/}
                                    {/*                        </figure>*/}
                                    {/*                        <div className="banner-content">*/}
                                    {/*                            <h4*/}
                                    {/*                                className="banner-subtitle font-weight-normal text-white mb-1">*/}
                                    {/*                                Restroom</h4>*/}
                                    {/*                            <h3*/}
                                    {/*                                className="banner-title font-weight-bolder text-white ls-normal">*/}
                                    {/*                                Furniture Sale</h3>*/}
                                    {/*                            <div*/}
                                    {/*                                className="banner-price-info text-white font-weight-normal ls-25">*/}
                                    {/*                                Up to <span*/}
                                    {/*                                className="text-secondary text-uppercase font-weight-bold">25%*/}
                                    {/*                                Off</span></div>*/}
                                    {/*                            <a href="demo8-shopShop.html"*/}
                                    {/*                               className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right">*/}
                                    {/*                                Shop Now<i className="w-icon-long-arrow-right"></i>*/}
                                    {/*                            </a>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-electronics"></i>Electronics*/}
                                    {/*            </a>*/}
                                    {/*            <ul className="megamenu">*/}
                                    {/*                <li>*/}
                                    {/*                    <h4 className="menu-title">LaptopsBComputers</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Desktop*/}
                                    {/*                            Computers</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Monitors</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Laptops</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Hard Drives*/}
                                    {/*                            Storage</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Computer*/}
                                    {/*                            Accessories</a></li>*/}
                                    {/*                    </ul>*/}

                                    {/*                    <h4 className="menu-title mt-1">TV  Video</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">TVs</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Home Audio*/}
                                    {/*                            Speakers</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Projectors</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Media Streaming*/}
                                    {/*                            Devices</a></li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <h4 className="menu-title">Digital Cameras</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Digital SLR*/}
                                    {/*                            Cameras</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Sports & Action*/}
                                    {/*                            Cameras</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Camera Lenses</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Photo Printer</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Digital Memory*/}
                                    {/*                            Cards</a></li>*/}
                                    {/*                    </ul>*/}

                                    {/*                    <h4 className="menu-title mt-1">Cell Phones</h4>*/}
                                    {/*                    <hr className="divider"/>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Carrier Phones</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Unlocked Phones</a>*/}
                                    {/*                        </li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Phone & Cellphone*/}
                                    {/*                            Cases</a></li>*/}
                                    {/*                        <li><a href="shopShop-fullwidth-banner.html">Cellphone*/}
                                    {/*                            Chargers</a></li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <div className="menu-banner banner-fixed menu-banner4">*/}
                                    {/*                        <figure>*/}
                                    {/*                            <img src="assets/images/menu/banner-4.jpg" alt="Menu Banner"*/}
                                    {/*                                 width="235" height="433"/>*/}
                                    {/*                        </figure>*/}
                                    {/*                        <div className="banner-content">*/}
                                    {/*                            <h4 className="banner-subtitle font-weight-normal">Deals Of The*/}
                                    {/*                                Week</h4>*/}
                                    {/*                            <h3 className="banner-title text-white">Save On Smart EarPhone*/}
                                    {/*                            </h3>*/}
                                    {/*                            <div*/}
                                    {/*                                className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">*/}
                                    {/*                                20% Off*/}
                                    {/*                            </div>*/}
                                    {/*                            <a href="demo8-shopShop.html"*/}
                                    {/*                               className="btn btn-white btn-outline btn-sm btn-rounded">Shop*/}
                                    {/*                                Now</a>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-furniture"></i>Furniture*/}
                                    {/*            </a>*/}
                                    {/*            <ul className="megamenu type2">*/}
                                    {/*                <li className="row">*/}
                                    {/*                    <div className="col-md-3 col-lg-3 col-6">*/}
                                    {/*                        <h4 className="menu-title">Furniture</h4>*/}
                                    {/*                        <hr className="divider"/>*/}
                                    {/*                        <ul>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Sofas & Couches</a>*/}
                                    {/*                            </li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Armchairs</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Bed Frames</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Beside Tables</a>*/}
                                    {/*                            </li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Dressing Tables</a>*/}
                                    {/*                            </li>*/}
                                    {/*                        </ul>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="col-md-3 col-lg-3 col-6">*/}
                                    {/*                        <h4 className="menu-title">Lighting</h4>*/}
                                    {/*                        <hr className="divider"/>*/}
                                    {/*                        <ul>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Light Bulbs</a>*/}
                                    {/*                            </li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Lamps</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Celling Lights</a>*/}
                                    {/*                            </li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Wall Lights</a>*/}
                                    {/*                            </li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Bathroom*/}
                                    {/*                                Lighting</a></li>*/}
                                    {/*                        </ul>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="col-md-3 col-lg-3 col-6">*/}
                                    {/*                        <h4 className="menu-title">Home Accessories</h4>*/}
                                    {/*                        <hr className="divider"/>*/}
                                    {/*                        <ul>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Decorative*/}
                                    {/*                                Accessories</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Candals &*/}
                                    {/*                                Holders</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Home Fragrance</a>*/}
                                    {/*                            </li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Mirrors</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Clocks</a></li>*/}
                                    {/*                        </ul>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="col-md-3 col-lg-3 col-6">*/}
                                    {/*                        <h4 className="menu-title">Garden & Outdoors</h4>*/}
                                    {/*                        <hr className="divider"/>*/}
                                    {/*                        <ul>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Garden*/}
                                    {/*                                Furniture</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Lawn Mowers</a>*/}
                                    {/*                            </li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Pressure*/}
                                    {/*                                Washers</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">All Garden*/}
                                    {/*                                Tools</a></li>*/}
                                    {/*                            <li><a href="shopShop-fullwidth-banner.html">Outdoor Dining</a>*/}
                                    {/*                            </li>*/}
                                    {/*                        </ul>*/}
                                    {/*                    </div>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="row">*/}
                                    {/*                    <div className="col-6">*/}
                                    {/*                        <div className="banner banner-fixed menu-banner5 br-xs">*/}
                                    {/*                            <figure>*/}
                                    {/*                                <img src="assets/images/menu/banner-5.jpg" alt="Banner"*/}
                                    {/*                                     width="410" height="123"*/}
                                    {/*                                     style={{backgroundColor: '#D2D2D2'}}/>*/}
                                    {/*                            </figure>*/}
                                    {/*                            <div className="banner-content text-right y-50">*/}
                                    {/*                                <h4*/}
                                    {/*                                    className="banner-subtitle font-weight-normal text-default text-capitalize">*/}
                                    {/*                                    New Arrivals</h4>*/}
                                    {/*                                <h3*/}
                                    {/*                                    className="banner-title font-weight-bolder text-capitalize ls-normal">*/}
                                    {/*                                    Amazing Sofa</h3>*/}
                                    {/*                                <div*/}
                                    {/*                                    className="banner-price-info font-weight-normal ls-normal">*/}
                                    {/*                                    Starting at <strong>$125.00</strong></div>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                    <div className="col-6">*/}
                                    {/*                        <div className="banner banner-fixed menu-banner5 br-xs">*/}
                                    {/*                            <figure>*/}
                                    {/*                                <img src="assets/images/menu/banner-6.jpg" alt="Banner"*/}
                                    {/*                                     width="410" height="123"*/}
                                    {/*                                     style={{backgroundColor: '#9F9888'}}/>*/}
                                    {/*                            </figure>*/}
                                    {/*                            <div className="banner-content y-50">*/}
                                    {/*                                <h4*/}
                                    {/*                                    className="banner-subtitle font-weight-normal text-white text-capitalize">*/}
                                    {/*                                    Best Seller</h4>*/}
                                    {/*                                <h3*/}
                                    {/*                                    className="banner-title font-weight-bolder text-capitalize text-white ls-normal">*/}
                                    {/*                                    Chair Lamp</h3>*/}
                                    {/*                                <div*/}
                                    {/*                                    className="banner-price-info font-weight-normal ls-normal text-white">*/}
                                    {/*                                    From <strong>$165.00</strong></div>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-heartbeat"></i>Healthy & Beauty*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-gift"></i>Gift Ideas*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-gamepad"></i>Toy & Games*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-ice-cream"></i>Cooking*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-ios"></i>Smart Phones*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-camera"></i>Cameras & Photo*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="shopShop-fullwidth-banner.html">*/}
                                    {/*                <i className="w-icon-ruby"></i>Accessories*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*        <li>*/}
                                    {/*            <a href="demo8-shopShop.html" className="font-weight-bold text-uppercase ls-25">*/}
                                    {/*                View All Categories<i className="w-icon-angle-right"></i>*/}
                                    {/*            </a>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}

                                    <div className="dropdown-box text-default" style={{zIndex:"4",display:url === "vendor" || url === "contact" || url === "vendorStore" || url === "my-account-for-vendor" || url === "shop" || url === "compare" ? "none" : "" }}>
                                        <ul className="menu vertical-menu category-menu" style={{zIndex:"9"}}>
                                            {logoPost.map(item => (
                                                console.log(item.category_reklam.image,"fafa"),
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        
                                                        <span>
                                                        {item.title}
                                                        </span>
                                                        <ul className="megamenu" style={{height:"500px"}}>
                                                            <li style={{overflow:"scroll"}}>
                                                                {item.sub_categories.map(e=>(
                                                                    <div>
                                                                        <h4 className="menu-title">{e.title}</h4>
                                                                        <hr className="divider"/>
                                                                        <ul>
                                                                            {e.sub_sub_categories.map(e=>(<li><a href={`/shop/${item.id}`}>{e.title}</a></li>))}
                                                                        </ul>
                                                                    </div>
                                                                ))}

                                                            </li>
                                                            <li>
                                                                {/* ŞƏKİLLL */}
                                                                <div className="menu-banner banner-fixed menu-banner4">
                                                                    <figure>
                                                                        <img src={`https://api.ipekyolu.az${item.category_reklam.image}`}
                                                                             alt="Menu Banner"
                                                                             width="235" height="433"/>
                                                                    </figure>
                                                                    
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
                                            <a href="/shop">Məhsullar</a>
                                        </li>
                                        <li>
                                            <a href="/vendor">Mağazalar</a>
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