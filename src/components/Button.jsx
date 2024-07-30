import React from 'react'

const Button = (props) => {
  return (
    <input  className={`border ${props.btnBorder} ${props.btnColor} ${props.btnText} 
                        mt-10 mr-4 py-2 px-4 hover:bg-purple-700  `} 
            type='button' value={props.btnValue}/>
  )
}

export default Button