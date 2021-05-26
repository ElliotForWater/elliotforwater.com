import React from 'react'
import Button from '../Button'

interface Props {
  customStyle?: { color: string; colorHover: string; backgroundHover: string }
  size?: 'big' | 'small'
  fluid?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
  linkHref?: string
  target?: string
}

export default function ButtonOutline(props: Props) {
  let customColor = 'var(--elliotSecondary)'
  let customColorHover = 'white'
  let customBackgroundHover =
    'linear-gradient(to right, var(--elliotSecondary) 0%, var(--elliotPrimary) 51%, var(--elliotSecondary) 100%);'

  if (props.customStyle) {
    const { color, colorHover, backgroundHover } = props.customStyle
    customColor = color
    customColorHover = colorHover
    customBackgroundHover = backgroundHover
  }

  return (
    <span className='outline'>
      <Button {...props} />

      <style jsx>
        {`
          .outline {
            background-image: none;
            border: 2px solid ${customColor};
            color: ${customColor};
            font-weight: bold;
            display: inline-block;
            border-radius: 7px;
            transition: 0.5s;
            text-transform: uppercase;
          }

          .outline a {
            color: ${customColor};
          }

          .outline:hover {
            color: ${customColorHover};
            background: ${customBackgroundHover};
            border: 2px solid transparent;
          }

          .outline:hover a {
            color: ${customColorHover};
          }
        `}
      </style>
    </span>
  )
}
