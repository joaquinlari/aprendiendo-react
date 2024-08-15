import { useState } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => {
            return {
                ...prevState,
                minPrice: event.taget.value
            }
        })
    }


    return (
        <section className='filters'>
            <div>
                <label htmlFor='price'>A partir de:</label>
                <input
                    type='range'
                    id='price'
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor='category'>Categoría</label>
                <select id='category'>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters