import React, {useEffect, useState} from "react";

export const popup = () => {

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



  return (
    <div>
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
    </div>
  )
}
