import PropTypes from 'prop-types';
import '../../assets/styles/choiceButtons.css'
import imageImports from '../../utils/imageImport.js'

ChoiceButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

function ChoiceButton({ type, onClick, className }) {
    const { inactive, hover } = imageImports[type] || {}

    return(
        <img 
            className={`choice btn ${className}`}
            id = { type }
            alt={ type } 
            src={ inactive }
            onMouseOver={e => e.currentTarget.src = hover}
            onMouseOut={e => e.currentTarget.src = inactive}
            onClick={onClick}
            >
        </img>
    )
}

export default ChoiceButton;