import './Actuality.css';
import React, {useEffect, useState} from 'react';
import HeaderActuality from './header/Header'
import DescriptionActuality from './description/Description'
import CommentActuality from './comment/Comment'
import * as postsApi from "../../../api/posts";
import * as userApi from "../../../api/users";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import * as publicationsActions from '../../../redux/store/publication/publication.actions';

const Actuality = ({history, getPublications, publicationsReducer}) => {

    const [actuality, setActuality] = useState({
        'description': ''
    });
    const [add, setAdd] = useState(1);
    const [actualities, setActualities] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        suggestion();
        const getActus = async () => getPublications();
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
    }, [add])

    const handleChange = ({nativeEvent}) => {
        const name = nativeEvent.target.name
        const value = nativeEvent.target.value
        setActuality({...actuality, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postsApi.postPosts(actuality);
            setAdd(add + 1);
        } catch ({response}) {
            if (response.data.statusCode === 401) {
                toast.error('Vous devez être connecté avant de publier quoi que ce soit.');
            }
        }
    }

    const suggestion = async (e) => {
        const data = await userApi.getAllUsers();
        setUsers(data)
    }

    return (
        <>
            <div className="actuality-flow">
                <div className="card-custom">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="description" className="mt-2 mb-2">Que voulez-vous dire ?</label>
                            <textarea name="description" id="description" onChange={handleChange} className="form-control"></textarea>
                            <br/>
                            <button type="submit" className="btn-custom">Publier !</button>
                        </div>
                    </form>
                </div>

                {actualities.reverse().map((actuality) =>
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
                                <b className="cursor-pointer website-color"> { user.username }</b>
                            </p>
                            <a className="m-0 p-0" href="#">S'abonner</a>
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    publicationsReducers: state.publicationsReducers
})

const mapDispatchToProps = dispatch => ({
    getPublications: () => dispatch(publicationsActions.getPublications())
})

export default connect(mapStateToProps, mapDispatchToProps)(Actuality);
