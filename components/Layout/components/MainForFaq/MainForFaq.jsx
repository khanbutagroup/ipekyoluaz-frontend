import React, {useEffect, useState} from "react";
import {faq} from "../../../../services/faq";
import { MobileFooter } from "../MobileFooter/MobileFooter";

export default function MainForFaq(){
    const [faqTitle, faqData] = useState([]);
    useEffect(() => {
        faq()
            .then(items => {
                if(items.data) {
                    faqData(items.data)
                }
            })
    }, [])
    return (

    <>
        <div className="page-wrapper">
            <main className="main">
                <div className="page-header" style={{height: '180px'}}>
                    <div className="container">
                        <h1 className="page-title mb-0">FAQ</h1>
                    </div>
                </div>
                <nav className="breadcrumb-nav mb-10 pb-1">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="/">Ana Səhifə</a></li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content faq">
                    <div className="container">
                        <section className="content-title-section">
                            <h3 className="title title-simple justify-content-center bb-no pb-0">Tez-tez verilən suallar</h3>
                            <p className="description text-center">Siz tez-tez verilən sualları <b>Wolmart Elementləri</b> ilə asanlıqla göstərə bilərsiniz.</p>
                        </section>
                        {faqTitle.map(e=>(
                            <section className="mb-6">
                                <h4 className="title title-center mb-5">{e.title}</h4>
                                <div className="row">
                                    {e.faqs.map(m=>(
                                        <div className="col-md-6 mb-8">
                                            <div className="accordion accordion-bg accordion-gutter-md accordion-border">

                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse1-1" className="collapse">{m.question}</a>
                                                    </div>
                                                    <div id="collapse1-1" className="card-body expanded">
                                                        <p className="mb-0">
                                                            {m.answer}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
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
    )}