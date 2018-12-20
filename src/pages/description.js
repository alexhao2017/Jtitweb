import React, { Component } from 'react';

//import foot from '../images/logo_foot.png'
import link1 from '../images/wwd1.png'
import link2 from '../images/wwd2.png'
import link3 from '../images/wwd3.png'
import link4 from '../images/wwd4.png'
import wwd1_img from '../images/wwd1_img.png'
import wwd2_img from '../images/wwd2_img.png'
import wwd3_img from '../images/wwd3_img.png'
import wwd4_img from '../images/wwd4_img.png'

function NumberList(props){
  const numbers = props.list;
  return (
      <ul style={{listStyleType:'none'}}>
          {
              numbers.map((number,index) =>
                  <li key={index} style={{paddingLeft:'2em',fontSize:'30px',color:'#052353',fontFamily:'arial',marginTop:'1.5em'}} id='Delay'>{number}</li>
              )
          }
      </ul>
  );
}
class Description extends Component {
  constructor(){
    super()
    this.state = {
        content:['Review clients existing services and infrastructure',
                                 'Identify threats and opportunities',
                                 "Design current relevant customer centric tailored solution options enhanding efficiency and collaboration",
                                 'Procure software and hardware',
                                 'Project manage and implement solutions'],
        link:1,
        title:'ITC infrastructure',
        opacity1: "0.4",
        opacity2: "0.4",
        opacity3: "0.4",
        opacity4: "0.4",
        sty1:'portbar',
        sty2:'portbaro',
        sty3:'portbaro',
        sty4:'portbaro',
      }

    }
  page_1=(id,e)=>{
    e.preventDefault();
    if (id==2){
      this.setState({ content:['Review clients existing services and infrastructure',
                               'Identify threats and opportunities',
                               "Design current relevant customer centric tailored solution options enhanding efficiency and collaboration",
                               'Procure software and hardware',
                               'Project manage and implement solutions'],
                     title:'ITC infrastructure',
      sty1:'portbar',
      sty2:'portbaro',
      sty3:'portbaro',
      sty4:'portbaro',
      opacity1:'1',
      opacity2:'0.4',
      opacity3:'0.4',
      opacity4:'0.4',
    })
    }

  }
  page_2=(id,e)=>{
    e.preventDefault();
    if (id==2){this.setState({ content:['Live remote monitoring of clients IT infrastructure',
                             'Proactive response to identified issues',
                             'Remote and on site Support for clients teamm,help desk',
                            ],
                               title:'Client Support',
      sty1:'portbaro',
      sty2:'portbar',
      sty3:'portbaro',
      sty4:'portbaro',
      opacity1:'0.4',
      opacity2:'1',
      opacity3:'0.4',
      opacity4:'0.4',})
    }

  }
  page_3=(id,e)=>{
    e.preventDefault();
    if (id==2){this.setState({ content:['Remote data backup',
                             'Network security enhancement',
                             'Cutting edge cyber security threat management',],
                               title:'Network Security',
      sty1:'portbaro',
      sty2:'portbaro',
      sty3:'portbar',
      sty4:'portbaro',
      opacity1:'0.4',
      opacity2:'0.4',
      opacity3:'1',
      opacity4:'0.4',})
    }

  }
  page_4=(id,e)=>{
    e.preventDefault();
    if (id==2){this.setState({ content:['Integrated Information Architecture,User Interface,User Experience and Information Design',
                             'Business Analytics/Data Dashboard Development',
                             'Data Warehouses,Websites,Mobile Apps',
                             'NETO eCommerce platform accredited partner',
                             'cSchool,Education Administrative Software'],
                               title:'Application Creation',
      sty1:'portbaro',
      sty2:'portbaro',
      sty3:'portbaro',
      sty4:'portbar',
      opacity1:'0.4',
      opacity2:'0.4',
      opacity3:'0.4',
      opacity4:'1',})
    }

  }

  render() {
    const { content, link,opacity1, opacity2,opacity3,opacity4} = this.state;

    return (
      <div>
       <div class="row" >
              <div class="col-md-5">
              <div
              style={{borderRight:'8px solid #f7d26e',fontSize:'20px', paddingLeft:'30px', paddingTop:'0px'}}

              onMouseEnter={(e) => this.page_1(2, e)}
              onMouseLeave={(e) => this.page_1(1, e)}>
              <div class='row'>
                <div class='col-md-10'>
                <img src={link1}  style= {{opacity:opacity1}} /></div>
                <div class='col-md-2' style={{paddingTop:'3em'}}>
                <div class={this.state.sty1} style={{border:'4px solid #f7d26e'}}></div></div>
              </div>
              </div>

             <div
              style={{borderRight:'8px solid #f7d26e',fontSize:'20px',paddingLeft:'50px',paddingTop:'0px'}}

              onMouseEnter={(e) => this.page_2(2, e)}
              onMouseLeave={(e) => this.page_2(1, e)}>
              <div class='row'>
                <div class='col-md-10'>
                <img src={link2} style= {{opacity:opacity2}}/></div>
                <div class='col-md-2'style={{paddingTop:'3em'}}>
                <div class={this.state.sty2} style={{border:'4px solid #f7d26e'}}></div></div>
              </div>
              </div>
             <div
              style={{borderRight:'8px solid #f7d26e',fontSize:'20px', paddingLeft:'65px', paddingTop:'0px'}}

              onMouseEnter={(e) => this.page_3(2, e)}
              onMouseLeave={(e) => this.page_3(1, e)}>
              <div class='row'>
                  <div class='col-md-10'>
                  <img src={link3}  style= {{opacity:opacity3}}/></div>
                  <div class='col-md-2' style={{paddingTop:'3em'}}>
                  <div class={this.state.sty3} style={{border:'4px solid #f7d26e'}}></div></div>
                </div>
                </div>

            <div
              style={{borderRight:'8px solid #f7d26e', fontSize:'20px', paddingLeft:'75px', paddingTop:'0px'}}

              onMouseEnter={(e) => this.page_4(2, e)}
              onMouseLeave={(e) => this.page_4(1, e)}>
               <div class='row'>
                  <div class='col-md-10'>
                  <img src={link4}  style= {{opacity:opacity4}}/></div>
                  <div class='col-md-2' style={{paddingTop:'3em'}}>
                  <div class={this.state.sty4} style={{border:'4px solid #f7d26e'}}></div></div>
                </div>
                </div>

      </div>
               <div class="col-md-6">
               <div style={{fontSize:'45px',color:'#808080',fontFamily:'arial'}}>What We Do</div>
                <div style={{fontSize:'40px',color:'#052353',fontFamily:'arial'}}>{this.state.title}</div>
                   <NumberList  list={this.state.content}/>

            </div>
     </div>

    <div class='row'>
              <div class="col-md-5">
                 <div style={{borderRight:'8px solid #f7d26e',width:'0.416',height:'41px'}}></div>
              </div>
    </div>

    </div>
    );
  }
}
export default Description
