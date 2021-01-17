import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react'
import classnames from 'classnames'
import styles from './Inputs.module.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any // declare register props
  errors?: any
  type: 'text' | 'email' | 'number' | 'checkbox' | 'search'
  rules?: any
  name: string
  customClassname?: string
}
export function Input({ name, type, register, rules = {}, errors = {}, customClassname, ...rest }: InputProps) {
  return (
    <div className={styles.inputWrap}>
      <input className={classnames({ [styles.inputError]: errors[name] }, customClassname, styles.input)} name={name} type={type} ref={register(rules)} {...rest} />
      {errors[name] && <div className={styles.error}>{errors[name].message}</div>}
    </div>
  )
}

interface optionsProps {
  value: string | number
  label: string
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  register: any // declare register props
  errors?: any
  rules?: any
  name: string
  options: optionsProps[]
}
export function Select({ options, name, register, rules = {}, errors = {}, ...rest }: SelectProps) {
  return (
    <select className={styles.select} name={name} ref={register} {...rest}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label || value}
        </option>
      ))}
    </select>
  )
}
