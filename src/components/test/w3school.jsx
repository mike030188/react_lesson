import React from 'react';
import logo from './logo512.png'

const ZindexMinus = () => {
  return (
    <div>
        <h1>This is a heading</h1>
        <img src={logo} alt="" style={{position:'absolute', left:'0', top:'-20px', zIndex:'-1'}}/>
        <p>Because the image has a z-index of -1, it will be placed behind the text.</p>
    </div>
  )
}

export default ZindexMinus