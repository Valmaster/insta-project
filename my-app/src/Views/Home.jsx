import React, {useEffect, useState} from 'react';
import {ListGroup} from 'react-bootstrap';
import * as userApi from '../api/users';
import * as postApi from '../api/posts';
import Image from "react-bootstrap/Image";
import {connect} from "react-redux";
import * as usersActions from '../redux/store/user/user.actions'

const Home = ({getUsers, usersReducer}) => {

    const [post, setPost] = useState({
        url: '',
        author: '',
        like: 0,
        date: ''
    });
    const [user, setUser] = useState({
        name: '',
        firstname: '',
        email: '',
        password: ''
    });
    const [posts, setPosts] = useState([]);
    //const [users, setUsers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    // A mettre dans un composant pour permettre d'ouvrir la liste des commentaires au click
    // Et seulement pour une actualité
    // const [comments, setComments] = useState(false)

    useEffect(() => {
        const testGetUsers = async () => getUsers();
        testGetUsers();
    }, [])

    useEffect(() => {
        const getPosts = async () => setPosts(await postApi.getPosts());
        getPosts();
    }, [])

    /*    useEffect(() => {
            const staticNews = [
                {
                    'id': 1,
                    'username': 'Valentin',
                    'media': './images/maiev.jpg',
                    'countViews': 1000,
                    'description': 'C\'est vraiment trop bien instagram, c\'est le top !'
                },
                {
                    'id': 2,
                    'username': 'Bruno',
                    'media': './images/maiev.jpg',
                    'countViews': 55,
                    'description': 'Le React c\'est la vie !'
                }
            ];
            setPosts(staticNews);
        }, [])*/

    useEffect(() => {
        const staticSuggestions = [
            {
                'id': 1,
                'username': 'Matthieu',
                'follower': true
            },
            {
                'id': 2,
                'username': 'Marie',
                'follower': false
            }
        ];
        setSuggestions(staticSuggestions);
    }, [])

    const handleChange = ({currentTarget}) => {
        setUser({...user, [currentTarget.name]: currentTarget.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userApi.postUser(user)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    const handleChangePost = ({currentTarget}) => {
        setPost({...post, [currentTarget.name]: currentTarget.value});
    }

    const handleSubmitPost = async (e) => {
        e.preventDefault();
        await postApi.postPosts(post)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    return (
        <>
            <h1>Instagram</h1>

            <div id="list-news" className="col-md-8">
                <h2>Le fil d'actualité</h2>
                Création User
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" onChange={handleChange}/>
                    <input type="text" name="firstname" onChange={handleChange}/>
                    <input type="email" name="email" onChange={handleChange}/>
                    <input type="password" name="password" onChange={handleChange}/>
                    <button type="submit" className="btn btn-success">Enregistrer</button>
                </form>

                Création Posts
                <form onSubmit={handleSubmitPost}>
                    <label>url</label>
                    <input type="text" name="url" onChange={handleChangePost}/>
                    <label>author</label>
                    <input type="text" name="author" onChange={handleChangePost}/>
                    <label>date</label>
                    <input type="date" name="date" onChange={handleChangePost}/>
                    <button type="submit" className="btn btn-success">Enregistrer</button>
                </form>
                {/*posts.map(news =>
                    <div key={news.id} className="news">
                        <h3>{news.username}</h3>
                        <img src={news.media} alt={"news image " + news.id}/>
                        <div className="suggestion-icons">
                            <i><Heart/></i>
                            <i><ChatRight/></i>
                            <i><Cursor/></i>
                        </div>
                        <p>{news.description}</p>
                        <hr/>
                        <div className="add-comment">
                            <form className="">
                                <div>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>😎</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            name="comment"
                                            placeholder="Recipient's username"
                                            aria-label="Amount (to the nearest dollar)"
                                        />
                                    </InputGroup>
                                </div>
                            </form>
                        </div>
                    </div>
                )*/}
            </div>
            <div id="suggestions" className="col-md-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="">Suggestions pour vous</h3>
                    <span>Voir tout</span>
                </div>
                <ul>
                    {suggestions.map(suggestion =>
                        <ListGroup key={suggestion.id}>
                            <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                    <p>{suggestion.username}
                                        <Image src="holder.js/171x180" roundedCircle/>
                                        <small><br/>
                                            {suggestion.follower &&
                                            <>Vous suit</>
                                            ||
                                            <>Suggestions pour vous</>
                                            }
                                        </small>
                                    </p>
                                    <a href="">S'abonner</a>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    )}
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    usersReducer: state.usersReducer
})

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(usersActions.getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


