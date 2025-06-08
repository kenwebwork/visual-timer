import React from 'react'

const LoadingCircle:React.FC = () => {
  return (
    <div className="
      mx-auto
      h-20 w-20
      border-[3px] border-[#555] border-solid border-l-transparent
      rounded-full
      animate-spin [animation-duration:.7s]
    " />
  )
}

export default LoadingCircle