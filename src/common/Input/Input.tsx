import './Input.css'
import React, {
  type ChangeEvent,
  useState
} from 'react'

export interface InputProps {
  value: string
  placeholder: string
  onChange: (value: string) => void
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  onKeyUp
}) => {
  const [initialValue, setValue] = useState(value)

  const setInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)

    onChange(value)
  }

  return (
        <input
            type="text"
            className="input-component"
            data-testid="input-component"
            placeholder={placeholder}
            value={initialValue}
            onChange={e => { setInputValue(e) }}
            onKeyUp={onKeyUp}
        ></input>
  )
}

export default Input

// Input.defaultProps = {
//     placeholder: 'Enter text to start search'
// }
