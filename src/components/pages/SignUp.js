import React from 'react';
import '../../App.css';
import '../SignUp.css';
import { useState } from 'react';

export default function SignUp()  {



  return (
    <>
      <div className={`form`}>
        <div className="form__container">
          <div className="form__wrapper">
            <form className="form__inner">
              <div className="form__title">
                ACCOUNT LOGIN
              </div>
              <div className="form__user">
                <div className='form__input'>
                  <div className='form__input-name'>USERNAME</div>
                  <input className='form__input-area' type="text" name="name" />
                </div>
                <div className='form__input'>
                  <div className='form__input-name'>PASSWORD</div>
                  <input className='form__input-area' type="password" name="name" />
                </div>
                <div className='form__remember'>
                  <div className='form__remember-left'>
                    <input className='form__remember-chek' type="checkbox" />
                    <div className='form__remember-chek-name'>Remember me</div>
                  </div>
                  <a href='#' className='form__remember-chek-text'>Forgot Password?</a>
                </div>
                <input className='form__input-btn' type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
