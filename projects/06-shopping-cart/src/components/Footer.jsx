import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
import './Footer.css'

export function Footer() {
    const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {
                JSON.stringify(cart, null, 2)
            }
        </footer>
    )
} 