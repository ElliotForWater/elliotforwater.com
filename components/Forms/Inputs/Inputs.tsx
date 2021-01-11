import React from 'react'
import { useFormContext } from 'react-hook-form'
import styles from './Inputs.module.css'

export function Input({ name, ...rest }) {
  const methods = useFormContext()
  return <input className={styles.input} name={name} ref={methods.register} {...rest} />
}

export function Select({ options, name, ...rest }) {
  const methods = useFormContext()
  return (
    <select className={styles.select} name={name} ref={methods.register} {...rest}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label || value}
        </option>
      ))}
    </select>
  )
}
