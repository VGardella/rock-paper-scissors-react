import PropTypes from 'prop-types';

ChoiceButton.propTypes = {
    type: PropTypes.string,
    src: PropTypes.string,
}

function ChoiceButton({ type, src }) {
    return(
        <img className='choice-btn' alt={ type } src={ src }></img>
    )
}

export default ChoiceButton;