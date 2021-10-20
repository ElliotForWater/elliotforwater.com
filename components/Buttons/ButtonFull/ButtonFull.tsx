import React from 'react'
import Button from '../Button'
import classnames from 'classnames'

interface Props {
  customStyle?: { color: string; background: string; colorHover: string; backgroundHover: string }
  size?: 'big' | 'small'
  fluid?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: any
  linkHref?: string
  target?: string
}

export default function ButtonFull({ customStyle, ...props }: Props) {
  let customColor = 'white'
  let customBackground = 'var(--elliotSecondary)'
  let customColorHover = 'var(--elliotPrimary)'
  let customBackgroundHover = 'white'

  if (customStyle) {
    const { color, background, colorHover, backgroundHover } = customStyle
    customColor = color
    customBackground = background
    customColorHover = colorHover
    customBackgroundHover = backgroundHover
  }
  return (
    <span className={classnames('buttonFull', { size: props.size })}>
      <Button {...props} />

      <style jsx>
        {`
          .buttonFull {
            background-color: ${customBackground};
            color: ${customColor};
            border-radius: 7px;
            transition: 0.5s;
            font-weight: bold;
            display: inline-block;
            text-transform: uppercase;
          }

          .buttonFull:hover {
            background-color: ${customBackgroundHover};
            color: ${customColorHover};
          }

          .buttonFull a {
            color: ${customColor};
          }

          .buttonFull a:hover {
            color: ${customColorHover};
          }
        `}
      </style>
    </span>
  )
}
