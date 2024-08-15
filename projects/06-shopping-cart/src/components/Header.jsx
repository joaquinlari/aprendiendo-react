import { Filters } from './Filters.jsx'
import PropTypes from 'prop-types';

Header.propTypes = {
    changeFilters: PropTypes.func.isRequired
};

export function Header({ changeFilters }) {
    return (
        <header>
            <h1>React Shop 🛒</h1>
            <Filters onChange={changeFilters} />
        </header>
    )
}

export default Header