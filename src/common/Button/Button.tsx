import './Button.css';

// @ts-ignore
export default function Button(props) {

    return (
        <button
            type='button'
            className='button'
            onClick={props.onClick}
            key={props.id}
        >
            {props.title.toUpperCase()}
        </button>
    );
}

