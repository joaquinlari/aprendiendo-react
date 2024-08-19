import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
    const { filters } = useFilters()

    return (
        <footer className='footer'>
            {JSON.stringify(filters, null, 2)}
        </footer>
    )
} 