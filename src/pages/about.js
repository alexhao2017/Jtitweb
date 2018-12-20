import React from 'react'
import { Link } from 'gatsby'
import aus from '../images/aus.png'
import Layout from '../components/layout'
import operaHouse from '../images/opraHouse.png'
const About = (props) => (
  <Layout location ={props.location}>
  <div class="row" >
        <div class="col-md-5" >
              <div class='aboutout'></div>
              <div class='aboutimg'></div>
              <div style={{borderRight:'8px solid #f7d26e',height:'20em'}}></div>
        </div>
        <div class="col-md-7">
              <div style={{fontSize:'45px',color:'#052353',paddingLeft:'100px',marginTop:'35px', fontFamily:'sans-serif'}}>About Us</div>
              <div style={{border:'4px solid #f7d26e',marginLeft:'-15px',width:'300px', fontFamily:'sans-serif'}}></div>
              <div style={{fontSize:'30px',color:'#052353',paddingLeft:'100px',marginTop:'35px', fontFamily:'sans-serif'}}>History</div>
              <div style={{fontSize:'20px',color:'#052353',paddingLeft:'100px', fontFamily:'sans-serif'}}>Founded in Sydney more than ten years ago,leveraging a<br/>
                   skilled and experienced local and international tram providing<br/>
                   ITC services to our clients.
              </div>
              <div style={{fontSize:'30px',color:'#052353',paddingLeft:'100px',marginTop:'35px', fontFamily:'sans-serif'}}>Mission</div>
              <div style={{fontSize:'20px',color:'#052353',paddingLeft:'100px', fontFamily:'sans-serif'}}>Our mission is to provide clients with their organization centric<br/>
                   comprehensive quality,effective value added services<br/>
             </div>
             <div  style={{marginTop:'-10px',backgroundImage: `url(${operaHouse})`,backgroundSize:'100% 100%',height:'250px',width:'690px',marginLeft:'100px'}}>
              </div>

        </div>
  </div>
  </Layout>
)

export default About
