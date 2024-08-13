export function Filters() {
    return (
        <section className='filters'>
            <div>
                <label htmlFor='price'>Price</label>
                <input
                    type='range'
                    id='price'
                    min='0'
                    max='1000'
                />
            </div>
        </section>
    )
}

export default Filters