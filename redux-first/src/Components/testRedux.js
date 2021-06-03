import React from 'react'

const MyComponent = ({data,dataAction})=>{
    return(
        <div>
            <h3 className='text text-light bg-dark mb-5' style={{textAlign:'center'}}>First Component</h3>
            <h4 className='text text-primary'>{data}</h4>
            <button className='btn btn-success' onClick={dataAction}>Click</button>
        </div>
    )
}


export default MyComponent