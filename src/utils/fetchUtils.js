import axios from "axios";
import { transformCharacter, transformStarship, transformVehicle } from './transformUtils';

const baseApi = 'https://swapi.dev/api/';

const fetchItems = async (resource, transformFunc) => {
    try {
        const { data } = await axios.get(`${baseApi}${resource}`);

        let items = data.results;
        const count = data.count;
        const numberOfPagesLeft = Math.ceil((count - 1) / 10);

        for (let i = 2; i <= numberOfPagesLeft; i++) {
            const currResponse = await axios.get(`${baseApi}${resource}?page=${i}`);
            items = [...items, ...currResponse.data.results];
        }

        return items.map(item => transformFunc(item));
    } catch (error) {
        console.error(error);
    }
}

export const fetchCharacters = () => fetchItems('people', transformCharacter);
export const fetchStarships = () => fetchItems('starships', transformStarship);
export const fetchVehicles = () => fetchItems('vehicles', transformVehicle);

export const fetchHomeworld = async (homeworldUrl) => {
    try {
        const { data } = await axios.get(homeworldUrl);

        return data.name;
    } catch (error) {
        console.error(error);
    }
}
