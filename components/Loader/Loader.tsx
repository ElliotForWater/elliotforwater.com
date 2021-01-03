import React from 'react'
import { FiLoader } from 'react-icons/fi'

export default function Loader () {
  return (
    <div className='loader'>
      <FiLoader />
      <style jsx>
        {`
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100%;
          }

          .loader :global(svg) {
            font-size: 25px;
            animation: spin 3s infinite;
            animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}
