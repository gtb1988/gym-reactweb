import React from 'react'
import Innerbanner from './Innerbanner'
import BenefitsHome from '../component/Benefits/BenefitsHome'

const Services = () => {
  return (
      <>
        <Innerbanner 
          innerbanner='Services'
        />

        <div className='services-page'>
        <BenefitsHome />
        </div>
      </>
  )
}

export default Services