import { formatFieldTitle } from '../../utils/formatUtils';

import './Card.scss';

const Card = ({
    item,
    cardClickHandler,
}) => (
    <div 
        className={item.isSelected ? `card card--${item.type}-selected` : 'card'}
        onClick={() => cardClickHandler(item)}
    >
        <div className="card__header">
            <h3 className="card__title">{item.name}</h3>
            {item.type === 'character' && <h5 className={`card__subtitle card__subtitle--${item.type}`}>{item.homeworld}</h5>}
            {item.type === 'starship' && <h5 className={`card__subtitle card__subtitle--${item.type}`}>{item.starship_class}</h5>}
            {item.type === 'vehicle' && <h5 className={`card__subtitle card__subtitle--${item.type}`}>{item.vehicle_class}</h5>}
        </div>
        <div className="card__body">
            {Object.keys(item.additional_fields).map((keyName, index) => (
                <div key={index} className="card__additional-field">
                    <span className="card__field-data card__field-data--title">
                        {formatFieldTitle(keyName)}
                    </span>
                    <span className="card__field-data card__field-data--info">
                        {item.additional_fields[keyName]}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

export default Card;
