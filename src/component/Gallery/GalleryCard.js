import React from 'react'

const GalleryCard = (props) => {
  return (
        <>
            <div className='gl-div'>
                <img className='glimg' src={props.img} />
                <a href='#' className='gl-title'>
                    <span>{props.smtitle}</span>
                    <figure>{props.title}</figure>
                </a>
            </div>
        </>
  )
}

export default GalleryCard