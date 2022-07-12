import React, { Component }  from 'react';
import './ModalTeam.css';
import ModalTeamInfo from './ModalTeamInfo';
import { useState } from 'react';


const ModalTeam = (props) => {

    const [state, setState] = useState({
        img1: props.src  
      })

    return (
        <div className={`modal__wrapper ${props.isOpened ? "open" : "close"}`} style={{...props.style}}>
            <div className="modalTeam__body">
                <div className="modal__close" onClick={props.onModalClose}>
                    X
                </div>
                <h2 className="modal__titles">It`s our best Masters</h2>
                <div className="modal__inner">
                    <div className="modal__photo">
                        <img className='modal__photo-img' src={state.img1} alt='' />
                        <button className='pepe-btn' onClick={() => setState((state.img1 !== "images/pepe.jpg") ? {...state, img1: "images/pepe.jpg"} : {...state, img1: props.src})}>Pepe</button>
                        <div className='modal__contacts'>
                            <div className='modal__numder'>+375(29)699-69-69</div>
                            <div className='modal__email'>RTattoo@mail.ru</div>
                            <div class='social-icons'>
                                <a href='#'>
                                    <i class='fab fa-facebook-f' />
                                </a>
                                <a href='#'>
                                    <i class='fab fa-instagram' />
                                </a>
                                <a href='#'>
                                    <i class='fab fa-youtube' />
                                </a>
                                <a href='#'>
                                    <i class='fab fa-twitter' />
                                </a>
                                <a href='#'>
                                    <i class='fab fa-linkedin' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <ModalTeamInfo 
                        title = {props.title}
                        prof = {props.prof}
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalTeam