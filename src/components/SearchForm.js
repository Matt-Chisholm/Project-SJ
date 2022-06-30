import React from 'react';
import '../style/SearchForm.css';
import { Button, Dropdown } from 'semantic-ui-react';

const options = [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
    { key: '4', text: '4', value: '4' },
    { key: '5', text: '5', value: '5' },
]

export default function SearchForm(props) {
    return (
        <div className='search-container'>
            <h2>Find your new home!</h2>
            <div className='search-form'>
                <form>
                    <div className='ui input'>
                        <input className='city-input'
                            size="40" type="text" placeholder='Enter city, address or postal code' />

                    </div>
                    <br />
                    <Dropdown button className='icon dropdown' placeholder='Bedrooms' clearable selection options={options} />
                    <Dropdown button className='icon dropdown' placeholder='Bathrooms' clearable selection options={options} />
                    <br />
                    <div className='ui input'>
                        <input className='max-input'
                            size="40" type="text" placeholder='Max Price Range' />
                    </div>
                    <Button className='secondary' type='submit'>Search</Button>
                </form>
            </div>
        </div>
    )
}
