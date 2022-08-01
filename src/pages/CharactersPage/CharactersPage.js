import FadeLoader from "react-spinners/FadeLoader";

import { useAppContext } from '../../AppContext';

import Header from '../../components/Header';
import Container from '../../components/Container';
import InfoSection from '../../components/InfoSection';
import CardWrapper from '../../components/CardWrapper';
import Card from '../../components/Card';

const CharactersPage = () => {
    const { 
        resourceStore: { characterResources }, 
        queryData: { charactersQueryData }, 
        favorites, 
        actions: { cardClickHandler } 
    } = useAppContext();
     
    return (
        <div className="characters-page">
            <Header />

            <Container className="characters-page__container">
                <InfoSection page="character" favorite={favorites.character} />
                {charactersQueryData.isLoading 
                    ? <FadeLoader loading={charactersQueryData.isLoading} cssOverride={{ margin: '20px auto' }} /> 
                    : charactersQueryData.isError 
                        ? <div>{`An error has occurred: ${charactersQueryData.error.message}`}</div>
                        : (<CardWrapper>
                            {characterResources.length > 0 && characterResources.map(character => (
                                <Card
                                    key={character.name}
                                    item={character}
                                    cardClickHandler={cardClickHandler}
                                />)
                            )}
                        </CardWrapper>)
                }                
            </Container>
        </div>
    )
};

export default CharactersPage;
