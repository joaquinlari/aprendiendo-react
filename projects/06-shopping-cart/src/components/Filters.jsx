import { useState, useId } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => {
            return {
                ...prevState,
                minPrice: event.target.value
            }
        })
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        })
        )
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>A partir de:</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters