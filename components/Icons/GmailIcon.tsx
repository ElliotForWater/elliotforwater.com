import React, { FC } from 'react'

// prettier-ignore
interface IconProps {
  color?: string,
  size: number
}

const GmailIcon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <path d='M45 16.2l-5 2.75-5 4.75V40h7a3 3 0 003-3V16.2z' fill='#4caf50' />
      <path d='M3 16.2l3.614 1.71L13 23.7V40H6a3 3 0 01-3-3V16.2z' fill='#1e88e5' />
      <path fill='#e53935' d='M35 11.2l-11 8.25-11-8.25-1 5.8 1 6.7 11 8.25 11-8.25 1-6.7z' />
      <path d='M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 003 12.298z' fill='#c62828' />
      <path d='M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0145 12.298z' fill='#fbc02d' />
    </svg>
  )
}

export default GmailIcon
