import React from 'react'


const PortfolioCard = (props) => {
  return (
    <>
       
            <div className='portbox'>
                    <img src={props.img} />
                    <div className='cardtitle'>
                      <a href='#'>
                          {props.title}
                      </a> 
                   </div>
            </div>
       
        </>
  )
}

export default PortfolioCard