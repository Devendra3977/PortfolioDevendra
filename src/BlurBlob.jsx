import React from 'react'
import PropTypes from 'prop-types';


const BlurBlob = ({position, size}) => {
// destructuring position and size
const {top, left} = position;
const {height, width} = size; 

  return (
    <div className='absolute'
    style={{
        height: height,
        width: width,
        top: top,
        left: left,
        transform: 'translate(-50%, -50%)',
    }}
    >
        <div className='w-full h-full bg-purple-500 opacity-20 rounded-full blur-3xl animate-blob'>

        </div>

    </div>
  )
}

BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        height: PropTypes.string,
        width: PropTypes.string,
    })
}

export default BlurBlob
