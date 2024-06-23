import PropTypes from 'prop-types';

export const Square = ({ children, isSelected, updateBoard, index }) => {

    const className = `square ${isSelected ? 'is-selected' : ''}`   //se crea una variable 'className', si 'isSelected' es true se agrega la clase 'is-selected' a 'square'

    const handleClick = () => {  //funcion para ejecutar al hacer click
        updateBoard(index) //ejecuta otra funcion que recibe como parametro el indice
    }

    return (
        <div onClick={handleClick} className={className}>  {/*muestra un div con el metodo 'onClick' que ejecuta la funcion 'handleClick'*/}
            {children}
        </div>
    )
}

Square.propTypes = { //para evitar errores visuales molestos
    children: PropTypes.node,
    isSelected: PropTypes.bool,
    updateBoard: PropTypes.func,
    index: PropTypes.number
};