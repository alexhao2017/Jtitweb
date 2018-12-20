import { Carousel } from 'react-responsive-carousel';
import Pdf from './pdf.js'
import Pdf1 from './pdf1.js'
import Pdf2 from './pdf2.js'
import Pdf3 from './pdf3.js'
import React, { Component } from 'react';
import Layout from '../components/layout'

const Portfolios= (props) => (
  <Layout location ={props.location}>
  <div style={{border:'8px solid #f7d26e',width:'96%',marginTop:'-8px',marginLeft:'2%',height:'50%',position:'relative',zIndex:'0'}}>
        <Carousel showArrows={true} showStatus={false} infiniteLoop={true} showThumbs={false} autoPlay={false} width={'1000'}>
            <div>
              <Pdf/>
              <p className="legend"></p>
            </div>
            <div>
              <Pdf1/>
              <p className="legend"></p>
            </div>
            <div>
              <Pdf2/>
              <p className="legend"></p>
            </div>
            <div>
              <Pdf3/>
              <p className="legend"></p>
            </div>

        </Carousel>
  </div>
        <div class='row'>
                  <div class="col-md-5">
                     <div style={{borderRight:'8px solid #f7d26e',width:'0.416',height:'41px'}}></div>
                  </div>
                  </div>
        </Layout>

      )
export default Portfolios
