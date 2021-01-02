import React from 'react'
import loader from '../../loading.gif';

/**
* @author
* @function LoaderComponent
**/

const LoaderComponent = (props) => {
  return(
    <div>
        <img src={loader} style={{width:'60px'}} />
    </div>
   )

 }

export default LoaderComponent