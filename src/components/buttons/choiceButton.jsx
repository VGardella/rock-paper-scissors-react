import PropTypes from 'prop-types';
import './choiceButtons.css'

ChoiceButton.propTypes = {
    type: PropTypes.string,
    src: PropTypes.string,
    hover: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

function ChoiceButton({ type, src, hover, onClick, className }) {

    return(
        <img 
            className={`choice btn ${className}`}
            id = { type }
            alt={ type } 
            src={ src }
            onMouseOver={e => e.currentTarget.src = hover}
            onMouseOut={e => e.currentTarget.src = src}
            onClick={onClick}
            >
        </img>
    )
}

export default ChoiceButton;