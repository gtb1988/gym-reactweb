import React from 'react'

const PriceboxCard = (props) => {
  return (
        <div className='col-md-4'>
        <div className='pricebox'>
                <div className='prc-blackbg'>
                        <h2>{props.title}</h2>
                        <span>{props.smtitle}</span>
                        <hr className='divider' />
                        <figure>$ {props.price}</figure>
                </div>
                <div className='liststyle'>
                <ul>
                    <li>{props.list1}</li>
                    <li>{props.list2}</li>
                    <li>{props.list3}</li>
                    <li>{props.list4}</li>
                    <li>{props.list5}</li>
                </ul>
                <button className='button'>{props.button}</button>
                </div>
        </div>
        </div>
  )
}

export default PriceboxCard