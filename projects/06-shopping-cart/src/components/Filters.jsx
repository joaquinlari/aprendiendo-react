export function Filters() {
    return (
        <section className='filters'>
            <div>
                <label htmlFor='price'>Precio</label>
                <input
                    type='range'
                    id='price'
                    min='0'
                    max='1000'
                />
            </div>
            <div>
                <label htmlFor='category'>Categoría</label>
                <select id='category'>
                    <option value='all'>Todas</option>
                </select>
            </div>
        </section>
    )
}

export default Filters