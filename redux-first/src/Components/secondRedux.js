import React from 'react'

const NameComponent = ({first,second,nameAction})=>{
    console.log(nameAction);
    return(
        <div>
            <h3 className='text text-light bg-dark mt-5 mb-2' style={{textAlign:'center'}}>Second Component</h3>
            <h4 className='text text-primary'>{first}</h4>
            <h4 className='text text-danger'>{second}</h4>
            <button className='btn btn-info' onClick={nameAction}>Click</button>
        </div>
    )
}


export default NameComponent