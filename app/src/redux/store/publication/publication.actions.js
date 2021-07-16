import axios from "axios";

export const publicationsSuccess = publications => ({
    type: 'PUBLICATIONS',
    payload: publications
})

export const publicationsFailed = error => ({
    type: 'PUBLICATIONS_FAILED',
    payload: 'error'
})

export const publicationAdded = publication => ({
    type: 'ADD_PUBLICATION',
    payload: publication
})

export const getPublications = () => async dispatch => {
    axios.get('http://localhost:3001/publications')
        .then((response) => {
            console.log(response);
            response.status === 200
                ? dispatch(publicationsSuccess(response.data))
                : dispatch(publicationsFailed('Erreur lors du chargement de la liste des publications'));
        })
        .catch((error) => {
            dispatch(publicationsFailed('Erreur lors du chargement de la liste des publications'))
        })
}

export const postPublication = (publication) => async dispatch => {
    axios.post('http://localhost:3001/publications', publication)
        .then((response) => {
            response.status === 201
                ? dispatch(publicationAdded(response.data))
                : dispatch(publicationsFailed('Erreur lors de la création d\'une publication.'));
        })
        .catch((error) => {
            dispatch(publicationsFailed('Erreur lors de la création d\'une publication.'))
        })
}
