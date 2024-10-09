import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Satisfaction from '../components/Satisfaction';
import FeaturedProducts from '../components/FeaturedProducts';
import EssentialCollection from '../components/EssentialCollection';
import TrendingProducts from '../components/TrendingProducts';

const HomePage = () => {
  return (
    <div>
        <Header />
      <Hero />
      <Collections />
      <Satisfaction />
      <FeaturedProducts />
      <EssentialCollection />
      <TrendingProducts />
    </div>
  )
}

export default HomePage