import React from 'react'
import PageNotFoundError from '../assets/PageNotFound.jpg'

const PageNotFound = () => {
  return (
    <div className='w-[50vw] h-[90vh] mx-auto flex flex-col justify-center items-center'>
        <p className='text-5xl h-[10%] text-gray-500 text-center'>Page Not Found!</p>
        <img className='h-[80%] self-center' src={PageNotFoundError} alt="Page not found" />
    </div>
  )
}

export default PageNotFound