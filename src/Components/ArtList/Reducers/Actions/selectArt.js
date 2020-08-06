export const selectArt = (art) => {
    return {
        type: 'ART_SELECTED',
        payload: art,
    }
}