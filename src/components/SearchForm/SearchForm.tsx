/*
* Refer to the design prototype,
* implement a component that renders a search input and
* a button that triggers a new search.
* The component should accept two properties:
* 1. Initial search query.
* Use the value to set the initial value for the input
* 2. A "onSearch" callback property.
* Call the callback property every time the user presses Enter
* when the input has focus or when the user clicks the Search button.
* Pass current input value in callback arguments.
* */
import './SearchForm.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

export default function SearchForm() {
    let inputValue: string;

    const inputChanged = (value: string) => {
        inputValue = value;
    }

    const keyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            search()
        }
    }

    const search = () => {
        console.log(inputValue);
    }

    return (
       <div className='searchComponent'>
           <div className='searchText'>
               FIND YOUR MOVIE
           </div>
           <div className='searchForm'>
               <Input
                   value=''
                   placeholder="What do you want to watch?"
                   onChange={inputChanged}
                   onKeyUp={keyPress}
               ></Input>
               <Button
                   title="Search"
                   onClick={search}
               ></Button>
           </div>
       </div>
    )
}
