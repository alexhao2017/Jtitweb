import React from 'react'
import { Link } from 'gatsby'
import jtit from '../images/jt_it.png'
import Layout from '../components/layout'
import Slides from './slides'



const IndexPage = (props) => (

  <Layout location ={props.location} >
  <div style={{border:'8px solid #f7d26e',width:'96%',marginTop:'-8px',marginLeft:'2%',height:'50%',position:'relative',zIndex:'0'}}>
    <Slides/>
    </div>
    <div class='row'>
              <div class="col-md-5">
                 <div style={{borderRight:'8px solid #f7d26e',width:'0.416',height:'41px'}}></div>
              </div>
    </div>
  </Layout>

)

export default IndexPage
