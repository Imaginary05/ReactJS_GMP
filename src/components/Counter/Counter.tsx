import {
    Component,
    createElement
} from 'react';
import Button from '../../common/Button/Button';

/*
* A component that renders a numeric value and two buttons:
* one to decrement the value by 1, another to increment the value by 1.
* The component should take an initial value in a property.
* The component should be written using EcmaScript classes syntax,
* the `render` method should use `React.createElement` API (without JSX).
* */
export type CounterProps = {
    initialCount: number;
};

export default class Counter extends Component<any, any> {

    constructor(props: CounterProps) {
        super(props);
        this.state = {
            count: props.initialCount
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return createElement(
            'div',
            {
                className: 'counter'
            },
            [
                createElement(
                    'p',
                    null,
                    "Count: ",
                    this.state.count,
                ),
                createElement(Button, {
                    title: 'Increment',
                    type: 'button',
                    onClick: this.increment
                }),
                createElement(Button, {
                    title: 'Decrement',
                    type: 'button',
                    onClick: this.decrement
                }),
            ]
        )
    }
}
