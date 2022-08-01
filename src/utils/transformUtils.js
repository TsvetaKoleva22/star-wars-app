export const transformCharacter = (item) => {
    if (!item) {
        return {}
    }

    return {
        name: item.name,
        homeworld_url: item.homeworld,
        additional_fields: {
            gender: item.gender,
            birth_year: item.birth_year,
        },
        type: 'character',
        isSelected: false,
    }
}

export const transformStarship = (item) => {
    if (!item) {
        return {}
    }

    return {
        name: item.name,
        starship_class: item.starship_class,
        additional_fields: {
            model: item.model,
            crew: item.crew,
            passangers: item.passengers,
            hyperdrive_rating: item.hyperdrive_rating,
        },
        type: 'starship',
        isSelected: false,
    }
}

export const transformVehicle = (item) => {
    if (!item) {
        return {}
    }

    return {
        name: item.name,
        vehicle_class: item.vehicle_class,
        additional_fields: {
            model: item.model,
            crew: item.crew,
            passangers: item.passengers,
            max_atmosphering_speed: item.max_atmosphering_speed,
        },
        type: 'vehicle',
        isSelected: false,
    }
}
