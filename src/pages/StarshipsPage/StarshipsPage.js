import FadeLoader from "react-spinners/FadeLoader";

import { useAppContext } from '../../AppContext';

import Header from '../../components/Header';
import Container from '../../components/Container';
import InfoSection from '../../components/InfoSection';
import CardWrapper from '../../components/CardWrapper';
import Card from '../../components/Card';

const StarshipsPage = () => {
    const { 
        resourceStore: { starshipResources }, 
        queryData: { starshipsQueryData }, 
        favorites, 
        actions: { cardClickHandler } 
    } = useAppContext();

    return (
        <div className="starships-page">
            <Header />
    
            <Container className="starships-page__container">
                <InfoSection page="starship" favorite={favorites.starship} />
                {starshipsQueryData.isLoading 
                    ? <FadeLoader loading={starshipsQueryData.isLoading} cssOverride={{ margin: '20px auto' }} /> 
                    : starshipsQueryData.isError 
                        ? <div>{`An error has occurred: ${starshipsQueryData.error.message}`}</div>
                        : (<CardWrapper>
                            {starshipResources.length > 0 && starshipResources.map(starship => (
                                <Card
                                    key={starship.name}
                                    item={starship}
                                    cardClickHandler={cardClickHandler}
                                />)
                            )}
                        </CardWrapper>)
                }    
            </Container>
        </div>
    );
}

export default StarshipsPage;
