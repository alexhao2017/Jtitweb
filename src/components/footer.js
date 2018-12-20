import React from 'react'
import { Link } from 'gatsby'
import foot from '../images/logo_foot.png'
const Footer = () => (


<footer class="footer4">
                <div class="container-fluid">
                <div class="row" >
                <div class="col-md-5"  style={{borderRight:'8px solid #f7d26e',height:'180px',}}></div>
                        <div class="col-md-7">

                    <div class="row" >
                        <div class="col-md-5">
                        <img src={foot} style={{maxWidth:'350px',marginTop:'-50px',paddingTop:'50px',marginLeft:'-100px',height: '200px' ,width: '650px'}}/>
                        </div>
                        <div class="col-md-7 ">
                            <ul class="list-unstyled " style={{marginBottom:'10px',fontSize:'19px',fontFamily:'sans-serif',paddingTop:'30px'}}>
                                <li style={{textAlign:'left'}}>Suit 1.01,Level 1,39 Hume Street<br/>Crows Nest, Nsw 2065,Australia</li>

                                <li style={{textAlign:'left'}}>Phone +61 2 9922 2488</li>

                                <li style={{textAlign:'left'}}>Jardinethompsonit.com.au<br/>support@jardineit.com.au</li>


                            </ul>
                        </div>
                        </div>
                    </div>
                        </div>
                   </div>

            </footer>


)

export default Footer
