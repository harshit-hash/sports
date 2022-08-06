import React from 'react'
import '../css/Btn.css'
import '../css/Table.css'
import '../css/Game_Name.css'

export default function Game_Name() {
  return (
    <div>
           <div style={{padding: "100px 0 0 0"}}>
                <br />
                <br />
                <center>
                    <table className="Ctablee"  style={{margin: "5px", color: "#000000",
                        boxshadow: "5px 5px 8px 5px #888888", width: "60%", textAlign: "center"}}>
                        <tr>
                            <th  colSpan="3" style={{fontsize: "40px", fontweight: "bold", background: "#03a1a4",
                                textdecoration: "underline", color: "#FFFFFF", fontfamily: "verdana", textAlign: "center",height:"100px"}} 
                                >
                                GAMES
                            </th>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left", height: "50"}}>
                                Game Name
                            </td>
                            <td className="tdd" colSpan="1" style={{height:"50", textAlign:"left"}}>
                                <input id="TxtGameName" runat="server" placeholder="Name Of Tournament" type="text"></input>
                                
                            </td>
                             <td align="center" colSpan="1" style={{height: "60px", width: "100%"}}>
                                <button className='btn' id="btnsave" runat="server" type="Submit"  onClick="btnsave_Click"
                                     style={{margin: "0 150px 0 0", Width: "130px"}} >Submit</button>
                                
                            </td>
                        </tr>
                        <tr align="center">
                            <td colSpan="3" style={{fontsize: "medium", padding: "30px 0 20px 0", textAlign: "center", width: "100px"}}>
                               
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
