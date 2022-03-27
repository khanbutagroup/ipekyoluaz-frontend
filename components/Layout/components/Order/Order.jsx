import React from 'react'

export default function Order(){
    return (
        <div>
            <main className="main order">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb shop-breadcrumb bb-no">
                            <li className="passed"><a href="/card">Alış-veriş kartı</a></li>
                            <li className="passed"><a href="/checkout" >Yoxla</a></li>
                            <li className="active"><a href="/order">Sifariş tamamlandı</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content mb-10 pb-2">
                    <div className="container">
                        <div className="order-success text-center font-weight-bolder text-dark">
                            <i className="fas fa-check"></i>
                            Çox sağ ol. Sifarişiniz alındı.
                        </div>

                        {/*<ul className="order-view list-style-none">*/}
                        {/*    <li>*/}
                        {/*        <label>Sifariş nömrəsi</label>*/}
                        {/*        <strong></strong>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <label>Vəziyyət</label>*/}
                        {/*        <strong></strong>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <label>Tarix</label>*/}
                        {/*        <strong></strong>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <label>Ümumi</label>*/}
                        {/*        <strong></strong>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <label>Ödəniş üsulu</label>*/}
                        {/*        <strong></strong>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}

                        {/*<div className="order-details-wrapper mb-5">*/}
                        {/*    <h4 className="title text-uppercase ls-25 mb-5">Sifariş detalları</h4>*/}
                        {/*    <table className="order-table">*/}
                        {/*        <thead>*/}
                        {/*        <tr>*/}
                        {/*            <th className="text-dark">məhsul</th>*/}
                        {/*            <th></th>*/}
                        {/*        </tr>*/}
                        {/*        </thead>*/}
                        {/*        /!*<tbody>*!/*/}
                        {/*        /!*<tr>*!/*/}
                        {/*        /!*    <td>*!/*/}
                        {/*        /!*        <a href="#">Palm Print Jacket</a>&nbsp;<strong>x 1</strong><br/>*!/*/}
                        {/*        /!*        Vendor : <a href="#">Vendor 1</a>*!/*/}
                        {/*        /!*    </td>*!/*/}
                        {/*        /!*    <td>$40.00</td>*!/*/}
                        {/*        /!*</tr>*!/*/}
                        {/*        /!*<tr>*!/*/}
                        {/*        /!*    <td>*!/*/}
                        {/*        /!*        <a href="#">Brown Backpack</a>&nbsp;<strong>x 1</strong><br/>*!/*/}
                        {/*        /!*        Vendor : <a href="#">Vendor 1</a>*!/*/}
                        {/*        /!*    </td>*!/*/}
                        {/*        /!*    <td>$60.00</td>*!/*/}
                        {/*        /!*</tr>*!/*/}
                        {/*        /!*</tbody>*!/*/}
                        {/*        /!*<tfoot>*!/*/}
                        {/*        /!*<tr>*!/*/}
                        {/*        /!*    <th>Subtotal:</th>*!/*/}
                        {/*        /!*    <td>$100.00</td>*!/*/}
                        {/*        /!*</tr>*!/*/}
                        {/*        /!*<tr>*!/*/}
                        {/*        /!*    <th>Shipping:</th>*!/*/}
                        {/*        /!*    <td>Flat rate</td>*!/*/}
                        {/*        /!*</tr>*!/*/}
                        {/*        /!*<tr>*!/*/}
                        {/*        /!*    <th>Payment method:</th>*!/*/}
                        {/*        /!*    <td>Direct bank transfor</td>*!/*/}
                        {/*        /!*</tr>*!/*/}
                        {/*        /!*<tr className="total">*!/*/}
                        {/*        /!*    <th className="border-no">Total:</th>*!/*/}
                        {/*        /!*    <td className="border-no">$100.00</td>*!/*/}
                        {/*        /!*</tr>*!/*/}
                        {/*        /!*</tfoot>*!/*/}
                        {/*    </table>*/}
                        {/*</div>*/}

                        {/*<div className="sub-orders mb-10">*/}
                        {/*    <h4 className="title mb-5 font-weight-bold ls-25">Alt Sifarişlər</h4>*/}
                        {/*    <div className="alert alert-icon alert-inline mb-5">*/}
                        {/*        <i className="w-icon-exclamation-triangle"></i>*/}
                        {/*        <strong>Qeyd: </strong>Bu sifarişdə bir çox satıcının məhsulları var. Beləliklə, biz bu sifarişi çoxsaylı satıcı sifarişlərinə böldük. Hər bir sifariş müvafiq satıcı tərəfindən müstəqil şəkildə həyata keçiriləcək.*/}
                        {/*    </div>*/}
                        {/*    <table className="order-subtable">*/}
                        {/*        <thead>*/}
                        {/*        <tr>*/}
                        {/*            <th className="order">Sifariş </th>*/}
                        {/*            <th className="date">Tarixi</th>*/}
                        {/*            <th className="status">Status</th>*/}
                        {/*            <th className="total">Cəmi</th>*/}
                        {/*            <th className="action"></th>*/}
                        {/*        </tr>*/}
                        {/*        </thead>*/}
                        {/*        /!*<tbody>*!/*/}
                        {/*        /!*<tr>*!/*/}
                        {/*        /!*    <td className="order">950</td>*!/*/}
                        {/*        /!*    <td className="date">April 23, 2021</td>*!/*/}
                        {/*        /!*    <td className="status">On hold</td>*!/*/}
                        {/*        /!*    <td className="total">$40.00 for 1 items</td>*!/*/}
                        {/*        /!*    <td className="action"><a href="order-view.html"*!/*/}
                        {/*        /!*                              className="btn btn-rounded">View</a></td>*!/*/}
                        {/*        /!*</tr>*!/*/}
                        {/*        /!*<tr>*!/*/}
                        {/*        /!*    <td className="order">951</td>*!/*/}
                        {/*        /!*    <td className="date">April 25, 2021</td>*!/*/}
                        {/*        /!*    <td className="status">On hold</td>*!/*/}
                        {/*        /!*    <td className="total">$60.00 for 1 items</td>*!/*/}
                        {/*        /!*    <td className="action"><a href="order-view.html"*!/*/}
                        {/*        /!*                              className="btn btn-rounded">View</a></td>*!/*/}
                        {/*        /!*</tr>*!/*/}
                        {/*        /!*</tbody>*!/*/}
                        {/*    </table>*/}
                        {/*</div>*/}

                        {/*<div id="account-addresses">*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="col-sm-6 mb-8">*/}
                        {/*            <div className="ecommerce-address billing-address">*/}
                        {/*                <h4 className="title title-underline ls-25 font-weight-bold">Fatura Ünvanı</h4>*/}
                        {/*                /!*<address className="mb-4">*!/*/}
                        {/*                /!*    <table className="address-table">*!/*/}
                        {/*                /!*        <tbody>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>John Doe</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>Conia</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>Wall Street</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>California</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>United States (US)</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>92020</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>1112223334</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr className="email">*!/*/}
                        {/*                /!*            <td>nicework125@gmail.com</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        </tbody>*!/*/}
                        {/*                /!*    </table>*!/*/}
                        {/*                /!*</address>*!/*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-sm-6 mb-8">*/}
                        {/*            <div className="ecommerce-address shipping-address">*/}
                        {/*                <h4 className="title title-underline ls-25 font-weight-bold">Çatdırılma ünvanı</h4>*/}
                        {/*                /!*<address className="mb-4">*!/*/}
                        {/*                /!*    <table className="address-table">*!/*/}
                        {/*                /!*        <tbody>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>John Doe</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>Conia</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>Wall Street</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>California</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>United States (US)</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        <tr>*!/*/}
                        {/*                /!*            <td>92020</td>*!/*/}
                        {/*                /!*        </tr>*!/*/}
                        {/*                /!*        </tbody>*!/*/}
                        {/*                /!*    </table>*!/*/}
                        {/*                /!*</address>*!/*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6"><i*/}
                        {/*    className="w-icon-long-arrow-left"></i>Siyahıya Qayıdın</a>*/}
                    </div>
                </div>
            </main>
        </div>
    )}