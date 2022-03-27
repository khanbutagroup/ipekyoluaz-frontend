import React from 'react'
import Link from 'next/link'
import MyAccountVendorDetails from "./MyAccountVendorDetails";
export default function MyAccount(){
    return (
        <div>
            <style jsx>{`
                .span-link:hover {
                   color: #1914fe !important;
                   cursor: pointer;
                  }
            `}
            </style>
            <div className="page-wrapper">
                <main className="main">
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title mb-0">My Account</h1>
                        </div>
                    </div>
                    <nav className="breadcrumb-nav">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li><a href="demo1.html">Home</a></li>
                                <li>My account for user</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="page-content pt-2">
                        <div className="container">
                            <div className="tab tab-vertical row gutter-lg">
                                <ul className="nav nav-tabs mb-6" role="tablist">
                                    <li className="nav-item">
                                        <a href="#account-dashboard" className="nav-link active">Dashboard</a>
                                    </li>
                                    <hr className="product-divider"/>
                                    <li className="nav-item">
                                        <a href="#account-details" className="nav-link"> Hesab məlumatları</a>
                                    </li>
                                    <hr className="product-divider"/>
                                    <li className="link-item">
                                        <Link href="/wishlist">
                                            <span  className="nav-link span-link">Seçilmişlər</span>
                                        </Link>

                                    </li>
                                    <hr className="product-divider"/>
                                    <li className="nav-item">
                                        <a href="#account-orders" className="nav-link">Sifarişlər</a>
                                    </li>
                                    <hr className="product-divider"/>
                                    <li className="link-item">
                                        <Link href="#">
                                            <span  className="nav-link span-link">Çıxış</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content mb-6">
                                    <div className="tab-pane active in" id="account-dashboard">
                                        <p className="greeting">
                                            Hello
                                            <span className="text-dark font-weight-bold">John Doe</span>
                                            (not
                                            <span className="text-dark font-weight-bold">John Doe</span>?
                                            <a href="#" className="text-primary">Log out</a>)
                                        </p>

                                        <p className="mb-4">
                                            From your account dashboard you can view your <a href="#account-orders"
                                                                                             className="text-primary link-to-tab">recent
                                            orders</a>,
                                            manage your <a href="#account-addresses"
                                                           className="text-primary link-to-tab">shipping
                                            and billing
                                            addresses</a>, and
                                            <a href="#account-details" className="text-primary link-to-tab">edit
                                                your password and
                                                account details.</a>
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
                                                <Link href="/wishlist" className="link-to-tab">
                                                    <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-wishlist">
                                                    <i className="w-icon-heart" style={{fontSize:'52px'}}></i>
                                                </span>
                                                        <div className="icon-box-content">
                                                            <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Seçilmişlər</p>
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
                                                            <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Sifarişlər</p>
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
                                                            <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Çıxış</p>
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
                                            <tr>
                                                <td className="order-id">#2321</td>
                                                <td className="order-date">August 20, 2021</td>
                                                <td className="order-status">Processing</td>
                                                <td className="order-total">
                                                    <span className="order-price">$150.00</span> for
                                                    <span className="order-quantity"> 1</span> item
                                                </td>
                                                <td className="order-action">
                                                    <a href="#"
                                                       className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="order-id">#2319</td>
                                                <td className="order-date">August 20, 2021</td>
                                                <td className="order-status">Processing</td>
                                                <td className="order-total">
                                                    <span className="order-price">$201.00</span> for
                                                    <span className="order-quantity"> 1</span> item
                                                </td>
                                                <td className="order-action">
                                                    <a href="#"
                                                       className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="order-id">#2318</td>
                                                <td className="order-date">August 20, 2021</td>
                                                <td className="order-status">Processing</td>
                                                <td className="order-total">
                                                    <span className="order-price">$321.00</span> for
                                                    <span className="order-quantity"> 1</span> item
                                                </td>
                                                <td className="order-action">
                                                    <a href="#"
                                                       className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <a href="shop-banner-sidebar.html"
                                           className="btn btn-dark btn-rounded btn-icon-right">Go
                                            Shop<i className="w-icon-long-arrow-right"></i></a>
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
                                        {/*        <div className="icon-box icon-box-side icon-box-light">*/}
                                        {/*<span className="icon-box-icon icon-account mr-2">*/}
                                        {/*    <i className="w-icon-user"></i>*/}
                                        {/*</span>*/}
                                        {/*            <div className="icon-box-content">*/}
                                        {/*                <h4 className="icon-box-title mb-0 ls-normal">Account Details</h4>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        <form className="form account-details-form" action="#" method="post">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="firstname">First name *</label>
                                                        <input type="text" id="firstname" name="firstname"
                                                               placeholder="John"
                                                               className="form-control form-control-md"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="lastname">Last name *</label>
                                                        <input type="text" id="lastname" name="lastname" placeholder="Doe"
                                                               className="form-control form-control-md"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="display-name">Phone number *</label>
                                                <input type="tel" id="display-name" name="phone"
                                                       placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                       className="form-control form-control-md mb-0"/>
                                            </div>

                                                <div className="row mt-2 mb-2">
                                                    <label htmlFor="display-name">Ünvan</label>
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="display-name">Səhər</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="display-name">Rayon</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="display-name">Qəsəbə</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="display-name">Küçə</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            <div className="form-group mb-6">
                                                <label htmlFor="email_1">Digəri</label>
                                                <input type="text" id="email_1" name="email_1"
                                                       className="form-control form-control-md"/>
                                            </div>
                                            <div className="form-group mb-6">
                                                <label htmlFor="email_1">Email address *</label>
                                                <input type="email" id="email_1" name="email_1"
                                                       className="form-control form-control-md"/>
                                            </div>

                                            <h4 className="title title-password ls-25 font-weight-bold">Şifrə dəyişmək</h4>
                                            <div className="form-group">
                                                <label className="text-dark" htmlFor="cur-password">Current Password leave
                                                    blank to leave unchanged</label>
                                                <input type="password" className="form-control form-control-md"
                                                       id="cur-password" name="cur_password"/>
                                            </div>
                                            <div className="form-group">
                                                <label className="text-dark" htmlFor="new-password">New Password leave blank
                                                    to leave unchanged</label>
                                                <input type="password" className="form-control form-control-md"
                                                       id="new-password" name="new_password"/>
                                            </div>
                                            <div className="form-group mb-10">
                                                <label className="text-dark" htmlFor="conf-password">Confirm
                                                    Password</label>
                                                <input type="password" className="form-control form-control-md"
                                                       id="conf-password" name="conf_password"/>
                                            </div>
                                            <button type="submit" className="btn btn-dark btn-rounded btn-sm mb-4">Save
                                                Changes
                                            </button>
                                            <div> <label htmlFor="display-name">Yaranma tarixi: 1/31/2022</label></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        )}