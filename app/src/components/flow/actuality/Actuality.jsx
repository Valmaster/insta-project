import './Actuality.css';
import React, {useEffect, useState} from 'react';
import HeaderActuality from './header/Header'
import DescriptionActuality from './description/Description'
import CommentActuality from './comment/Comment'
import {toast} from "react-toastify";
import {connect} from "react-redux";
import * as publicationsActions from '../../../redux/store/publication/publication.actions';
import * as usersActions from '../../../redux/store/user/user.actions';

const Actuality = ({getPublications, postPublication, publications, getUsers, users}) => {

    const [actuality, setActuality] = useState({
        'description': ''
    });

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
    }, []);

    const handleChange = ({nativeEvent}) => {
        const name = nativeEvent.target.name
        const value = nativeEvent.target.value
        setActuality({...actuality, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postPublication(actuality);
        } catch ({response}) {
            if (response.data.statusCode === 401) {
                toast.error('Vous devez être connecté avant de publier quoi que ce soit.');
            }
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

                {publications.reverse().map((actuality) =>
                    <div className="item-flow">
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
                {users.reverse().map((user) =>
                    <div>
                        <p className="suggestion-list">
                            <p className="m-0 p-0">
                                <i className="fas fa-user-circle"></i>
                                <b className="cursor-pointer website-color"> {user.username}</b>
                            </p>
                            <a className="m-0 p-0" href="#">S'abonner</a>
                        </p>
                    </div>
                )}
            </div>
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
    postPublication: (publication) => dispatch(publicationsActions.postPublication(publication))
})

export default connect(mapStateToProps, mapDispatchToProps)(Actuality);
