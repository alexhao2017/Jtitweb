import React from 'react'
import { Link } from 'gatsby'
import cert from '../images/cert.png'
import Layout from '../components/layout'

const Certification = (props) => (
  <Layout location ={props.location}>
  <div style={{border:'8px solid #f7d26e',width:'96%',marginTop:'-8px',marginLeft:'2%',height:'100%',position:'relative',zIndex:'0'}}>
    <img src={cert} />
    </div>
    <div class='row'>
              <div class="col-md-5">
                 <div style={{borderRight:'8px solid #f7d26e',width:'0.416',height:'41px'}}></div>
              </div>
    </div>
  </Layout>
)

export default Certification
