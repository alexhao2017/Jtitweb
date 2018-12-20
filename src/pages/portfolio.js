import React from 'react'
import ReactPDF from 'react-pdf';
import tut from '../images/tut.pdf'
import Layout from '../components/layout'
import ReactDOM from "react-dom";
import spdf from "simple-react-pdf";
import { Document } from 'react-pdf'
import Pdf from './pdf'
import Description from './description'
const Portfolio = (props) => (
  <Layout location ={props.location}>
  
        <Pdf/>   
    </Layout>
)

export default Portfolio
