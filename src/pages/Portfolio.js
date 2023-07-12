import React from 'react'
import Innerbanner from './Innerbanner'
import PortfolioCard from './PortfolioCard'
import PortfolioData from './PortfolioData'

const POrtfolio = () => {
  return (
    <>
      <Innerbanner 
        innerbanner='Portfolio'
      />
      <div className='container'>
            <div className='portfolio-section'>
                {PortfolioData.Portgallery.map((item, index)=>{
                    return(
                      <PortfolioCard 
                        img={item.img}
                        title={item.title}
                        key={index}
                      />
                    )
                }

                )}
            </div>
      </div>
    </>
  )
}

export default POrtfolio