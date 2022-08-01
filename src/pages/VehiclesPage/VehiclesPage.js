import FadeLoader from "react-spinners/FadeLoader";

import { useAppContext } from '../../AppContext';

import Header from '../../components/Header';
import Container from '../../components/Container';
import InfoSection from '../../components/InfoSection';
import CardWrapper from '../../components/CardWrapper';
import Card from '../../components/Card';

const VehiclesPage = () => {
    const { 
        resourceStore: { vehicleResources }, 
        queryData: { vehiclesQueryData }, 
        favorites, 
        actions: { cardClickHandler } 
    } = useAppContext();

    return (
        <div className="vehicles-page">
            <Header />
    
            <Container className="vehicles-page__container">
                <InfoSection page="vehicle" favorite={favorites.vehicle} />
                {vehiclesQueryData.isLoading 
                    ? <FadeLoader loading={vehiclesQueryData.isLoading} cssOverride={{ margin: '20px auto' }} /> 
                    : vehiclesQueryData.isError 
                        ? <div>{`An error has occurred: ${vehiclesQueryData.error.message}`}</div>
                        : (<CardWrapper>
                            {vehicleResources.length > 0 && vehicleResources.map(vehicle => (
                                <Card
                                    key={vehicle.name}
                                    item={vehicle}
                                    cardClickHandler={cardClickHandler}
                                />)
                            )}
                        </CardWrapper>)
                }         
            </Container>
        </div>
    );
}

export default VehiclesPage;
