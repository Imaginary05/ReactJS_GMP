import styles from'./Button.module.css'
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
            className={styles.button}
            onClick={onClick}
            key={title}
        >
            {title}
        </button>
  )
}

export default Button
