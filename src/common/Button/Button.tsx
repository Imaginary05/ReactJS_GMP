import './Button.css'
import React from 'react'

export interface ButtonProps {
  type?: 'button' | 'reset' | 'submit' | undefined
  title: string
  onClick: (e: any) => void
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  title,
  onClick
}) => {
  return (
        <button
            type={type}
            className='button'
            onClick={onClick}
            key={title}
        >
            {title}
        </button>
  )
}

export default Button
