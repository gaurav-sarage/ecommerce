import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner 
        animation='border' 
        role='status' 
        style={{ 
            widht: '100px', 
            height: '100px', 
            margin: 'auto', 
            display: 'block' 
        }}
    >
      <span class='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
