import './Actuality.css';
import React, {useEffect, useState} from 'react';
import HeaderActuality from './header/Header'
import DescriptionActuality from './description/Description'
import CommentActuality from './comment/Comment'
import {toast} from "react-toastify";
import {connect} from "react-redux";
import * as publicationsActions from '../../../redux/store/publication/publication.actions';
import * as usersActions from '../../../redux/store/user/user.actions';
import FormEditActuality from "./formEditActuality/FormEditActuality";
import {Modal} from "../../Modal";

const Actuality = ({getPublications, postPublication, deletePublication, publications, getUsers, users}) => {

    const [showModal, setShowModal] = useState(false);
    const [actuality, setActuality] = useState({
        'description': ''
    });
    const [theActuality, setTheActuality] = useState();
    const [increment, setIncrement] = useState(1);

    useEffect(() => {
        const getUsers = async () => await getPublications();
        getUsers()
    }, []);

    useEffect(() => {
        const getActus = async () => await getUsers();
        getActus();
        /*const getActus = async () => {
            try {
                const data = await postsApi.getPosts();
                setActualities(data);
                setLoading(false);
            } catch (error) {
                console.log('Erreur lors de la récupération de la liste des posts');
            }
        }
        getActus();*/
    }, [increment]);

    const handleChange = ({nativeEvent}) => {
        const name = nativeEvent.target.name
        const value = nativeEvent.target.value
        setActuality({...actuality, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postPublication(actuality);
            setIncrement(increment + 1);
        } catch ({response}) {
            if (response.data.statusCode === 401) {
                toast.error('Vous devez être connecté avant de publier quoi que ce soit.');
            }
        }
    }

    const handleDelete = async (id) => {
        try {
            await deletePublication(id);
            setIncrement(increment + 1);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="actuality-flow">
                <div className="card-custom">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="description" className="mt-2 mb-2">Que voulez-vous dire ?</label>
                            <textarea name="description" id="description" onChange={handleChange}
                                      className="form-control"></textarea>
                            <br/>
                            <button type="submit" className="btn-custom">Publier !</button>
                        </div>
                    </form>
                </div>

                {publications.map((actuality) =>
                    <div key={actuality.id} className="item-flow">
                        <button
                            onClick={() => {
                                setTheActuality(actuality)
                                setShowModal(true);
                            }}
                        >
                            Modifier
                        </button>
                        <button onClick={() => handleDelete(actuality.id)}>Supprimer</button>
                        <HeaderActuality/>
                        <div className="item-flow-image">
                            <img src="./cartman.jpg" alt="Cartman"/>
                        </div>
                        <DescriptionActuality actuality={actuality}/>
                        <CommentActuality/>
                    </div>
                )}
            </div>
            <div className="suggestion">
                <br/>
                {users.map((user) =>
                    <div key={user.id}>
                        <div className="suggestion-list">
                            <p className="m-0 p-0">
                                <i className="fas fa-user-circle"></i>
                                <b className="cursor-pointer website-color"> {user.username}</b>
                            </p>
                            <a className="m-0 p-0" href="#">S'abonner</a>
                        </div>
                    </div>
                )}
            </div>
            {theActuality !== undefined &&
            (
                <Modal
                    onClose={setShowModal}
                    title="Modifier une actualité"
                >
                    <FormEditActuality onclose={setShowModal} actuality={theActuality}/>
                </Modal>
            )
            }

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        publications: state.publication.publications
    }
};

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(usersActions.getUsers()),
    getPublications: () => dispatch(publicationsActions.getPublications()),
    postPublication: (publication) => dispatch(publicationsActions.postPublication(publication)),
    deletePublication: (id) => dispatch(publicationsActions.deletePublication(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Actuality);
