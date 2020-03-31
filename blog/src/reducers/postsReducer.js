
export default (state=[], action) => {
/*     if(action.type==='FETCH_POSTS'){
        return action.payload;
    }
    return state; */

    // Using switch statement
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};