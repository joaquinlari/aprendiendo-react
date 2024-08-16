import './Footer.css'
import PropTypes from 'prop-types';

Footer.propTypes = {
    filters: PropTypes.object.isRequired
};

export function Footer({ filters }) {
    // const { filters } = useFilters()

    return (
        <footer className='footer'>
            {JSON.stringify(filters, null, 2)}
        </footer>
    )
} 