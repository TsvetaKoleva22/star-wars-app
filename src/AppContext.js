import { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacters, fetchStarships, fetchVehicles, fetchPlanets } from './utils/fetchUtils';

const AppContext = createContext(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('AppContext must be used within the AppProvider');
    }

    return context;
}

const queryConfig = {
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
}

export const ContextWrapper = ({ children }) => {
    const [favorites, setFavorites] = useState({
        character: null,
        starship: null,
        vehicle: null,
    })

    const addToFavorites = (item) => setFavorites((prevState) => {
        return {...prevState, [item.type]: {...item, isSelected: true}}
    });

    const removeFromFavorites = (item) => setFavorites((prevState) => {
        return {...prevState, [item.type]: null}
    });

    const [resourceStore, setResourceStore] = useState({
        characterResources: [],
        starshipResources: [],
        vehicleResources: [],
    });

    const charactersQueryData = useQuery(['characters'], fetchCharacters, queryConfig);
    const starshipsQueryData = useQuery(['starships'], fetchStarships, queryConfig);
    const vehiclesQueryData = useQuery(['vehicles'], fetchVehicles, queryConfig);
    const planetsQueryData = useQuery(['planets'], fetchPlanets, queryConfig);

    useEffect(() => {
        if (charactersQueryData.data && planetsQueryData.data) {
            const charactersWithPlanets = charactersQueryData.data.map(character => {
                const foundHomeworld = planetsQueryData.data.find(homeworld => homeworld.url === character.homeworld_url);
                return {...character, homeworld: foundHomeworld ? foundHomeworld.name : ''}
            })
            setResourceStore((prevState) => {
                return {...prevState, characterResources: charactersWithPlanets}}
            )
        }
    }, [charactersQueryData.data, planetsQueryData.data]);

    useEffect(() => {
        if (starshipsQueryData.data) {
            setResourceStore((prevState) => {
                return {...prevState, starshipResources: starshipsQueryData.data}}
            )
        }
    }, [starshipsQueryData.data]);

    useEffect(() => {
        if (vehiclesQueryData.data) {
            setResourceStore((prevState) => {
                return {...prevState, vehicleResources: vehiclesQueryData.data}}
            )
        }
    }, [vehiclesQueryData.data]);

    const cardClickHandler = (item) => {
        const resourceType = `${item.type}Resources`;

        if (!favorites[item.type]) { //we do not have favorite item of this type
            addToFavorites(item);
            setResourceStore((prevState) => {
                const currentTypeResources = [...prevState[resourceType]];
                const foundIndex = currentTypeResources.findIndex(x => x.name === item.name);
                currentTypeResources[foundIndex] = {...item, isSelected: true};
                return {...prevState, [resourceType]: currentTypeResources};
            })
        } else if (favorites[item.type] && favorites[item.type].name !== item.name) { //we have another favorite item of this type
            addToFavorites(item);
            setResourceStore((prevState) => {
                let currentTypeResources = [...prevState[resourceType]];
                const foundIndex = currentTypeResources.findIndex(x => x.name === item.name);
                currentTypeResources = currentTypeResources.map(resource => {
                    return {...resource, isSelected: false}
                })
                currentTypeResources[foundIndex] = {...item, isSelected: true};
                return {...prevState, [resourceType]: currentTypeResources};
            })
        } else if (favorites[item.type] && favorites[item.type].name === item.name) { //we have the same favorite item
            removeFromFavorites(item);
            setResourceStore((prevState) => {
                const currentTypeResources = [...prevState[resourceType]];
                const foundIndex = currentTypeResources.findIndex(x => x.name === item.name);
                currentTypeResources[foundIndex] = {...item, isSelected: false};
                return {...prevState, [resourceType]: currentTypeResources};
            })
        } 
    }

    const providerValue = { 
        resourceStore, 
        queryData: {
            charactersQueryData, 
            starshipsQueryData, 
            vehiclesQueryData,
        }, 
        favorites, 
        actions: {
            cardClickHandler,
        }
    }

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    )
}
