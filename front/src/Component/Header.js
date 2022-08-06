import React from 'react'
import Cricket from './image/cricket_stadium.jpg';
import Football from './image/football.jpg';
import Volleyball from './image/volleyball-with-net-1.jpg'

export default function Header() {
  return (
    <div>
        <div className="container">
             <div className="mouse-cursor cursor-outer"></div>
    <div className="mouse-cursor cursor-inner"></div>
    
                <div id="demo" className="carousel slide" data-ride="carousel-item">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                       
                    
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Cricket} alt="Cricket" style={{width: "100%", height: "700px"}} />
                            <div className="carousel-caption">
                                <h3 style={{color: "#FFFFFF"}}>
                                    CRICKET</h3>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Football} alt="FOOTBALL" style={{width: "100%", height: "700px"}}  />
                            <div className="carousel-caption">
                                <h3 style={{color: "#FFFFFF"}}>
                                    FOOTBALL</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Volleyball} alt="VOLLEYBALL" style={{width: "100%", height: "700px"}} />
                            <div className="carousel-caption">
                                <h3 style={{color: "#FFFFFF"}}>
                                    VOLLEYBALL</h3>
                            </div>
                        </div>
                        
                        
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev" style={{position: "absolute"}}>
                        <span className="carousel-control-prev-icon"></span></a><a className="carousel-control-next"
                            href="#demo" data-slide="next" style={{position: "absolute"}}><span className="carousel-control-next-icon">
                            </span></a>
                </div>
            </div>
    </div>
  )
}
