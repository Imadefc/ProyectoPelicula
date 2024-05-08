import React, { useEffect, useRef, useState } from 'react'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

function  Home (){

  return (
    <>
    <Aside/>
    <Slider/>
    <Footer/>
    </>
  )
}

export default Home;