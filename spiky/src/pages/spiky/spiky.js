import React, {  useState } from 'react';
import "./spiky.css"
import data from "../../data/cardData.json"
import logo1 from "../../assets/icons/functionality-card-image-01.png"
import logo2 from "../../assets/icons/functionality-card-image-02.png"
import logo3 from "../../assets/icons/functionality-card-image-03.png"
import logo4 from "../../assets/icons/functionality-card-image-04.png"
import logo5 from "../../assets/icons/functionality-card-image-05.png"
import logo6 from "../../assets/icons/functionality-card-image-06.png"


function Spiky() {

    const [logo] = useState([logo1, logo2, logo3, logo4, logo5, logo6])
    return (
        <div id="spiky_container">
            <div id="card_container" >
                {data.map((card) =>
                    <div className={" col-md-6 col-xl-4 col-12" + card.margin} style={{ margin: "0", color: card.color }}>

                        <div className={"card " + card.margin}>
                            <div >
                                <div className="logo_cont   ainer">
                                    <img
                                        src={logo[card.id]}
                                        alt={card.id}
                                        width="50"
                                        height="auto"
                                    ></img>
                                </div>
                                <div className="header_container">
                                    <div><h3 className="title1">{card.header1}</h3></div>
                                    <div><h4 className="title2">{card.header2}</h4></div>
                                </div>
                                <div className="text_container">
                                    <p className="text_container" >{card.text}</p>
                                </div>
                                {
                                    card.link ?
                                        <div style={{ marginTop: "3vh", marginBottom: "0px" }}>
                                            <a className="link" href="https://spiky.ai" target='_blank' rel="noreferrer">
                                                <p>{card.linkHeader}</p>
                                            </a>
                                        </div> : null
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Spiky;