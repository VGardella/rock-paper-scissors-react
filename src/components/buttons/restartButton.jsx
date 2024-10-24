import PropTypes from 'prop-types';
import '../../assets/styles/restartButton.css';

RestartButton.propTypes = {
    onClick: PropTypes.func
}

function RestartButton({ onClick }) {
    return(
        <button className='restart' id='restart' onClick={onClick}>
            Restart game
        </button>
    )
}

export default RestartButton;