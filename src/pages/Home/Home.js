import Header from '../../components/Header';
import Container from '../../components/Container';
import InfoSection from '../../components/InfoSection';
import CardWrapper from '../../components/CardWrapper';
import Card from '../../components/Card';

import { useAppContext } from '../../AppContext';

const Home = () => {
    const { favorites } = useAppContext();
    
    return (
        <div className="home-page">
            <Header />
    
            <Container className="home-page__container">
                <InfoSection page="home" favorites={favorites} />
                <CardWrapper>
                    {Object.keys(favorites).map((keyName, index) => 
                        favorites[keyName] && <Card
                            key={index}
                            item={favorites[keyName]}
                            cardClickHandler={() => {}}
                    />)}
                </CardWrapper>
            </Container>
        </div>
    );
}

export default Home;
