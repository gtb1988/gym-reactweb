import React, { useEffect } from 'react'

const Aip = () => {

    const getUsers = async () => {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();
        console.log(data);
        
    }

    useEffect(() => {
        getUsers();
    });

  return (
    users.map((curElem) => {
        return(
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='priduct-img'>{curElem.title}</div>
                </div>
            </div>
        )
    })
    
    
  )
}


export default Aip