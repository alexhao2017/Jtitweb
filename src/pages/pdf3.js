

import tut from '../images/tut.pdf'
import sec from '../images/sec.pdf'
import infra from '../images/infra.pdf'
import infra2 from '../images/infra2.pdf'
import cost from '../images/cost.pdf'
import pf_title4 from '../images/pf_title4.png'
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
let pool=[cost,infra,sec]
class Pdf3 extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    doc:0
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
  pagepre=({e})=>{
    const pageno=this.state.pageNumber
    if (pageno>1){this.setState({ pageNumber: this.state.pageNumber -1 })
    console.log('NO22:'+pageno)
    }
    else{console.log('NO1')}
  }
  pageNext=({e})=>{
    const pageno=this.state.pageNumber

    if (pageno<this.state.numPages){this.setState({ pageNumber: this.state.pageNumber +1 })
    console.log('NO33:'+pageno)
    }
    else{console.log('NO1')}
  }
  pdf0=({e})=>{
    this.setState({doc:0})
    }
  pdf1=({e})=>{
      this.setState({doc:1})
      }
  pdf2=({e})=>{
        this.setState({doc:2})
        }
  //pdf3=({e})=>{
            //  this.setState({doc:3})
            //  }

  render() {
    const { pageNumber, numPages,doc } = this.state;

    let pdf=pool[doc];

    return (

      <div>


          <div class="row" >
              <div class="col-md-5" style={{marginLeft:'-11px',height:'400px'}}>

                     <div style={{fontSize:'35px',color:'#052353',marginTop:'35px',textAlign:'left',paddingLeft:'2em'}}>Portfolio</div>
                     <img src={pf_title4} style={{marginLeft: '-250px', width: '50%'}}/>
                     <div style={{fontSize:'15px',color:'#052353',marginTop:'35px',textAlign:'left',paddingLeft:'5em'}}>texttexttexttexttexttexttexttexttexttexttexttextt
                     exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                     texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                     texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</div>










                           <div type='link' style={{fontSize:'15px',color:'#052353',paddingLeft:'100px',marginTop:'6em',textAlign:'left'}} onClick={this.pdf0}>Portfolio</div>
                         <div style={{fontSize:'15px',color:'#052353',paddingLeft:'100px',marginTop:'35px',textAlign:'left'}} onClick={this.pdf1}>IT Infrastructure Restructuring Service</div>
                           <div style={{fontSize:'15px',color:'#052353',paddingLeft:'100px',marginTop:'35px',textAlign:'left'}} onClick={this.pdf2}>Design and Deployment of Network Security Infrastructure</div>
               </div>
               <div class="col-md-1">

               <button type='button' class='btn btn-outline-secondary' style={{marginTop:'35em',color:'#052353',backgroundColor:'#f7d26e'}} onClick={this.pagepre}>Prev Page</button>
               <button type='button' class='btn btn-outline-secondary' style={{marginTop:'1em',color:'#052353',backgroundColor:'#f7d26e'}} onClick={this.pageNext}>Next Page</button>
               <button type='button' class='btn btn-outline-secondary' style={{marginTop:'1em',color:'#052353',backgroundColor:'#f7d26e'}} ><a className='download' href={pool[doc]} download>Download</a></button>
               </div>
               <div class="col-md-6" >
             <Document
          file={pdf}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p style={{paddingLeft:'12em',fontFamily:'arial'}}>Page {pageNumber} of {numPages}</p>
        </div>

    </div>
    <div class='row'>
              <div class="col-md-5">

              </div>
    </div>
    </div>
    );
  }
}
export default Pdf3
