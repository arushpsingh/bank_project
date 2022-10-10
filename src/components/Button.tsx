import React from 'react'
import styles from '../style'

const Button = (props: any) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none  ${styles} rounded-lg mt-10`}>
      {props.text}
    </button>
  )
}

export default Button;