import axios from "axios";

export const publicationsSuccess = users => ({
    type: 'PUBLICATIONS',
    payload: users
})

export const publicationsFailed = error => ({
    type: 'PUBLICATIONS_FAILED',
    payload: 'error'
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
            dispatch(publicationsFailed(error))
        })
}

export const postPublication = (publication) => async dispatch => {
        axios.post('http://localhost:3001/publications', publication)
            .then((response) => {
                console.log(response);
                if (response.ok) dispatch(publicationsSuccess(publication))
                else dispatch(publicationsFailed(publication))
            })
            .catch((error) => {
                dispatch(publicationsFailed(error))
            })
}
