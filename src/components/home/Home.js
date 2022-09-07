import React from 'react'
import Slider from './slider/Slider'
import About from './about/About'
import Services from './services/Services'
import Team from './team/Team'
import Quote from './quote/Quote'
import Review from './review/Review'
import Amazing from './amazing/Amazing'
import Car from './car/Car'
import News from './news/News'
import Contact from '../contact/Contact'
export default function Home() {

    return (
        <div>
            <Slider />
            <About/>
            <Services />
            <Team />
            <Quote />
            <Review />
            <Amazing />
            <Car />
            <News />
            <Contact />
        </div>
    )
   
}
