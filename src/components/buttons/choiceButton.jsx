import PropTypes from 'prop-types';

ChoiceButton.propTypes = {
    type: PropTypes.string,
    src: PropTypes.string,
}

function ChoiceButton({ type }) {
    return(
        <img className='choice-btn' alt={ type }></img>
    )
}

export default ChoiceButton;