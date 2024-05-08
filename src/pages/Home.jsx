import React, { useEffect, useRef, useState } from 'react'
import Aside from '../components/Aside'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

function  Home (){

  return (
    <>
    <Aside/>
    <Slider url={"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"} title={"Por estrenar"}/>
    <Slider url={"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"} title={"Cartelera"}/>
    <Slider url={"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"} title={"Mejor valoradas"}/>
    <Footer/>
    </>
  )
}

export default Home;