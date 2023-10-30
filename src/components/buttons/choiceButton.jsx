import PropTypes from 'prop-types';
import './choiceButtons.css'

ChoiceButton.propTypes = {
    type: PropTypes.string,
    src: PropTypes.string,
    hover: PropTypes.string,
}

function ChoiceButton({ type, src, hover }) {
    return(
        <img 
            className='choice btn'
            id = { type }
            alt={ type } 
            src={ src }
            onMouseOver={e => e.currentTarget.src = hover}
            onMouseOut={e => e.currentTarget.src = src}>
        </img>
    )
}

export default ChoiceButton;