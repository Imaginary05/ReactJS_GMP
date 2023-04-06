import './Input.css'
import React, {
    ChangeEvent,
    useState
} from 'react';

export interface InputProps {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    value,
    placeholder,
    onChange,
    onKeyUp,
}) => {
    const [initialValue, setValue] = useState(value);

    const setInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = (event.target as HTMLInputElement).value;
        setValue(value);

        onChange(value)
    }

    return (
        <input
            type="text"
            data-testid="search-input"
            placeholder={placeholder}
            value={initialValue}
            onChange={e => setInputValue(e)}
            onKeyUp={onKeyUp}
        ></input>
    )
}

export default Input;

// Input.defaultProps = {
//     placeholder: 'Enter text to start search'
// }
