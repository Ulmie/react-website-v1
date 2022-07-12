import React from "react";
import './Service.css';

const Service = () => {

    return(
        <>
        <div className="features">
            <ul className="features__list">
                <li className="features__item">
                    <img src="./images/img-9.jpg" alt="" className="features__item-img" />
                </li>
                <li className="features__item">
                <div className="features__content">
                    <p className="features__suptitle">Services</p>
                    <p className="features__title">Tattoo</p>
                    <p className="features__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    </div>
                </li>
                <li className="features__item">
                <div className="features__content">
                    <p className="features__suptitle">Services</p>
                    <p className="features__title">Piercing</p>
                    <p className="features__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    </div>
                </li>
                <li className="features__item">
                    <img src="./images/img-2.jpg" alt="" className="features__item-img" />
                </li>
            </ul>
        </div>
        </>
    )
}

export default Service;