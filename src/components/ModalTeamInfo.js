import React from "react";
import "./ModalTeamInfo.css";

const ModalTeamInfo = (props) => {

    return(
        <>
            <div className="modal__col modal__col--right">
                    
                <div className="modal__title modal__title--sm modal__title--right">NAME</div>
                
                <div className="modal__resume-item">
                    <div className="modal__date">
                        {props.title}
                    </div>
                    <div className="modal__exp">SPECIALIZATION</div>
                    <div className="modal__prof">{props.prof}</div>
                </div>
                
                <div className="modal__title modal__title--sm modal__title--right">SKILLS</div>
                
                <div className="modal__resume-item"> 
                    <div className="modal__resume-skills modal__resume-skills--one">Traditional</div>
                    <div className="modal__resume-skills modal__resume-skills--two">Old school</div>
                    <div className="modal__resume-skills modal__resume-skills--four">Japan</div>
                </div>
                
                <div className="modal__title modal__title--sm modal__title--right">AWARDS</div>
                
                <div className="modal__resume-item">
                
                    <div className="modal__resume-evords">
                        <div className="modal__resume-evordsDate">
                            <div className="modal__date">
                                2016
                            </div>
                        </div>
                        <div className="modal__resume-evordsContent">
                            <div className="modal__exp">THE BEST MASTER</div>
                            <div className="modal__prof">{props.prof}</div>
                            <div className="modal__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis felis non tempor ullamcorper.</div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="modal__resume-item modal__resume-item--last">
                
                    <div className="modal__resume-evords">
                        <div className="modal__resume-evordsDate">
                            <div className="modal__date">
                                2016
                            </div>
                        </div>
                        <div className="modal__resume-evordsContent">
                            <div className="modal__exp">THE BEST SPEKERS</div>
                            <div className="modal__prof">{props.prof}</div>
                            <div className="modal__text">Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ModalTeamInfo;