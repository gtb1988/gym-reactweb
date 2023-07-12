import React from 'react'
import PriceboxCard from './PriceboxCard'
import PriceboxData from './PriceboxData'
import './Pricebox.css'

const PriceboxHome = () => {
  return (
            <div className='price-section'>
                <div className='container'>
                    <div className='row'>
                        {PriceboxData.Pricedata.map((item, index) => {
                             return(
                                <PriceboxCard
                                    title={item.title}
                                    smtitle={item.smtitle}
                                    price={item.price}
                                    list1={item.list1}
                                    list2={item.list2}
                                    list3={item.list3}
                                    list4={item.list4}
                                    list5={item.list5}
                                    button={item.button}
                                    key={index}
                                />
                             )
                        }
                        )}
                    </div>
                </div>
            </div>
  )
}

export default PriceboxHome