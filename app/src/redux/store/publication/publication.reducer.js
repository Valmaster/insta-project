const initialState = {
    error: '',
    publications: []
}

const PublicationReducer = (state = initialState, action) => {
    console.log(state.publications);
    switch (action.type) {
        case 'PUBLICATIONS':
            return {...state, publications: action.payload}
        case 'ADD_PUBLICATION':
            return {...state, publications: [...state.publications, action.payload]}
/*        case 'UPDATE_PUBLICATION':
            return {
                ...state,
                publications: state.publications.map(publication => publication.id === action.payload.id ? action.payload : publication)
            }*/
        case 'PUBLICATIONS_FAILED':
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export default PublicationReducer;
