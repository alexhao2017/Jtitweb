import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Description from './description'
const SecondPage = (props) => (
  <Layout location ={props.location}>
   <Description/>
  </Layout>
)

export default SecondPage
