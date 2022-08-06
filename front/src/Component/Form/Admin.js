import React from 'react'
import Team_Icon from '../image/team icon.jpg'
import TournamentImg from '../image/tournamentImg.jpg'
import Point_table from '../image/point table.jpg'
import Notice from '../image/notice.png'
import '../css/Btn.css'
import '../css/Table.css'
import '../css/Admin_Card.css'

export default function Admin() {
    return (
        <div>   
            <div style={{ padding: "0 0 100px 0"}}>

            <br />
                <table className="Ctablee" style={{padding: "10px", margin: "0 0 0 15%", textAlign: "center", width: "70%"}}
                   >
                    <tr align="center">
                        <td colSpan="2">
                            <div className="card" style={{width: "200px",height: "270px"}}>
                                <img className="card-img-top" src={Team_Icon} alt="Badminton" style={{width: "100%"}} />
                                    <div className="card-body">

                                        <p className="card-text">
                                            <a href="Game_Name.aspx" className="btn" style={{width: "100%"}}>ADD GAME</a>
                                        </p>

                                    </div>
                            </div>
                        </td>
                        <td colSpan="2" >
                            <div className="card" style={{width: "200px", height: "270px"}}>
                                <img className="card-img-top" src={TournamentImg} alt="Badminton" style={{width: "100%", height: "200px"}} />
                                    <div className="card-body">

                                        <p className="card-text">
                                            <a href="Tour_Name.aspx" className="btn" style={{width:"100%"}}>Tournament</a>
                                        </p>

                                    </div>
                            </div>
                        </td>
                       
                    </tr>
                    <tr align="center">
                        <td colSpan="2" style={{padding: "100px 0 0 0"}}>
                            <div className="card" style={{width: "200px", height: "270px"}}>
                                <img className="card-img-top" src={Point_table} alt="Badminton" style={{width: "100%", height: "200px"}} />
                                    <div className="card-body">

                                        <p className="card-text">
                                            <a href="point_table.aspx" className="btn" style={{width: "100%"}}>ADD POINT</a>
                                        </p>

                                    </div>
                            </div>
                        </td>
                        <td colSpan="2" style={{padding: "100px 0 0 0"}}>
                            <div className="card" style={{width: "200px", height:"270px"}}>
                                <img className="card-img-top" src={Notice} alt="Badminton" style={{width: "100%"}} />
                                    <div className="card-body">

                                        <p className="card-text">
                                            <a href="frmNotice.aspx" className="btn" style={{width: "100%"}}>NOTICE</a>
                                        </p>

                                    </div>
                            </div>
                        </td>
                        <td colSpan="2" style={{padding: "100px 0 0 0"}}>
                            
                        </td>
                    </tr>
                </table>

                <div className="main-content" style={{padding: "50px 0 0 0"}}>
                    <div className="header pb-8 pt-5 pt-md-8" style={{backgroundcolor: "#03a1a4"}}>
                        <div className="container-fluid">
                            <h2 className="mb-5 text-white">Stats Card</h2>
                            <div className="header-body">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-6">
                                        <div className="card card-stats mb-4 mb-xl-0">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="card-title text-uppercase text-muted mb-0">USER</h5>
                                                        <span className="h2 font-weight-bold mb-0">
                                                            <label id="lblUsr" runat="server" text=""></label></span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                            <i className="fas fa-users"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 mb-0 text-muted text-sm">

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6">
                                        <div className="card card-stats mb-4 mb-xl-0">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="card-title text-uppercase text-muted mb-0">TOURNAMENT</h5>
                                                        <span className="h2 font-weight-bold mb-0"><label id="lblTourn" runat="server" text=""></label></span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                            <i className="fas fa-chart-pie"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 mb-0 text-muted text-sm">

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6">
                                        <div className="card card-stats mb-4 mb-xl-0">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="card-title text-uppercase text-muted mb-0">GAMES</h5>
                                                        <span className="h2 font-weight-bold mb-0"><label id="lblGms" runat="server" text=""></label></span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                                            <i className="fas fa-volleyball-ball"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 mb-0 text-muted text-sm">

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6">
                                        <div className="card card-stats mb-4 mb-xl-0">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="card-title text-uppercase text-muted mb-0">TEAM</h5>
                                                        <span className="h2 font-weight-bold mb-0"><label id="lblTm" runat="server" text=""></label></span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                                            <i className="fas fa-user-friends"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 mb-0 text-muted text-sm">

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

        </div>
        </div>
    )
}
