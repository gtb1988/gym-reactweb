import React from 'react'
import GalleryCard from './GalleryCard'
import GalleryData from './GalleryData'
import './Gallery.css'

const GalleryHome = () => {
  return (
        <div className='gallery-main'>
                {GalleryData.Glimg.map((item, index)=>{
                    return(
                        <GalleryCard
                            img={item.img}
                            smtitle={item.smtitle}
                            title={item.title}
                            key={index}
                        />
                    )
                
                }
              )
            }
        </div>
  )
}

export default GalleryHome