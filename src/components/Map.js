import React from "react";
import './Map.css'

const Map = () => {

    return(
        <>
            <div className="section section--map">
                <div className="map">
                    <div className="map__back">
                        <div className="map__info">
                            <img className="map__icon" src="./images/map_icon.png" alt="" />
                            <div className="map__text">
                                <a className="open__map" href="#">Open map</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Map;