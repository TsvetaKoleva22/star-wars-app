import InfoLine from './components/InfoLine';

import './InfoSection.scss';

const InfoSection = ({
    page,
    favorites,
    favorite,
}) => (
    <div className="info-section">
        {page === 'home' 
            ? Object.keys(favorites).map((keyName, index) => 
                <InfoLine 
                    key={index} 
                    type={keyName} 
                    favorite={favorites[keyName]} 
                />)
            : <InfoLine type={page} favorite={favorite} />
        }
    </div>
);

export default InfoSection;
