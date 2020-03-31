// Redux Action creator

export const selectSong = (song) => {
    // Return an action
    // type key is mandatory
    // payload key is optional
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};