import PropTypes from 'prop-types';
import './ColorCard.css';

function ColorCard({ colorCode, colorName }) {
    return (
        <div className="color-card" style={{ backgroundColor: colorCode }}>
            <div className="color-info">
                <p className="color-code">{colorCode}</p>
                <p className="color-name">{colorName}</p>
            </div>
        </div>
    );
}

ColorCard.propTypes = {
    colorCode: PropTypes.string.isRequired,
    colorName: PropTypes.string.isRequired,
};

export default ColorCard;
