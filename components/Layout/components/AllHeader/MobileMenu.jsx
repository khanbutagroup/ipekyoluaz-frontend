import React, {useEffect} from "react";
import {allCategories} from "../../../../services/allCategories";

export default function MobileMenu(){
    const [mobileCategoryData, setMobileCategoryData] = React.useState([]);
    useEffect(() => {
        allCategories()
            .then(items => {
                    setMobileCategoryData(items.data)
            })
    }, [])
    return (
        <>
            <div className="mobile-menu-wrapper">
                <div className="mobile-menu-overlay"></div>

                <a href="#" className="mobile-menu-close"><i className="close-icon"></i></a>

                <div className="mobile-menu-container scrollable">
                    <form action="#" method="get" className="input-wrapper">
                        <input type="text" className="form-control" name="search" autoComplete="off"
                               placeholder="Search"
                               required/>
                        <button className="btn btn-search" type="submit">
                            <i className="w-icon-search"></i>
                        </button>
                    </form>
                    <div className="tab">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a href="#main-menu" className="nav-link active">Əsas menyu</a>
                            </li>
                            <li className="nav-item">
                                <a href="#categories" className="nav-link">Kateqoriyalar</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active" id="main-menu">
                                <ul className="mobile-menu">
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
                        </div>
                            <div className="tab-pane" id="categories">
                                    <ul className="mobile-menu">
                                        {mobileCategoryData.map(e=>(
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="w-icon-tshirt2"></i> {e.title}
                                                </a>
                                                <ul>
                                                    {e.sub_categories.map(s=>(
                                                        <li>
                                                            <a  href="javascript:void(0)">{s.title}</a>
                                                            <ul>
                                                                {s.sub_sub_categories.map(c=>(
                                                                    <li><a href={`/shop/${e.id}`}>{c.title}</a></li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )}