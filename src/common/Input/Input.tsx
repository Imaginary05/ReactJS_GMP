import './Input.css'
import {
    ChangeEvent,
    useState
} from 'react';

// @ts-ignore
export default function Input(props) {
    const [initialValue, setValue] = useState(props.value);

    const setInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = (event.target as HTMLInputElement).value;
        setValue(value);

        props.onChange(value)
    }

    return (
        <input
            type="text"
            placeholder={props.placeholder}
            value={initialValue}
            onChange={e => setInputValue(e)}
            onKeyUp={props.onKeyUp}
        ></input>
    )
}

Input.defaultProps = {
    placeholder: 'Enter text to start search'
}
