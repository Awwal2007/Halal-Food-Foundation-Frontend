import React from 'react';
import './css/Home.css'
import { Link } from 'react-router-dom'
import CustomMarquee from '../components/CustomMarquee'
import ImageCarousel from '../components/ImageCarousel'
import LatestNews from '../components/LatestNews'
import SideBar from '../components/SideBar'
import { SlPeople } from 'react-icons/sl'
import MissedArticles from '../components/MissedArticles'
import { Button } from '@mui/joy'
import ButtonBar from '../components/BottomBar'

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className='marquee-container'>
        <div className='latest-news'>Latest News</div>
        <div className="marquee-wrapper">
          <CustomMarquee />
        </div>
      </div>
      
      <div className="hero-section">
        <div className='carousel'>
          <ImageCarousel />
        </div>
        <div className='latest-section'>
          <LatestNews />
        </div>
      </div>
      
      <div id='about-us' className='home-container'>
        <h2  className="home-title">About Us</h2>
      </div>
      
      <div className="home-content">
        <div className='first-side'>
          <p>
            The Halal Food Foundation (HFF) is a not for profit, registered UK charity (1139457). We aim to make the concept of ‘halal’ more accessible and well known to the public through training schemes, workshops and educational material. We feel as though halal is more than just what you can and cannot eat – it is important to understand why certain food stuffs are prohibited and why the concept of halal transcends to more than just food. Education is key in administering such information and knowledge is indeed, power. Here at the HFF we are firm believers of the philosophy ‘give a man a fish, feed him for a day... teach a man to fish and feed him for a lifetime’ – by forming effective relationships and networks together we can inform, engage and enlighten others. Our charity was set up with a vision – a vision that sees more people understanding the concepts of what halal is so that they too can appreciate the abundance of health benefits, cleanliness and goodness of it.
          </p>
          
          <h4>What We Do</h4>
          <p>
            There is a gap in the Muslim community both within and outside of mosques, schools and Islamic centres in providing appropriate educational resources and information on what halal is, what makes food halal, how we know if food is halal and how to live a halal lifestyle. This gap was acknowledged by Halal Accreditation Limited; the idea of an organisation that promotes halal and its various facets to mosques and schools as well as the wider community was put forth and thus, the Halal Food Foundation was born in mid-2013. The HFF want a wider spectrum of the community to eat more halal food but also to understand its importance in Islam. It is undoubtedly easier for many to not eat halal – why seek out halal when you can go to your local supermarket and pick up any ready-made meal or piece of meat? Maintaining a halal diet requires discipline and control but there is little extra effort needed to source halal meat / products due to the ever-increasing halal industry (and the health benefits are abundant!). Education, therefore, is one of the HFF’s main aims – our charity is rooted in the circulation of information and the development of understanding - we believe that halal does not just pertain to food, we believe that halal is a lifestyle. To keep up to date with what we're doing and what is going on in the world of halal, put your details into our subscription widget on the right and we will get in touch with you every month and keep you informed via our newsletter!
          </p>
          
          {/* <div className='values-container'>
            <div className='people-container'>
              <SlPeople className='people-icon' color='#ab833b' size={50}/>
              <h2>ONE PEOPLE</h2>
              <p>We are one group of people united by our love for our land and mutually work together, for the greater good of the Iwo Land</p>
            </div>
            <div className='people-container'>
              <SlPeople className='people-icon' color='#ab833b' size={50}/>
              <h2>ONE LOVE</h2>
              <p>We are one group of people united by our love for our land and mutually work together, for the greater good of the Iwo Land</p>
            </div>
            <div className='people-container'>
              <SlPeople className='people-icon' color='#ab833b' size={50}/>
              <h2>ONE PRIDE</h2>
              <p>We are one group of people united by our love for our land and mutually work together, for the greater good of the Iwo Land</p>
            </div>
          </div>
           */}
          <div className="secondary-carousel-section">
            <h1 className="secondary-carousel-title">The Iwo People</h1>
            <div className='image-carousel-container'>
              <ImageCarousel />
            </div>
          </div>
        </div>
        
        <div className='second-side'>
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default Home