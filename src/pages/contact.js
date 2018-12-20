import React from 'react'
import { Link } from 'gatsby'
import operaHouse from '../images/opraHouse.png'
import Layout from '../components/layout'
import Map from './map'
const Contact = (props) => (
  <Layout location ={props.location}>
 <div style={{border:'8px solid #f7d26e',width:'96%',marginTop:'-8px',marginLeft:'2%',height:'120%',position:'relative',zIndex:'0'}}>

     <div class="row" >
        <div class="col-md-5" style={{marginLeft:'-11px',marginTop:'30px'}}>
              <div  style={{marginTop:'30px',height:'30em',width:'400px',marginLeft:'10em'}}>
              <div style={{fontSize:'18px',color:'#052353',marginTop:'0px',fontFamily:'arial',paddingLeft:'15px'}}>Crows Nest,Nsw 2065,Australia</div>
              <Map/>
              </div>
        </div>
        <div class="col-md-6">
        <div style={{fontSize:'30px',color:'#052353',paddingLeft:'100px',marginTop:'70px',fontFamily:'arial'}}>Contact Us</div>
        <div style={{fontSize:'18px',color:'#052353',paddingLeft:'100px',marginTop:'20px',fontFamily:'arial'}}>Suit 1.01,Level 1,39 Hume Street,<br/>Crows Nest, Nsw 2065,Australia</div>
        <div style={{fontSize:'18px',color:'#052353',paddingLeft:'100px',marginTop:'20px',fontFamily:'arial'}}>Phone +61 2 9922 2488 </div>
        <div style={{fontSize:'18px',color:'#052353',paddingLeft:'100px',marginTop:'20px',fontFamily:'arial'}}>Jardinethompsonit.com.au<br/>support@jardineit.com.au </div>
        <div  style={{marginTop:'px',backgroundImage: `url(${operaHouse})`,backgroundSize:'100% 100%',height:'250px',width:'100%',marginLeft:'43px'}}>
              </div>
        </div>

  </div>
  </div>
  <div class='row'>
              <div class="col-md-5">
                 <div style={{borderRight:'8px solid #f7d26e',width:'0.416',height:'41px'}}></div>
              </div>
    </div>
  </Layout>
)

export default Contact
