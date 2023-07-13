import React from 'react'

const BenefitsCard = (props) => {
  return (
        <>
          
                <div className='col-md-3'>
                    <div className='sr-data'>
                        <a href='#'>
                        <div className='img-wp'><img src={props.img} /></div>
                        <h2>{props.title}</h2>
                        <p>{props.pera}</p>
                        </a>
                    </div>
                </div>
          
        </>
  )
}

export default BenefitsCard