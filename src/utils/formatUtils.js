export const formatFieldTitle = (text) => {
    if (!text) {
        return '';
    }
    
    const interim = text
        .split('_')
        .map(el => el.length > 10 ? (el.slice(0, 3) + '.') : el)
        .join(' ');

    return interim.slice(0, 1).toUpperCase() + interim.slice(1);
}
