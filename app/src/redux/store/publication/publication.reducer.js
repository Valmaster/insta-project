const initialState = {
    error: '',
    publications: []
}

const PublicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUBLICATIONS':
            return {...state, publications: action.payload}
        case 'PUBLICATIONS_FAILED':
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export default PublicationReducer;
