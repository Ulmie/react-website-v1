import React from 'react';
import { useState } from 'react';
import '../../App.css';
import ModalTeam from '../ModalTeam';
import "../Team.css";

function Products() {

  const [modal, setModal] = useState({
    modal1: false,
    madal2: false,
    madal3: false,
    madal4: false
  })

  return (
    <>
    <div className="team" id="team">
      <div className="container">
          <div className="team__inner">
              <div className="team__item">
                  <img className="team__img" src="../images/team-55.jpg" alt=""/>
                  <div className="team__title">Nass Mil</div>
                  <div className="team__rang">Piercing/Tattoo Master</div>
                  <div className="team__text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                  ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. 
                  Nullam quis risus eget urna mollis ornare vel eu leo.</div>
                  <button className="team__btn" onClick={() => setModal({
                    ...modal, modal1: true
                  })}>
                    Learn more
                  </button>
              </div>
              <div className="team__item">
                  <img className="team__img" src="../images/team-4.jpg" alt=""/>
                  <div className="team__title">Ilya Kaspersky</div>
                  <div className="team__rang">Tattoo Master</div>
                  <div className="team__text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                  ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. 
                  Nullam quis risus eget urna mollis ornare vel eu leo.</div>
                  <button className="team__btn" onClick={() => setModal({
                    ...modal, modal2: true
                  })}>
                    Learn more
                  </button>
              </div>
              <div className="team__item">
                  <img className="team__img" src="../images/team-1.jpg" alt=""/>
                  <div className="team__title">Unkn1w</div>
                  <div className="team__rang">Tattoo Master</div>
                  <div className="team__text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                   ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. 
                   Nullam quis risus eget urna mollis ornare vel eu leo.</div>
                  <button className="team__btn" onClick={() => setModal({
                    ...modal, modal3: true
                  })}>
                    Learn more
                  </button>
              </div>
              <div className="team__item">
                  <img className="team__img" src="../images/team-3.jpg" alt=""/>
                  <div className="team__title">Bodya Uzbek</div>
                  <div className="team__rang">Piercing Master</div>
                  <div className="team__text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                  ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. 
                  Nullam quis risus eget urna mollis ornare vel eu leo.</div>
                  <button className="team__btn" onClick={() => setModal({
                    ...modal, modal4: true
                  })}>
                    Learn more
                  </button>
              </div>
          </div>
      </div>
    </div>
      

      <ModalTeam
        isOpened = {modal.modal1}
        onModalClose = {() => setModal({
          ...modal, modal1: false
        })}
        title = "Nass Mil"
        prof = "Piercing/Tattoo Master"
        src='images/team-55.jpg'
      />
      <ModalTeam
        isOpened = {modal.modal2}
        onModalClose = {() => setModal({
          ...modal, modal2: false
        })}
        title = "Ilya Kaspersky"
        prof = "Tattoo Master"
        src='images/team-4.jpg'
      />
      <ModalTeam
        isOpened = {modal.modal3} 
        onModalClose = {() => setModal({
          ...modal, modal3: false
        })}
        title = "Unkn1w"
        prof = "Tattoo Master"
        src='images/team-1.jpg'
      />
      <ModalTeam
        isOpened = {modal.modal4}
        onModalClose = {() => setModal({
          ...modal, modal4: false
        })}
        title = "Bodya Uzbek"
        prof = "Piercing Master"
        src='images/team-3.jpg'
      />
    </>
  );
}

export default Products;
