import React from 'react'

export default function Error(){
    return (
        <div>
            <main className="main">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb bb-no">
                            <li><a href="/">Ana Səhifə</a></li>
                            <li>Error 404</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content error-404">
                    <div className="container">
                        <div className="banner">
                            <figure>
                                <img src="assets/images/pages/404.png" alt="Error 404"
                                     width="820" height="460"/>
                            </figure>
                            <div className="banner-content text-center">
                                <h2 className="banner-title">
                                    <span className="text-secondary">Vay!!!</span> Burada bir şey səhv getdi
                                </h2>
                                <p className="text-light">Daxil edilmiş URL-də yazım səhvi ola bilər və ya axtardığınız səhifə artıq mövcud olmaya bilər</p>
                                <a href="/" className="btn btn-dark btn-rounded btn-icon-right">Ana Səhifəyə qayıt<i
                                    className="w-icon-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )}