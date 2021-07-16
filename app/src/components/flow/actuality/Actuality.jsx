import './Actuality.css';
import React, {useEffect, useState} from 'react';
import HeaderActuality from './header/Header'
import DescriptionActuality from './description/Description'
import CommentActuality from './comment/Comment'
import * as postsApi from "../../../api/posts";
import {toast} from "react-toastify";

const Actuality = ({history}) => {

    const [actuality, setActuality] = useState({
        'description': ''
    });
    const [actualities, setActualities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getActus = async () => {
            try {
                const data = await postsApi.getPosts();
                setActualities(data);
                setLoading(false);
            } catch (error) {
                console.log('Erreur lors de la récupération de la liste des posts');
            }
        }
        getActus();
    }, [])

    const handleChange = ({nativeEvent}) => {
        console.log(actuality);
        const name = nativeEvent.target.name
        const value = nativeEvent.target.value
        console.log(name, value);
        setActuality({...actuality, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postsApi.postPosts(actuality);
        } catch ({response}) {
            if (response.data.statusCode === 401) {
                toast.error('Vous devez être connecté avant de publier quoi que ce soit.');
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea name="description" onChange={handleChange}></textarea>
                <button type="submit" className="btn btn-success">Publier</button>
            </form>
            <div className="actuality-flow">
                {actualities.map((actuality) =>
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
        </>
    )
}

export default Actuality;
