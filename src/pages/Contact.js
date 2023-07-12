import React from 'react'
import Innerbanner from './Innerbanner'

const Contact = () => {
  return (
    <>
      <Innerbanner
        innerbanner='Contact'
      />
      <div className='contact-page'>
        <div className='container'>
        <div className='col-8 mx-auto'>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
            <input type="Phone" className="form-control" id="exampleFormControlInput1" placeholder="Phone No." />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Meaasage' rows="3"></textarea>
          </div>
          <div className="mb-3">
          <button class="button">Submit</button>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact