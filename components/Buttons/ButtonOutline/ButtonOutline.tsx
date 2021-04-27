import React from 'react'
import Button from '../Button'

export default function ButtonOutline(props) {
  const customColor = props.customStyle ? props.customStyle.color : 'var(--elliotSecondary)'
  const customColorHover = props.customStyle ? props.customStyle.hover : 'var(--elliotSecondary)'
  return (
    <span className={props.outlineReverse ? 'outlineReverse' : 'outline'}>
      <Button {...props} />

      <style jsx>
        {`
          .outline {
            background-image: none;
            border: 2px solid var(--elliotSecondary);
            color: var(--elliotSecondary);
            font-weight: bold;
            display: inline-block;
            border-radius: 7px;
          }

          .outline a {
            color: var(--elliotSecondary);
          }

          .outline:hover {
            color: white;
            background-image: linear-gradient(
              to right,
              var(--elliotSecondary) 0%,
              var(--elliotPrimary) 51%,
              var(--elliotSecondary) 100%
            );
            border: 2px solid transparent;
          }

          .outline:hover a {
            color: white;
          }

          .outlineReverse {
            background-image: none;
            font-weight: bold;
            display: inline-block;
            border: 2px solid white;
            text-transform: uppercase;
            border-radius: 7px;

            color: ${customColor};
          }

          .outlineReverse a {
            color: ${customColor};
          }

          .outlineReverse:hover {
            color: ${customColorHover};
            background-image: none;
            background-color: white;
            border: 2px solid transparent;
          }

          .outlineReverse:hover a {
            color: ${customColorHover};
          }
        `}
      </style>
    </span>
  )
}
