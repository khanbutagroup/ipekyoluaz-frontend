import React from 'react'

export const MobileFooter = () => {
  return (
    <div>
        <div className="sticky-footer sticky-content fix-bottom">
    <a href="/" className="sticky-link active">
      <i className="w-icon-home"></i>
      <p>Ana Səhifə</p>
    </a>
    <a href="/shop" className="sticky-link">
      <i className="w-icon-category"></i>
      <p>Mağaza</p>
    </a>
    <a href="/my-account-for-vendor" className="sticky-link">
      <i className="w-icon-account"></i>
      <p>Profil</p>
    </a>
    <div className="cart-dropdown dir-up">
      <a href="/card" className="sticky-link">
        <i className="w-icon-cart"></i>
        <p>Səbət</p>
      </a>
    </div>

    <div className="header-search hs-toggle dir-up">
      <a href="/vendor" className="search-toggle sticky-link">
        <i className="w-icon-search"></i>
        <p>Satıcı</p>
      </a>
      {/* <form action="#" className="input-wrapper">
        <input
          type="text"
          className="form-control"
          name="search"
          autoComplete="off"
          placeholder="Search"
          required
        />
        <button className="btn btn-search" type="submit">
          <i className="w-icon-search"></i>
        </button>
      </form> */}
    </div>
  </div>
  </div>
  )
}
