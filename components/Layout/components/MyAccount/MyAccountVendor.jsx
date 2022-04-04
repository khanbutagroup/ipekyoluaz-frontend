import React, {useEffect, useState} from "react";
import {userProducts} from "../../../../services/myAccount/userProducts";
import {deleteProduct} from "../../../../services/products/deleteProduct";
import Link from 'next/link'
import MyAccountVendorDetails from "./MyAccountVendorDetails";
import Select from "react-select";
import {storeOrders} from "../../../../services/storeOrders";
import {allCities} from "../../../../services/address/allCities";
import {allRegions} from "../../../../services/address/allRegions";
import {allAvenues} from "../../../../services/address/allAvenues";
import {allStreets} from "../../../../services/address/allStreets";
import {allCategories} from "../../../../services/allCategories";
import {savaChangeVendorAccount} from "../../../../services/savaChangeVendorAccount";
import { MobileFooter } from "../MobileFooter/MobileFooter";
import axios from "axios";
import { useRouter } from "next/router";
import Modal from 'react-modal'
import styles from '../../../../public/assets/css/myAccountVendor.module.css'



export default function MyAccountVendor(){
    const router = useRouter()
    













    
    const [optionsTitle, optionsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        let options = []
        allCities()
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

    const [optionsHandleChange, optionsHandleChangeData] = useState([]);
    let handleChange = (selectedOptions) => {
        optionsHandleChangeData(selectedOptions)
    }

    const [optionsCategoria, optionsCategoriaData] = useState([]);
    useEffect(() => {
        let mounted = true;
        let options = []
        allCategories()
            .then(items => {
                if(mounted) {
                    const data = items.data.map(e=>{
                        options.push({value:e['id'], label:e['title']})
                    })
                    optionsCategoriaData(options)
                }
            })
        return () => mounted = false;
    }, [])

    const [optionsHandleChangeCategoria, optionsHandleChangeCategoriaData] = useState([]);
    let handleChangeCategoria = (selectedOptions) => {
        optionsHandleChangeCategoriaData(selectedOptions)
    }




    const [optionsRegions, optionsRegionsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        let options = []
        allRegions()
            .then(items => {
                if(mounted) {
                    const data = items.data.map(e=>{
                        options.push({value:e['id'], label:e['title']})
                    })
                    optionsRegionsData(options)
                }
            })
        return () => mounted = false;
    }, [])

    const [optionsHandleChangeRegions, optionsHandleChangeChangeRegionsData] = useState([]);
    let handleChangeRegions = (selectedOptions) => {
        optionsHandleChangeChangeRegionsData(selectedOptions)
    }

    const [optionsAvenues, optionsAvenuesData] = useState([]);
    const [optionsHandleChangeAvenues, optionsHandleChangeChangeAvenuesData] = useState([]);
    useEffect(() => {
        let mounted = true;
        let options = []
        allAvenues()
            .then(items => {
                if(mounted) {
                    const data = items.data.map(e=>{
                        options.push({value:e['id'], label:e['title']})
                    })
                    optionsAvenuesData(options)
                }
            })
        return () => mounted = false;
    }, [])
    let handleAvenues = (selectedOptions) => {
        optionsHandleChangeChangeAvenuesData(selectedOptions)
    }

    const [optionsStreets, optionsStreetsData] = useState([]);
    const [optionsHandleChangeStreets, optionsHandleChangeChangeStreetsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        let options = []
        allStreets()
            .then(items => {
                if(mounted) {
                    const data = items.data.map(e=>{
                        options.push({value:e['id'], label:e['title']})
                    })
                    optionsStreetsData(options)
                }
            })
        return () => mounted = false;
    }, [])
    let handleStreets = (selectedOptions) => {
        optionsHandleChangeChangeStreetsData(selectedOptions)
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

    const [iconTitle, iconData] = useState([{value:4, label:'Whatsapp'},{value:3, label:'Telegram'},{value:2, label:'Instagram'},{value:1, label:'Facebook'}]);
    const [selectedIconItem, setSelectedIcon] = useState(null);
    let iconChange = (selectedIcon) => {
        setSelectedIcon(selectedIcon)
    }
    const [createListItem, setCreateList] = useState([{selectedIconItem:null,iconUrl:null}]);
    const [iconUrl1, setIconUrl1] = useState(null);
    const [iconUrl2, setIconUrl2] = useState(null);
    const [iconUrl3, setIconUrl3] = useState(null);
    const [iconUrl4, setIconUrl4] = useState(null);

    const [iconChange1T, iconChange1] = useState(null);
    const [iconChange2T, iconChange2] = useState(null);
    const [iconChange3T, iconChange3] = useState(null);
    const [iconChange4T, iconChange4] = useState(null);

    let fhg = []
    const createInput = () =>{
        fhg.push({selectedIconItem:"selectedIconItem.label",iconUrl:"iconUrl"})
        setSelectedIcon(null)
        setIconUrl(null)
        console.log(fhg)
    }
    const logout = () =>{
        localStorage.removeItem("token")
        localStorage.removeItem('username')
        localStorage.removeItem("userData")
        localStorage.removeItem("userId")


        router.push('/')
    }
    let windowPassword,
        windowPassword2,
        windowPassword3,
        windowName,
        windowLastName,
        windowPhoneNumber,
        windowEmail,
        windowImg1,
        windowImg2,
        windowOthersPlace
    if (typeof window !== 'undefined' && localStorage.getItem('userData')){
        //JSON.parse(localStorage.getItem('userData')).is_store
        windowPassword =  JSON.parse(localStorage.getItem('userData')).address ?  JSON.parse(localStorage.getItem('userData')).address : null
        windowName = JSON.parse(localStorage.getItem('userData')).name ? JSON.parse(localStorage.getItem('userData')).name : null
        windowPhoneNumber = JSON.parse(localStorage.getItem('userData')).number ? JSON.parse(localStorage.getItem('userData')).number : null
        windowEmail = JSON.parse(localStorage.getItem('userData')).email ? JSON.parse(localStorage.getItem('userData')).email : null
        windowImg2 = JSON.parse(localStorage.getItem('userData')).logo ? JSON.parse(localStorage.getItem('userData')).logo : null
        windowImg1 = JSON.parse(localStorage.getItem('userData')).cover_image ? JSON.parse(localStorage.getItem('userData')).cover_image : null
    }
    const [selectedFile1, setSelectedFile1] = useState();
    const [selectedFile2, setSelectedFile2] = useState();
    const [password3, setPassword3] = useState(windowPassword3);
    const [password2, setPassword2] = useState(windowPassword2);
    const [password, setPassword] = useState(windowPassword);
    const [name, setName] = useState(windowName);
    const [lastName, setLastName] = useState(windowLastName);
    const [phoneNumber, setPhoneNumber] = useState(windowPhoneNumber);
    const [email, setEmail] = useState(windowEmail);
    const [othersPlace, setOthersPlace] = useState(windowOthersPlace);


console.log(selectedFile1, "sekil")










// men yazdigim


const [userVendorData, setUserVendorData] = useState([])
const [addressAddtional, setAddressAddtional] = useState("")
const [avenue, setAvenue] = useState()
const [city, setCity] = useState()
const [coverImage, setCoverImage] = useState("")
const [logo, setLogo] = useState("")
const [shopName, setShopName] = useState("")
const [region, setRegion] = useState()
const [socialMedia1, setSocialMedia1] = useState(null)
const [socialMedia2, setSocialMedia2] = useState(null)
const [socialMedia3, setSocialMedia3] = useState(null)
const [socialMedia4, setSocialMedia4] = useState(null)
const [url1, setUrl1] = useState("")
const [url2, setUrl2] = useState("")
const [url3, setUrl3] = useState("")
const [url4, setUrl4] = useState("")
const [street, setStreet] = useState()
const [emailUser, setEmailUser] = useState("")
console.log(userVendorData, "affa")
console.log(coverImage, "fafa")

useEffect(() => {
    getUserVendorData()
}, [])



const getUserVendorData = async() => {
    let token = localStorage.getItem("username")
    await axios.post('https://api.ipekyolu.az/api/auth/user-data/', {}, {"headers" : {'Authorization': `Bearer ${token}`}})
    .then(res => setUserVendorData(res.data))
    .catch(err => err)
}


const uploadImageCover = async(e) => {
    const fileForCoverLabel = window.URL.createObjectURL(e.target.files[0])
    const file = e.target.files[0]
    setSelectedFile1(fileForCoverLabel)
    const base64 = await convertBase64(file)
    setCoverImage(base64)

}


const uploadImageLogo = async(e) => {
    const fileForLogoLabel = window.URL.createObjectURL(e.target.files[0])
    const file = e.target.files[0]
    setSelectedFile2(fileForLogoLabel)
    const base64 = await convertBase64(file)
    setLogo(base64)
}

const convertBase64 = (file) => {
    return new Promise((resolve, reject) =>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror =() => {
            reject(error)
        }
    })
}



    const saveChangeVendor = () => {
        const id = localStorage.getItem("userId")
        const body = {
            "address": id,
            "address_addtional":addressAddtional,
            "avenue": avenue?.value,
            "city": city?.value,
            "cover_image": coverImage,
            "logo": logo,
            "name": shopName,
            "region": region?.value,
            "social_icons": [
                {
                    "social_media": socialMedia1?.value,
                    "url": url1
                },
                {
                    "social_media": socialMedia2?.value,
                    "url": url2
                },
                {
                    "social_media": socialMedia3?.value,
                    "url": url3
                },
                {
                    "social_media": socialMedia4?.value,
                    "url": url4
                },
            ],
            "street": street?.value,
            "email": emailUser


        }
        axios.patch(`https://api.ipekyolu.az/api/auth/user/${id}`, body)
        .then(res=> res.data)
        .catch(err => err)


        if (password, password2, password3 != "" && password2 == password3){
            const bodyPass = {
                number: userVendorData.number,
                code: password, 
                password: password2,
                confirm_password: password3
            }

            axios.post('https://api.ipekyolu.az/api/auth/reset-password/', bodyPass)
            .then(res => res.data)
            .catch(err => err)
        }

        // setTimeout(() => {
        //     router.reload()
        // }, 3000);

    }





    const [modalSit, setModalSit] = useState(false)


    const editProduct = async(id) => {
        setModalSit(true)
        await axios.get("https://api.ipekyolu.az/")
    }



































    const [storeOrdersTitle, storeOrdersData] = useState([]);
    useEffect(() => {
        storeOrders(localStorage.getItem("userId"))
            .then(items => {
                if (items.data.results){
                    //product_versions
                    items.data.results.map(e=>console.log(e.product_versions))
                }


            }).catch((e)=>{
            console.log(e)
        })
    }, [])

    let InputContainer,InputSelect
    if (typeof window !== 'undefined' ){
         InputContainer = window.document.getElementById("input-container");
         InputSelect = window.document.getElementById("input-Select");
    }


    const BtnAddFunc = () => {
            let inputList = window.document.createElement("input");
            inputList.setAttribute('class', 'InputField form-control form-control-md mb-0');
            inputList.setAttribute("style", "background-color:#ffff;");
            InputContainer.appendChild(inputList);
            let array = ["Linkedin","Whatsapp","Telegram","Instagram","Facebook"];
            let selectList = document.createElement("select");
            selectList.id = "mySelect";

            selectList.setAttribute('class', 'InputField');
            InputSelect.appendChild(selectList);
            for (let i = 0; i < array.length; i++) {
                let option = document.createElement("option");
                option.value = array[i];
                option.text = array[i];
                selectList.appendChild(option);
            }
    }

    const BtnCreateArrayFunc = () => {
            const inputs = InputContainer.querySelectorAll(".InputField");
            const inputSelect = InputSelect.querySelectorAll(".InputField");
            let selectAllData = []
            const array = [...inputs,...inputSelect].map(i => {
                selectAllData.push({value:i.value})
                console.log(selectAllData)
            });
            console.log(array);
    }


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
                    <div className="container pb-2">
                        <div className="page-wrapper">
                            <main className="main">
                                <div className="page-header">
                                    <div className="container">
                                        <h1 className="page-title mb-0">Satıcı üçün Hesab</h1>
                                    </div>
                                </div>
                                <nav className="breadcrumb-nav">
                                    <div className="container">
                                        <ul className="breadcrumb">
                                            <li><a href="/">Ana Səhifə</a></li>
                                            <li>Satıcı üçün hesab</li>
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
                                                    <a href="#account-details" className="nav-link"> Hesab məlumatları</a>
                                                </li>
                                                <hr className="product-divider"/>
                                                <li className="nav-item">
                                                    <a href="#account-downloads" className="nav-link">Məhsul əlavə et</a>
                                                </li>
                                                <hr className="product-divider"/>
                                                <li className="nav-item">
                                                    <a href="#account-orders2" className="nav-link">Bütün məhsullar</a>
                                                </li>
                                                <hr className="product-divider"/>
                                                <li className="nav-item">
                                                    <a href="#account-orders" className="nav-link">Sifarişlər</a>
                                                </li>
                                                <hr className="product-divider"/>
                                                <li className="link-item">
                                                    
                                                        <span style={{cursor: "pointer"}} className="nav-link span-link" onClick={logout}>Çıxış</span>
                                                    
                                                </li>
                                            </ul>

                                            <div className="tab-content mb-6">
                                                <div className="tab-pane active in" id="account-dashboard">
                                                    <p className="greeting">
                                                        <span>İpək Yoluna Xoş Gəldiniz!</span>
                                                        <a href="#" style={{marginLeft: "1%"}} className="text-primary">ÇIXIŞ</a>
                                                    </p>

                                                    

                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                            <a href="#account-details" className="link-to-tab">
                                                                <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-account">
                                                    <i className="w-icon-user"style={{fontSize:'52px'}}></i>
                                                </span>
                                                                    <div className="icon-box-content">
                                                                        <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Hesab məlumatları</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                            <a href="#account-downloads" className="link-to-tab">
                                                                <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-download">
                                                    <i className="w-icon-download" style={{fontSize:'52px'}}></i>
                                                </span>
                                                                    <div className="icon-box-content">
                                                                        <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Məhsul əlavə et</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                            <Link href="/shop" className="link-to-tab">
                                                                <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-wishlist">
                                                    <i className="w-icon-heart" style={{fontSize:'52px'}}></i>
                                                </span>
                                                                    <div className="icon-box-content">
                                                                        <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Bütün məhsullar</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                            <a href="#account-orders" className="link-to-tab">
                                                                <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-orders">
                                                    <i className="w-icon-orders" style={{fontSize:'52px'}}></i>
                                                </span>
                                                                    <div className="icon-box-content">
                                                                        <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Sİfarİşlər</p>
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
                                                                        <p className="text-uppercase mb-0" style={{fontSize:'18px'}} onClick={logout}>Çıxış</p>
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
                                                            <th className="order-id">N</th>
                                                            <th className="order-date">Məhsulun Tarix</th>
                                                            <th className="order-status">Məhsulun kodu</th>
                                                            <th className="order-total">Məhsulun adı</th>
                                                            <th className="order-actions">Kateqoriyası</th>
                                                            <th className="order-actions">Qiymət</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {storeOrdersTitle.map(e=>(
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
                                                        ))}
                                                        </tbody>
                                                    </table>

                                                    <a href="/shop" className="btn btn-dark btn-rounded btn-icon-right">MAĞAZA KEÇİN<i className="w-icon-long-arrow-right"></i></a>

                                                </div>
                                                <div className="tab-pane mb-4" id="account-orders2">

                                                    <table className="shop-table account-orders-table mb-6">
                                                        <thead>
                                                        <tr>
                                                            <th className="order-date">Məhsulun Tarix</th>
                                                            <th className="order-status">Məhsulun kodu</th>
                                                            <th className="order-total">Məhsulun adı</th>
                                                            <th className="order-actions">Kateqoriyası</th>
                                                            <th className="order-actions">Qiymət</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {userProductsTitle.map(e=>(
                                                            <tr>
                                                                <td className="order-date pr-3">{e.created_at.slice(0,10)}</td>
                                                                <td className="order-status pr-3">{e.code}</td>
                                                                <td className="order-status pr-3">{e.title}</td>
                                                                <td className="order-status pr-3">{e.category.title}</td>
                                                                <td className="order-status pr-3">₼ {e.price}</td>
                                                                {/*<td className="order-total">*/}
                                                                {/*    */}
                                                                {/*    <span className="order-price">$121.00</span> for*/}
                                                                {/*    <span className="order-quantity"> 1</span> item*/}
                                                                {/*</td>*/}
                                                                <ul role="tablist">
                                                                        <li>
                                                                        <td className="order-action">
                                                                            <a 
                                                                    href="#account-dashboard"
                                                                        // onClick={() => {editProduct(e.id)}}
                                                                       className="btn btn-outline btn-default btn-block btn-sm btn-rounded" >Dəyiş</a>
                                                                            </td>
                                                                        </li>
                                                                </ul>
                                                                
                                                                <td className="order-action">
                                                                    <a href="#"
                                                                       className="btn btn-outline btn-default btn-block btn-sm btn-rounded redColor"  onClick={()=>{deleteUserProduct(e.id)}}>Sil</a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>

                                                </div>

                                                <div className="tab-pane" id="account-downloads">
                                                    <MyAccountVendorDetails/>
                                                </div>

                                                <div className="tab-pane" id="account-details">
                                                    <form className="form account-details-form" action="#" method="post">
                                                        <div className="row " style={{margin:"1px"}}>
                                                            <div className="col-md-6 mt-2">
                                                                <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                                    <input type="text"  style={{backgroundColor:"#ffff",marginTop: '7px'}} id="firstname" name="firstname"
                                                                           defaultValue={name}
                                                                           onChange={e=>setShopName(e.target.value)}
                                                                           placeholder="Mağaza adı" className="form-control form-control-md"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mt-2">
                                                                <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                                    <input type="tel" style={{backgroundColor:"#ffff",marginTop: '7px'}} id="display-name"
                                                                           value={phoneNumber}
                                                                           onChange={e=>setPhoneNumber(e.target.value)}
                                                                           name="display_name" placeholder="Əlaqə nömrəsı" className="form-control form-control-md"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row " style={{margin:"1px"}}>
                                                            <div className="col-md-6 mt-2">
                                                                <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                                    <input type="text"  style={{backgroundColor:"#ffff",marginTop: '7px'}} id="firstname" name="firstname"
                                                                           defaultValue={email}
                                                                           onChange={e=>setEmailUser('email', e.target.value)}
                                                                           placeholder="E-mail Ünvan" className="form-control form-control-md"/>
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
                                                                        placeholder={userVendorData.city?.title}
                                                                        classNamePrefix="select"
                                                                        onChange={setCity}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <Select
                                                                        name="colors"
                                                                        options={optionsRegions}
                                                                        className="basic-multi-select"
                                                                        placeholder={userVendorData.region?.title}
                                                                        classNamePrefix="select"
                                                                        onChange={setRegion}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <Select
                                                                        name="colors"
                                                                        options={optionsAvenues}
                                                                        className="basic-multi-select"
                                                                        placeholder={userVendorData.avenue?.title}
                                                                        classNamePrefix="select"
                                                                        onChange={setAvenue}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <Select
                                                                        name="colors"
                                                                        options={optionsStreets}
                                                                        className="basic-multi-select"
                                                                        placeholder={userVendorData.region?.title}
                                                                        classNamePrefix="select"
                                                                        onChange={setStreet}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <input type="text" id="display-name"
                                                                               defaultValue={userVendorData.address_addtional?.title}
                                                                               onChange={e=>setAddressAddtional(e.target.value)}
                                                                               style={{backgroundColor:"#ffff",marginTop: '7px'}} name="display_name" placeholder="Digəri" className="form-control form-control-md mb-0"/>
                                                                    </div>
                                                            </div>

                                                        </div>
                                                        <div className="row mt-4 mb-5 ml-2 mr-2 pb-3" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px",margin:"5px"}}>
                                                            <label htmlFor="display-name">Kateqoriya</label>
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <Select
                                                                        name="colors"
                                                                        options={optionsCategoria}
                                                                        className="basic-multi-select"
                                                                        placeholder={userVendorData.category?.title}
                                                                        classNamePrefix="select"
                                                                        onChange={handleChangeCategoria}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-4 mb-5 ml-2 mr-2 pb-3" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px",margin:"5px"}}>
                                                            <label htmlFor="display-name">Social Icons</label>
                                                            <div className="row">
                                                                {/*<header>*/}
                                                                {/*    <form name="input" method="get">*/}

                                                                {/*    </form>*/}
                                                                {/*    <button className="btn-add" type="button" onClick={()=>{BtnAddFunc()}}>Add</button>*/}
                                                                {/*</header>*/}
                                                                {/*<main>*/}
                                                                {/*    <div className="row">*/}
                                                                {/*        <div id="input-Select" className="col-2">*/}

                                                                {/*        </div>*/}
                                                                {/*        <div id="input-container" className="col-10">*/}

                                                                {/*        </div>*/}
                                                                {/*    </div>*/}
                                                                {/*    <button className="btn-create-array"  type="button" onClick={()=>{BtnCreateArrayFunc()}}>Create array</button>*/}
                                                                {/*</main>*/}
                                                                {/*<div className="col-1">*/}
                                                                {/*    <div className="form-group pt-1">*/}
                                                                {/*        <div style={{textAlign:'center',fontSize:'20px'}} onClick={()=>{createInput()}}> <i className="fas fa-plus"></i></div>*/}
                                                                {/*    </div>*/}
                                                                {/*</div>*/}
                                                                    <>
                                                                        <div className="col-4 mt-2">
                                                                            <div className="form-group">
                                                                                <Select
                                                                                    name="colors"
                                                                                    options={iconTitle}
                                                                                    className="basic-multi-select"
                                                                                    
                                                                                    placeholder={"Social Icons"}
                                                                                    classNamePrefix="select"
                                                                                    onChange={setSocialMedia1}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="form-group">
                                                                                <input type="text" style={{backgroundColor:"#ffff",marginTop: '7px'}}
                                                                                       value={iconUrl1}
                                                                                       onChange={e=>setUrl1(e.target.value)}
                                                                                       id="display-name" name="display_name"
                                                                                       className="form-control form-control-md mb-0"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 mt-2">
                                                                            <div className="form-group">
                                                                                <Select
                                                                                    name="colors"
                                                                                    options={iconTitle}
                                                                                    className="basic-multi-select"
                                                                                    placeholder={"Social Icons"}
                                                                                    classNamePrefix="select"
                                                                                    onChange={setSocialMedia2}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="form-group">
                                                                                <input type="text" style={{backgroundColor:"#ffff",marginTop: '7px'}}
                                                                                       value={iconUrl2}
                                                                                       onChange={e=>setUrl2(e.target.value)}
                                                                                       id="display-name" name="display_name"
                                                                                       className="form-control form-control-md mb-0"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 mt-2">
                                                                            <div className="form-group">
                                                                                <Select
                                                                                    name="colors"
                                                                                    options={iconTitle}
                                                                                    className="basic-multi-select"
                                                                                    placeholder={"Social Icons"}
                                                                                    classNamePrefix="select"
                                                                                    onChange={setSocialMedia3}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="form-group">
                                                                                <input type="text" style={{backgroundColor:"#ffff",marginTop: '7px'}}
                                                                                       value={iconUrl3}
                                                                                       onChange={e=>setUrl3(e.target.value)}
                                                                                       id="display-name" name="display_name"
                                                                                       className="form-control form-control-md mb-0"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 mt-2">
                                                                            <div className="form-group">
                                                                                <Select
                                                                                    name="colors"
                                                                                    options={iconTitle}
                                                                                    className="basic-multi-select"
                                                                                    placeholder={"Social Icons"}
                                                                                    classNamePrefix="select"
                                                                                    onChange={setSocialMedia4}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="form-group">
                                                                                <input type="text" style={{backgroundColor:"#ffff",marginTop: '7px'}}
                                                                                       value={iconUrl4}
                                                                                       onChange={e=>setUrl4(e.target.value)}
                                                                                       id="display-name" name="display_name"
                                                                                       className="form-control form-control-md mb-0"/>
                                                                            </div>
                                                                        </div>
                                                                    </>

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
                                                                               onChange={uploadImageCover}/>
                                                                        <label htmlFor="frr" style={{backgroundImage: `url(${selectedFile1})`,width:'500px', height:'200px'}}>
                                                                            {!selectedFile1 && userVendorData.cover_image &&
                                                                            <img src={`https://api.ipekyolu.az${userVendorData.cover_image ?? userVendorData.cover_image}`}width="100%" height="200px" style={{maxHeight: "200px"}}/>
                                                                            }
                                                                            {!selectedFile1 && !userVendorData.cover_image && 
                                                                            <span style={{justifyContent:"center", display:"flex",position:"relative", top:"80px",  fontSize:"20px"}}>Şəkil yüklə</span>
                                                                         }
                                                                        </label>
                                                                    </form>
                                                                </div>
                                                                <div className="col-4">
                                                                    <form  className="p-5">
                                                                        <input type="file"
                                                                               accept=".jpg, .jpeg, .png"
                                                                               name="dd" id="dd"
                                                                               className="inputFile"
                                                                               onChange={uploadImageLogo}/>
                                                                        <label htmlFor="dd" style={{backgroundImage:"url(" + selectedFile2 + ")",width:'600px', height:'200px'}}>
                                                                            {!selectedFile2 && userVendorData.logo &&
                                                                             <img src={`https://api.ipekyolu.az${userVendorData.logo ?? userVendorData.logo}`} width="100%" height="200px" style={{maxHeight: "200px"}}/>
                                                                            }
                                                                            {!selectedFile2 && !userVendorData.logo &&
                                                                             <span style={{justifyContent:"center", display:"flex",position:"relative", top:"80px", left:"-150px",  fontSize:"20px"}}>Şəkil yüklə</span>
                                                                            }
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
                                                                onClick={()=>{saveChangeVendor()}}
                                                                className="btn btn-dark btn-rounded btn-sm mb-4 mt-5">Dəyişiklikləri yadda saxla
                                                        </button>
                                                        <div> <label htmlFor="display-name">Açilma tarixi: {userVendorData.created_at?.slice(0,10) }</label></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>


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




            <Modal isOpen={modalSit}>
                <div className={styles.closeContainer}></div>
                    <i onClick={() => {setModalSit(false)}} class="bi bi-x" style={{cursor: "pointer", color: "red"}}>X</i>
                    <main className="main mb-10 pb-1">
                        <div className="page-content">
                            <div className="container">
                                <div className="row gutter-lg">
                                    <div className="product product-single row mb-2">
                                        <div className="col-md-6 mb-4 mb-md-8">
                                            <div className="product-gallery product-gallery-sticky">
                                                <div
                                                    className="swiper-container product-single-swiper swiper-theme nav-inner"
                                                    data-swiper-options="{
                                                            'navigation': {
                                                                'nextEl': '.swiper-button-next',
                                                                'prevEl': '.swiper-button-prev'
                                                            }
                                                        }">
                                                    <div className="swiper-wrapper row cols-1 gutter-no">
                                                        <div className="swiper-slide">
                                                            <figure className="product-image">
                                                                <div>
                                                                    <form  className="p-5">
                                                                        <input type="file"
                                                                               accept=".jpg, .jpeg, .png"
                                                                               name="file1" id="file1"
                                                                               className="inputFile"
                                                                            //    onChange={(e) => handleFileUploadFile1(e)}
                                                                               />
                                                                        <label htmlFor="file1" style={{backgroundImage:"url(" + selectedFile1 + ")",width:'800px', height:'490px',cursor:"pointer"}}>
                                                                            <span style={{justifyContent:"center", display:"flex",position:"relative", top:"232px", left:"-197px", cursor:"pointer"}}>
                                                                                <h5 style={{fontSize:"25px",opacity:"0.5"}}>Şəkil əlavə edin</h5>
                                                                                </span>
                                                                        </label>
                                                                    </form>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <figure className="product-image" style={{cursor:"pointer"}}>
                                                                <form>
                                                                    <input type="file"
                                                                           accept=".jpg, .jpeg, .png"
                                                                           name="file2" id="file2"
                                                                           className="inputFile"
                                                                        //    onChange={(e) => handleFileUploadFile2(e)}
                                                                           />


                                                                    <label htmlFor="file2" style={{width:"800px", height:"490px"}}>
                                                                        <img src={selectedFile2}  data-zoom-image={selectedFile2}/>
                                                                    </label>
                                                                </form>
                                                            </figure>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <figure className="product-image">
                                                                <form>
                                                                    <input type="file"
                                                                           accept=".jpg, .jpeg, .png"
                                                                           name="file4" id="file4"
                                                                           className="inputFile"
                                                                        //    onChange={(e) => handleFileUploadFile3(e)}
                                                                           />

                                                                    <label htmlFor="file4" style={{width:"800px", height:"490px"}}>
                                                                        <img 
                                                                        // src={selectedFile3}  data-zoom-image={selectedFile3}
                                                                        />
                                                                    </label>
                                                                </form>
                                                            </figure>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <figure className="product-image">
                                                                <form>
                                                                    <input type="file"
                                                                           accept=".jpg, .jpeg, .png"
                                                                           name="file3" id="file3"
                                                                           className="inputFile"
                                                                        //    onChange={(e) => handleFileUploadFile4(e)}
                                                                           />

                                                                    <label htmlFor="file3" style={{width:"800px", height:"490px"}}>
                                                                        <img 
                                                                        // src={selectedFile4}  data-zoom-image={selectedFile4}
                                                                        />
                                                                    </label>
                                                                </form>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <button className="swiper-button-next"></button>
                                                    <button className="swiper-button-prev"></button>
                                                </div>
                                                <div className="product-thumbs-wrap swiper-container"
                                                     data-swiper-options="{
                                                            'navigation': {
                                                                'nextEl': '.swiper-button-next',
                                                                'prevEl': '.swiper-button-prev'
                                                            }
                                                        }">
                                                    <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                                                        <div className="product-thumb swiper-slide">
                                                            <figure className="product-image" style={{backgroundColor: '#f5f5f5', width:"100px", height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                                <h5 style={{fontSize:"10px"}}>Şəkil əlavə edin</h5>
                                                                <img 
                                                                // src={selectedFile1}  data-zoom-image={selectedFile1}
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="product-thumb swiper-slide" style={{backgroundColor: '#f5f5f5', width:"100px", height:"100px"}}>
                                                            <img
                                                            //  src={selectedFile2}  data-zoom-image={selectedFile2}
                                                             />
                                                        </div>
                                                        <div className="product-thumb swiper-slide" style={{backgroundColor: '#f5f5f5'}}>
                                                            <img 
                                                            // src={selectedFile3}  data-zoom-image={selectedFile3}
                                                            />
                                                        </div>
                                                        <div className="product-thumb swiper-slide" style={{backgroundColor: '#f5f5f5'}}>
                                                            <img 
                                                            // src={selectedFile4}  data-zoom-image={selectedFile4}
                                                            />
                                                        </div>
                                                    </div>
                                                    <button className="swiper-button-next"></button>
                                                    <button className="swiper-button-prev"></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-6 mt-4 mb-md-8">
                                            <div className="product-details" data-sticky-options="{'minWidth': 767}">
                                                <div className="form-group mb-3">
                                                    <input type="text" id="display-name"
                                                           placeholder="Məhsulun adı"
                                                        //    onChange={e=>setProductName(e.target.value)}
                                                           className="form-control form-control-md mb-0"/>
                                                </div>
                                            
                                                <div className="form-group mb-3">
                                                    <Select
                                                        name="colors"
                                                        // options={optionsSubCategories}
                                                        className="basic-multi-select"
                                                        placeholder={"Sub Kateqoriya Seç"}
                                                        classNamePrefix="select"
                                                        // onChange={handleChangeSubSub}
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <Select
                                                        name="colors"
                                                        // options={optionsTitle}
                                                        className="basic-multi-select"
                                                        placeholder={"Sub-Sub Kateqoriya Seç"}
                                                        classNamePrefix="select"
                                                        // onChange={handleChangeSub}
                                                    />
                                                </div>
                                                <div className="product-price">
                                                    <ins className="new-price">
                                                        <div className="product-short-desc">
                                                            <ul className="list-type-check-new-price list-style-none">
                                                                <li><input
                                                                    type="text"
                                                                    id="email_1"
                                                                    name="email_1"
                                                                    // onChange={e=>setPrice(e.target.value)}
                                                                    className="form-control form-control-md"/></li>
                                                            </ul>
                                                        </div>
                                                    </ins>
                                                </div>


                                                <div className="product-short-desc">
                                                    <ul className="list-type-check list-style-none">
                                                        <li><input type="text" 
                                                        // onChange={e=>setShortDesc1(e.target.value)} 
                                                        id="email_1" name="email_1" className="form-control form-control-md"/></li>
                                                        <br/>
                                                        <li><input type="text"
                                                        //  onChange={e=>setShortDesc2(e.target.value)} 
                                                         id="email_1" name="email_1" className="form-control form-control-md"/></li>
                                                        <br/>
                                                        <li><input type="text" 
                                                        // onChange={e=>setShortDesc3(e.target.value)} 
                                                        id="email_1" name="email_1" className="form-control form-control-md"/></li>
                                                    </ul>
                                                </div>

                                                <textarea 
                                                // onChange={e=>setDescription(e.target.value)} 
                                                className="form-control form-control-md mb-4" placeholder="Təsvir"
                                                          name="w3review" rows="4" cols="50">
                                                    </textarea>
                                                <div>
                                                    {/* {test.map(e=>( */}
                                                        <div className="row">
                                                            <div className="form-group col-md-3 mb-8 pt-2">
                                                                <label htmlFor="display-name" style={{fontSize:"15px",paddingTop:'34px',textAlign:"center"}}>
                                                                    {/* {e.title} */}
                                                                    </label>
                                                            </div>
                                                            <div className="form-group col-md-9 mb-3">
                                                                <input type="text" id="email_1" name="email_1"
                                                                    //    onChange={m=>setFormGroup({"the_filter": e.id, "value": m.target.value})}
                                                                       className="form-control form-control-md"/>
                                                            </div>
                                                        </div>
                                                    {/* ))} */}
                                                </div>

                                                <div className="row mb-4 mt-3">
                                                    <div className="col-md-6">
                                                        <figure className="product-image">
                                                            <div>
                                                                <form>
                                                                    <input type="file"
                                                                           className="inputFile"
                                                                           name="file0e9" id="file0e9"
                                                                        //    onChange={handleVideoUpload} 
                                                                           />
                                                                    <label htmlFor="file0e9" style={{width:"200px", height:"100px"}}>
                                                                        {/* <ReactPlayer
                                                                            url={videoFilePathEEE}  
                                                                            playIcon={<button>Play</button>} width="100%" height="100%" controls /> */}
                                                                    </label>
                                                                </form>
                                                            </div>

                                                        </figure>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div>
                                                            <pre>
                                                                {/* {JSON.stringify(selected)} */}
                                                                </pre>
                                                            {/* <TagsInput
                                                                value={selected}
                                                                onChange={setSelected}
                                                                name="tags"
                                                                placeHolder="Tags Əlavə Et"
                                                            /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="fix-bottom product-sticky-content sticky-content">
                                                    <div className="product-form container">
                                                        <button className="btn btn-primary btn-cart" 
                                                        // onClick={handleAddInput}
                                                        >
                                                            <i className="w-icon-cart"></i>
                                                            <span>Məhsul elavə et</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>    
                 </Modal>
        </>
    )}