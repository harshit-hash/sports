import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Calender from "../image/Calendar.gif"
import '../css/Btn.css'

export default function OrgDtl() {
    const [Game,ViewGame]=useState([""])
    useEffect(() => {
       
        axios.get('http://localhost:3001/Game_Name')
           .then((res) => {
               ViewGame(res.data);
           })
       })
    return (
        <div>
            <div style={{ padding: "100px 0 0 0" }}>
                <br />
                <br />
                <center>
                    <table className="Ctablee" style={{
                        margin: "5px", color: "#000000",
                        boxshadow: "5px 5px 8px 5px #888888", width: "60%",
                    }}>
                        <tr>
                            <th colSpan="3" style={{
                                fontsize: "40px", fontweight: "bold", background: "#03a1a4",
                                textdecoration: "underline", color: "#FFFFFF", fontfamily: "verdana", height: "100px", textAlign: "center"
                            }}>
                                Tournament
                            </th>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left", height: "50", padding: "50px 0 0 150px" }} colSpan="2">
                                Games</td>
                            <td><select id="ddGame" runat="server" >
                            <option selected disabled="true">--Select Game--</option>
                                {Game.map(({id,game})=>{
                                    return(<option value={game} key={id} >
                                        {game}
                                    </option>)
                                })}
                                   
                                
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left", height: "50" }}>
                                Tournament Name
                            </td>
                            <td className="tdd" colSpan="4" height="50" textAlign="left">
                                <input id="txtTourn" runat="server" placeholder="Name Of Tournament"></input>

                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left", height: "50" }}>
                                Place
                            </td>
                            <td className="tdd" colSpan="4" height="50" textAlign="left">
                                <input id="txtPlc" runat="server" placeholder="Place" ></input>

                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left", height: "50" }}>
                                Organise By
                            </td>
                            <td className="tdd" colSpan="4" height="50" textAlign="left">
                                <input id="txtOrg" runat="server" placeholder="Name Of Organiser" ></input>

                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left", height: "50" }}>
                                Email
                            </td>
                            <td className="tdd" colSpan="4" height="50" textAlign="left">
                                <input id="txtEmail" runat="server" placeholder="Email-id" ></input>

                            </td>
                        </tr>

                        <tr>
                            <td style={{ textAlign: "left", height: "50" }}>
                                Entry Fees
                            </td>
                            <td className="tdd" colSpan="4" height="50" textAlign="left">
                                <input id="txtEnFees" runat="server" placeholder="Entry fees (in INR)" ></input>

                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left", height: "50" }}>
                                Last Date Of Entry
                            </td>
                            <td className="tdd" colSpan="3" height="50" textAlign="left">
                                <input type="text" id="txtLEntry" runat="server" placeholder="dd/MM/yyyy" ></input>

                                <imagebutton id="btnChequeDate" runat="server" height="25px" ImageUrl={Calender}
                                    width="25px" />
                            </td>
                        </tr>

                        <tr>
                            <td style={{ textAlign: "center", height: "60px", width: "100%", padding:"0" }} colSpan="3" >
                                <button id="BtnSbmt" className='btn' runat="server" type="Submit" onClick="BtnSbmt_Click" >Submit</button>

                            </td>
                        </tr>
                    </table>
                </center>
                <br />
                <br />
            </div>
        </div>
    )
}
