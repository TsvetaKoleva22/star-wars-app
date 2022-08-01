import './InfoLine.scss';

const InfoLine = ({
    type,
    favorite
}) => (
    <p className={`info-line info-line--${type}`}>
        {favorite 
            ? (
                <>
                    <span className="info-line__favorite-name">{favorite.name} </span>
                    <span>currently in favorites</span>
                </>
            )
            : `No ${type} added to favorites yet`}
    </p>
);

export default InfoLine;
