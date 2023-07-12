import React from 'react'
import BenefitsCard from './BenefitsCard'
import BenefitsData from './BenefitsData'
import './Benefits.css'

const BenefitsHome = () => {
  return (
        <>
            <div className='benefits-section'>
                <div className='container'>
                    <div className='row justify-content-center relative'>
                        {BenefitsData.databox.map((item, index)=>{
                            return(
                              <BenefitsCard
                                img={item.img}
                                title={item.title}
                                pera={item.pera}
                                key={index}
                              />
                            )
                        }
                          
                        )}
                    </div>
                </div>
            </div>
        </>
  )
}

export default BenefitsHome